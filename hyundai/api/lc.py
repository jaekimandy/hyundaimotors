import os

import numpy as np
import numpy.typing
import pandas as pd
import plotly.express as px
import rfcnt
from django.conf import settings
import nanoid
from io import StringIO
import fatpack


class RfcntRainflow9CLevelCrossing:
    def exec(self, idx, title, chart_data, column_no, encoding):
        csv_string_io = StringIO(chart_data)
        data_df = pd.read_csv(csv_string_io,
                              delimiter=',',
                              usecols=[column_no],
                              skiprows=[0, 1, 3, 4, 5, 6, 7],
                              encoding=encoding,
                              low_memory=False)

        data = data_df.to_numpy().squeeze()
        Sc = 707
        ranges = fatpack.find_rainflow_ranges(data)
        curve = fatpack.TriLinearEnduranceCurve(Sc)
        fatigue_damage = curve.find_miner_sum(ranges)
        final_damage = fatigue_damage * Sc

        class_count = 50
        class_range = float(data.max()) - float(data.min())
        class_width = float(class_range / (class_count - 1))
        class_offset = float(data.min() - class_width / 2)

        def inspect_rfc(data: np.typing.ArrayLike) -> tuple:
            """Do rainflow counting with standard arguments.
            """
            return rfcnt.rfc(
                data,
                class_count=class_count,
                class_offset=class_offset,
                class_width=class_width,
                hysteresis=class_width,
                spread_damage=rfcnt.SDMethod.TRANSIENT_23,  # assign damage for closed cycles to 2nd turning point
                residual_method=rfcnt.ResidualMethod._NO_FINALIZE,
                # don't consider residues and leave internal sequence open
                use_HCM=False,  # Use 4 point method, not HCM  # noqa E221
                use_ASTM=False,  # Use 4 point method, not ASTM  # noqa E221
                wl={"sd": 1, "nd": 1, "k": 1})

        def inspect_sequence(data: np.typing.ArrayLike, max_len: int = 0) -> tuple:
            """Inspect the damage history by applying rainflow countings successive for one more data point at a time.
            Consider:
            At this point of view, damage accumulated until to `i` is attributed to the datapoint at `i`, which is neither P2, nor P3!
            This is noticeable in that the course of the line shows an apparent latency.
            """
            seq_damage = np.zeros(shape=data.size)  # Init
            for i in range(len(data)):
                res = inspect_rfc(data[:i + 1])  # Data points from indices 0 to i, including i itself
                if not np.isclose(res["tp"][:, 2].sum(), res["damage"], rtol=1e-10):
                    assert False  # Not occuring: Damage is entirely distributed over turning points
                seq_damage[i] = res["damage"]
            return inspect_rfc(data), seq_damage

        res = inspect_rfc(data)
        # df = pd.DataFrame(dict(
        #     x=res["lc"][:, 0].squeeze(),
        #     y=res["lc"][:, 1].squeeze()
        # ))
        #
        # print(df)

        fig = px.line(x=res["lc"][:, 0],
                      y=res["lc"][:, 1],
                      title=title)
        fig.add_scatter(x=res["lc"][:, 0],
                        y=res["lc"][:, 1],
                        mode='markers',
                        name='Markers')

        image_name = nanoid.generate() + '.png'

        path = settings.IMAGE_ROOT + '/images/' + idx

        os.makedirs(path, exist_ok=True)

        # print(settings.MEDIA_ROOT)
        filename = path + '/' + image_name

        fig.write_image(filename)

        return {
            "filename": settings.IMAGE_URL + '/images/' + idx + '/' + image_name,
            "damage": final_damage,
        }
