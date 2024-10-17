import nanoid
from celery import shared_task

from analysis.models import AnalysisLevelCrossing

# noinspection PyProtectedMember
import pandas as pd
from io import StringIO
from .lc import RfcntRainflow9CLevelCrossing
from bs4 import UnicodeDammit


@shared_task
def process_level_crossing(level_crossing_id):
    # noinspection PyUnresolvedReferences
    level_crossing = AnalysisLevelCrossing.objects.get(id=level_crossing_id)

    level_crossing.status = AnalysisLevelCrossing.STATUS_PENDING
    level_crossing.save()

    try:
        csv_string_io = StringIO(level_crossing.chart_data)
        encoding = UnicodeDammit(level_crossing.chart_data).original_encoding
        if encoding is None:
            encoding = 'windows-1250'

        print(f'[{level_crossing.id}] encoding {encoding}')
        data_df = pd.read_csv(csv_string_io,
                              delimiter=',',
                              skiprows=[0, 1, 3, 4, 5, 6, 7],
                              nrows=1,
                              encoding=encoding,
                              low_memory=False)

        list_of_column_names = list(data_df.columns)

        data_df = None

        images = []

        print(f'[{level_crossing.id}, {len(list_of_column_names)}] 작업시작')

        for idx, v in enumerate(list_of_column_names):

            try:
                if v.strip() == "" or v.strip() == " .1" or v.strip() == ".1":
                    continue

                resp = RfcntRainflow9CLevelCrossing().exec(str(level_crossing.id),
                                                           v.strip(),
                                                           level_crossing.chart_data,
                                                           idx,
                                                           encoding)

                print(f'[{level_crossing.id}-{idx}-{v.strip()}] 작업 완료')

                images.append({
                    "id": nanoid.generate(),
                    "columnName": v.strip(),
                    "filename": resp["filename"],
                    "damage": resp["damage"],
                    "status": AnalysisLevelCrossing.STATUS_SUCCESS
                })
            except Exception as e:
                print(f'[{level_crossing.id}-{idx}-{v.strip()}] 작업 오류: {e}')

                images.append({
                    "id": nanoid.generate(),
                    "columnName": v.strip(),
                    "status": AnalysisLevelCrossing.STATUS_ERROR
                })

        level_crossing.status = AnalysisLevelCrossing.STATUS_SUCCESS
        level_crossing.images = images
        print(f'[{level_crossing.id}] 작업완료')
    except Exception as e:
        print(f'[{level_crossing.id}] 작업오류: {e}')
        level_crossing.status = AnalysisLevelCrossing.STATUS_ERROR

    level_crossing.save()
