import os
from datetime import time
import time

import graphene
import nanoid
from django.conf import settings
from graphene_django import DjangoObjectType
import graphql_jwt
from analysis.models import AnalysisFile, AnalysisLevelCrossing
from .tasks import process_level_crossing
from bs4 import UnicodeDammit
from io import StringIO
import pandas as pd


class AnalysisFileModel(DjangoObjectType):
    class Meta:
        model = AnalysisFile


class AnalysisLevelCrossingType(DjangoObjectType):
    class Meta:
        model = AnalysisLevelCrossing


class CreateAnalysisFileMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        chart_cell_name = graphene.String(required=True)
        car_type = graphene.String()
        year = graphene.String()
        area = graphene.String()
        weight = graphene.String()
        road_surface = graphene.String()
        test_count = graphene.String()
        xc_split_range = graphene.String()
        chart_data = graphene.String()

    # The class attributes define the response of the mutation
    analysis_file = graphene.Field(AnalysisFileModel)

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, chart_cell_name, car_type, year, area, weight, road_surface, test_count, xc_split_range,
               chart_data):

        analysis_file = AnalysisFile.objects.create(
            chart_cell_name=chart_cell_name,
            car_type=car_type,
            year=year,
            area=area,
            weight=weight,
            road_surface=road_surface,
            test_count=test_count,
            xc_split_range=xc_split_range,
            chart_data=chart_data,
        )

        analysis_file.car_type = chart_cell_name
        analysis_file.car_type = car_type
        analysis_file.year = year
        analysis_file.area = area
        analysis_file.weight = weight
        analysis_file.road_surface = road_surface
        analysis_file.test_count = test_count
        analysis_file.xc_split_range = xc_split_range
        analysis_file.chart_data = chart_data
        analysis_file.chart_data = analysis_file.chart_data.replace("\r\n", "\n")
        analysis_file.filename = '%s_%s_%s_%s_%s_%s.csv' % (car_type,
                                                            year,
                                                            area,
                                                            weight,
                                                            road_surface,
                                                            test_count)
        analysis_file.save()

        os.makedirs(settings.IMAGE_ROOT + '/uploads/' + str(analysis_file.id), exist_ok=True)

        filename = '%s/uploads/%s/%s' % (settings.IMAGE_ROOT,
                                         analysis_file.id,
                                         analysis_file.filename)

        if xc_split_range is not None and xc_split_range:

            csv_string_io = StringIO(analysis_file.chart_data)

            encoding = UnicodeDammit(analysis_file.chart_data).original_encoding

            if encoding is None:
                encoding = 'windows-1250'

            headers = csv_string_io.readlines()[0:8]

            csv_string_io = StringIO(analysis_file.chart_data)

            data_df = pd.read_csv(csv_string_io,
                                  delimiter=',',
                                  skiprows=[0, 1, 2, 3, 4, 5, 6, 7],
                                  encoding=encoding,
                                  low_memory=False)

            split_rows = xc_split_range.split(",")

            for idx, v in enumerate(split_rows):
                # item = None
                startPos = 0
                endPos = 0
                if idx == 0:
                    startPos = 0
                    endPos = int(v)
                    # item = data_df[0:int(v)]
                else:
                    startPos = int(split_rows[idx - 1])
                    endPos = int(v)
                    # item = data_df[int(split_rows[idx-1]):int(v)]

                chart = data_df[startPos:endPos]

                analysis_level_crossing = AnalysisLevelCrossing.objects.create(
                    analysis_file_id=analysis_file.id,
                    title="구간%d" % (idx + 1),
                    chart_data="%s%s" % ("".join(headers), chart.to_csv(index=False, sep=",")),
                    status=AnalysisLevelCrossing.STATUS_UPLOADED,
                )

                analysis_level_crossing.analysis_file_id = analysis_file.id
                analysis_level_crossing.title = title = "구간%d" % (idx + 1)

                analysis_level_crossing.start_pos = startPos
                analysis_level_crossing.end_pos = endPos
                analysis_level_crossing.chart_data = "%s%s" % ("".join(headers), chart.to_csv(index=False, sep=","))
                analysis_level_crossing.chart_data = analysis_level_crossing.chart_data.replace("\r\n", "\n")
                analysis_level_crossing.status = AnalysisLevelCrossing.STATUS_UPLOADED
                analysis_level_crossing.filename = '%s_%s_%s_%s_%s_%s_%s_%s.csv' % (analysis_file.car_type,
                                                                                    analysis_file.year,
                                                                                    analysis_file.area,
                                                                                    analysis_file.weight,
                                                                                    analysis_file.road_surface,
                                                                                    analysis_file.test_count,
                                                                                    title.replace(' ', '_'),
                                                                                    nanoid.generate()
                                                                                    )
                analysis_level_crossing.save()

                dirname = '%s/uploads/%s/splits/%s' % (settings.IMAGE_ROOT,
                                                       analysis_file.id,
                                                       analysis_level_crossing.id)

                os.makedirs(dirname, exist_ok=True)

                filename = '%s/%s' % (dirname,
                                      analysis_level_crossing.filename)

                with open(filename, "w", encoding="utf-8") as f:
                    f.write(analysis_level_crossing.chart_data)

        else:
            with open(filename, "w", encoding="utf-8") as f:
                f.write(analysis_file.chart_data)

        # print(chart_data)
        # Notice we return an instance of this mutation
        # noinspection PyArgumentList
        return CreateAnalysisFileMutation(analysis_file=analysis_file)


class UpdateAnalysisFileMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        id = graphene.String(required=True)
        chart_cell_name = graphene.String(required=True)
        car_type = graphene.String(required=True)
        year = graphene.String(required=True)
        area = graphene.String(required=True)
        weight = graphene.String(required=True)
        road_surface = graphene.String(required=True)
        test_count = graphene.String(required=True)
        xc_split_range = graphene.String()
        chart_data = graphene.String()

    # The class attributes define the response of the mutation
    analysis_file = graphene.Field(AnalysisFileModel)

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, id, chart_cell_name, car_type, year, area, weight, road_surface, test_count, xc_split_range,
               chart_data):

        encoding = UnicodeDammit(chart_data).original_encoding

        if encoding is None:
            encoding = 'windows-1250'

        analysis_file = AnalysisFile.objects.get(id=id)

        filename = '%s/uploads/%s/%s' % (settings.IMAGE_ROOT,
                                         analysis_file.id,
                                         analysis_file.filename)

        if os.path.isfile(filename):
            os.remove(filename)

        if chart_data is not None:
            analysis_file.chart_data = chart_data
            analysis_file.chart_data = analysis_file.chart_data.replace("\r\n", "\n")

        analysis_file.car_type = car_type
        analysis_file.chart_cell_name = chart_cell_name
        analysis_file.year = year
        analysis_file.area = area
        analysis_file.weight = weight
        analysis_file.road_surface = road_surface
        analysis_file.test_count = test_count
        analysis_file.xc_split_range = xc_split_range
        analysis_file.filename = '%s_%s_%s_%s_%s_%s.csv' % (car_type,
                                                            year,
                                                            area,
                                                            weight,
                                                            road_surface,
                                                            test_count)
        analysis_file.save()

        filename = '%s/uploads/%s/%s' % (settings.IMAGE_ROOT,
                                         analysis_file.id,
                                         analysis_file.filename)

        # encoding = UnicodeDammit(chart_data).original_encoding
        #
        # if encoding is None:
        #     encoding = 'windows-1250'

        with open(filename, "w", encoding="utf-8") as f:
            f.write(analysis_file.chart_data)

        # Notice we return an instance of this mutation
        # noinspection PyArgumentList
        return UpdateAnalysisFileMutation(analysis_file=analysis_file)


class DeleteAnalysisFileMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        id = graphene.String(required=True)

        # The class attributes define the response of the mutation

    success = graphene.Boolean()

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, id):
        analysis_file = AnalysisFile.objects.get(id=id)

        analysis_file.delete()

        AnalysisLevelCrossing.objects.filter(analysis_file_id=id).delete()

        # noinspection PyArgumentList
        return DeleteAnalysisFileMutation(success=True)


class UploadAnalysisLevelCrossingMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        analysis_file_id = graphene.String()
        title = graphene.String()
        chart_data = graphene.String()

    # The class attributes define the response of the mutation
    analysis_level_crossing = graphene.Field(AnalysisLevelCrossingType)

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, analysis_file_id, title, chart_data):
        start_pos = 0
        end_pos = 0

        analysis_file = AnalysisFile.objects.get(id=analysis_file_id)

        count = AnalysisLevelCrossing.objects.filter(analysis_file_id=analysis_file_id).count()

        csv_string_io = StringIO(analysis_file.chart_data)

        encoding = UnicodeDammit(chart_data).original_encoding

        if encoding is None:
            encoding = 'windows-1250'

        headers = csv_string_io.readlines()[0:8]

        csv_string_io = StringIO(chart_data)

        data_df = pd.read_csv(csv_string_io,
                              delimiter=',',
                              # skiprows=[0, 1, 2, 3, 4, 5, 6, 7],
                              encoding=encoding,
                              low_memory=False)

        # print(data_df.)
        if count == 0:
            end_pos = len(data_df.index)
            analysis_file.chart_data = "%s%s" % ("".join(headers), chart_data)
        else:
            last = AnalysisLevelCrossing.objects.filter(analysis_file_id=analysis_file_id).last()
            start_pos = int(last.end_pos)
            end_pos = start_pos + len(data_df.index)
            analysis_file.chart_data = "%s%s" % (analysis_file.chart_data, chart_data)

        analysis_file.chart_data = analysis_file.chart_data.replace("\r\n", "\n")

        analysis_level_crossing = AnalysisLevelCrossing.objects.create(
            analysis_file_id=analysis_file_id,
            title=title,
            chart_data=chart_data,
            status=AnalysisLevelCrossing.STATUS_UPLOADED,
        )

        analysis_level_crossing.analysis_file_id = analysis_file_id
        analysis_level_crossing.title = title
        analysis_level_crossing.start_pos = start_pos
        analysis_level_crossing.end_pos = end_pos
        analysis_level_crossing.chart_data = "%s%s" % ("".join(headers), chart_data)
        analysis_level_crossing.chart_data = analysis_level_crossing.chart_data.replace("\r\n", "\n")
        analysis_level_crossing.status = AnalysisLevelCrossing.STATUS_UPLOADED
        analysis_level_crossing.filename = '%s_%s_%s_%s_%s_%s_%s_%s.csv' % (analysis_file.car_type,
                                                                            analysis_file.year,
                                                                            analysis_file.area,
                                                                            analysis_file.weight,
                                                                            analysis_file.road_surface,
                                                                            analysis_file.test_count,
                                                                            title.replace(' ', '_'),
                                                                            nanoid.generate()
                                                                            )
        analysis_level_crossing.save()

        analysis_file.save()

        dirname = '%s/uploads/%s/splits/%s' % (settings.IMAGE_ROOT,
                                               analysis_file_id,
                                               analysis_level_crossing.id)

        os.makedirs(dirname, exist_ok=True)

        filename = '%s/%s' % (dirname,
                              analysis_level_crossing.filename)

        with open(filename, "w", encoding="utf-8") as f:
            f.write(analysis_level_crossing.chart_data)

        filename = '%s/uploads/%s/%s' % (settings.IMAGE_ROOT,
                                         analysis_file.id,
                                         analysis_file.filename)

        with open(filename, "w", encoding="utf-8") as f:
            f.write(analysis_file.chart_data)

        # process_level_crossing.delay(analysis_level_crossing.id)
        # Notice we return an instance of this mutation
        # noinspection PyArgumentList
        return UploadAnalysisLevelCrossingMutation(analysis_level_crossing=analysis_level_crossing)


class CreateAnalysisLevelCrossingMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        analysis_file_id = graphene.String()
        title = graphene.String()
        start_pos = graphene.Int()
        end_pos = graphene.Int()
        chart_data = graphene.String()

    # The class attributes define the response of the mutation
    analysis_level_crossing = graphene.Field(AnalysisLevelCrossingType)

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, analysis_file_id, title, start_pos, end_pos, chart_data):
        encoding = UnicodeDammit(chart_data).original_encoding

        if encoding is None:
            encoding = 'windows-1250'

        analysis_file = AnalysisFile.objects.get(id=analysis_file_id)

        analysis_level_crossing = AnalysisLevelCrossing.objects.create(
            analysis_file_id=analysis_file_id,
            title=title,
            chart_data=chart_data,
            status=AnalysisLevelCrossing.STATUS_UPLOADED,
        )

        analysis_level_crossing.analysis_file_id = analysis_file_id
        analysis_level_crossing.title = title
        analysis_level_crossing.start_pos = start_pos
        analysis_level_crossing.end_pos = end_pos
        analysis_level_crossing.chart_data = chart_data
        analysis_level_crossing.chart_data = analysis_level_crossing.chart_data.replace("\r\n", "\n")
        analysis_level_crossing.status = AnalysisLevelCrossing.STATUS_UPLOADED
        analysis_level_crossing.filename = '%s_%s_%s_%s_%s_%s_%s_%s.csv' % (analysis_file.car_type,
                                                                            analysis_file.year,
                                                                            analysis_file.area,
                                                                            analysis_file.weight,
                                                                            analysis_file.road_surface,
                                                                            analysis_file.test_count,
                                                                            title.replace(' ', '_'),
                                                                            nanoid.generate()
                                                                            )
        analysis_level_crossing.save()

        dirname = '%s/uploads/%s/splits/%s' % (settings.IMAGE_ROOT,
                                               analysis_file_id,
                                               analysis_level_crossing.id)

        os.makedirs(dirname, exist_ok=True)

        filename = '%s/%s' % (dirname,
                              analysis_level_crossing.filename)

        with open(filename, "w", encoding="utf-8") as f:
            f.write(analysis_level_crossing.chart_data)

        # process_level_crossing.delay(analysis_level_crossing.id)
        # Notice we return an instance of this mutation
        # noinspection PyArgumentList
        return CreateAnalysisLevelCrossingMutation(analysis_level_crossing=analysis_level_crossing)


class UpdateAnalysisLevelCrossingMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        id = graphene.String(required=True)
        title = graphene.String(required=True)
        start_pos = graphene.Int()
        end_pos = graphene.Int()

    # The class attributes define the response of the mutation
    analysis_level_crossing = graphene.Field(AnalysisLevelCrossingType)

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, id, title, start_pos, end_pos):
        analysis_level_crossing = AnalysisLevelCrossing.objects.get(id=id)

        analysis_file = AnalysisFile.objects.get(id=analysis_level_crossing.analysis_file_id)

        csv_string_io = StringIO(analysis_file.chart_data)

        encoding = UnicodeDammit(analysis_file.chart_data).original_encoding

        if encoding is None:
            encoding = 'windows-1250'

        headers = csv_string_io.readlines()[0:8]
        csv_string_io = StringIO(analysis_file.chart_data)
        data_df = pd.read_csv(csv_string_io,
                              delimiter=',',
                              skiprows=[0, 1, 2, 3, 4, 5, 6, 7],
                              encoding=encoding,
                              low_memory=False)
        chart_data = data_df[int(start_pos):int(end_pos)]
        analysis_level_crossing.title = title
        analysis_level_crossing.start_pos = int(start_pos)
        analysis_level_crossing.end_pos = int(end_pos)
        analysis_level_crossing.chart_data = "%s%s" % ("".join(headers), chart_data.to_csv(index=False, sep=","))
        analysis_level_crossing.chart_data = analysis_level_crossing.chart_data.replace("\r\n", "\n")

        # noinspection DuplicatedCode
        analysis_level_crossing.save()

        dirname = '%s/uploads/%s/splits/%s' % (settings.IMAGE_ROOT,
                                               analysis_level_crossing.analysis_file_id,
                                               analysis_level_crossing.id)
        os.makedirs(dirname, exist_ok=True)
        filename = '%s/%s' % (dirname,
                              analysis_level_crossing.filename)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(analysis_level_crossing.chart_data)
        # noinspection PyArgumentList
        return UpdateAnalysisLevelCrossingMutation(analysis_level_crossing=analysis_level_crossing)


class StartAnalysisLevelCrossingMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        id = graphene.String(required=True)

    # The class attributes define the response of the mutation
    success = graphene.Boolean()

    # noinspection PyMethodMayBeStatic
    # noinspection PyMethodMayBeStatic
    def mutate(self, info, id):
        analysis_level_crossing = AnalysisLevelCrossing.objects.get(id=id)

        analysis_level_crossing.status = AnalysisLevelCrossing.STATUS_REQUEST

        analysis_level_crossing.save()

        process_level_crossing.delay(analysis_level_crossing.id)

        # noinspection PyArgumentList
        return StartAnalysisLevelCrossingMutation(success=True)


class DeleteAnalysisLevelCrossingMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        id = graphene.String(required=True)

        # The class attributes define the response of the mutation

    success = graphene.Boolean()

    # noinspection PyMethodMayBeStatic
    def mutate(self, info, id):
        analysis_level_crossing = AnalysisLevelCrossing.objects.get(id=id)

        analysis_level_crossing.delete()

        # noinspection PyArgumentList
        return DeleteAnalysisLevelCrossingMutation(success=True)


class Query(graphene.ObjectType):
    analysis_files = graphene.List(AnalysisFileModel)
    analysis_file = graphene.Field(AnalysisFileModel, id=graphene.String(required=True))

    analysis_level_crossings = graphene.List(AnalysisLevelCrossingType, analysis_file_id=graphene.String(required=True))
    analysis_level_crossing = graphene.Field(AnalysisLevelCrossingType, id=graphene.String(required=True))

    # noinspection PyMethodMayBeStatic
    def resolve_analysis_files(self, info, **kwargs):
        return AnalysisFile.objects.all().order_by('-id')

    # noinspection PyMethodMayBeStatic,PyShadowingBuiltins
    def resolve_analysis_file(self, info, id):
        return AnalysisFile.objects.get(id=id)

    # noinspection PyMethodMayBeStatic
    def resolve_analysis_level_crossings(self, info, analysis_file_id):
        return AnalysisLevelCrossing.objects.filter(analysis_file_id=analysis_file_id).order_by('id')

    # noinspection PyMethodMayBeStatic
    def resolve_analysis_level_crossing(self, info, id):
        return AnalysisLevelCrossing.objects.get(id=id)


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    revoke_token = graphql_jwt.Revoke.Field()

    create_analysis_file = CreateAnalysisFileMutation.Field()
    update_analysis_file = UpdateAnalysisFileMutation.Field()
    delete_analysis_file = DeleteAnalysisFileMutation.Field()

    create_analysis_level_crossing = CreateAnalysisLevelCrossingMutation.Field()
    update_analysis_level_crossing = UpdateAnalysisLevelCrossingMutation.Field()
    upload_analysis_level_crossing = UploadAnalysisLevelCrossingMutation.Field()

    start_analysis_level_crossing = StartAnalysisLevelCrossingMutation.Field()
    delete_analysis_level_crossing = DeleteAnalysisLevelCrossingMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
