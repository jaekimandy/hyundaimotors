<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup lang="ts">
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5ThemesTnimated from "@amcharts/amcharts5/themes/Animated";

const chartRef = ref<HTMLElement | null>();
let chart: any;
let xAxis: any;
let yAxis: any;
let legend: any;
let series: any;
let sbseries: any;
let root!: am5.Root;

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  chartData: {
    type: Array,
  },
  // eslint-disable-next-line vue/require-default-prop
  items: Array,
});

const emit = defineEmits(["selected"]);
watch(
  () => props.chartData,
  (chartData) => {
    console.log("props.chartData", chartData?.length);
    if (chartData) {
      // series.data.setAll(chartData);
      // sbseries.data.setAll(chartData);
      // legend.data.setAll(chartData);
    }
  }
);

watch(
  () => props.items,
  (items) => {
    if (items) {
      console.log("------1", props.chartData?.length);
      while (chart.series.length > 0) {
        chart.series.removeIndex(0);
      }

      series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "전체",
          xAxis,
          yAxis,
          valueYField: "y",
          valueXField: "x",
          calculateAggregates: true,
          // tooltip: am5.Tooltip.new(root, {}),
        })
      );

      for (const item of items) {
        chart.series.push(
          am5xy.LineSeries.new(root, {
            id: item.id,
            name: item.title,
            xAxis,
            yAxis,
            valueYField: "y",
            valueXField: "x",
            calculateAggregates: true,
            // tooltip: am5.Tooltip.new(root, {}),
          })
        );
      }

      series.data.setAll(props.chartData);
      sbseries.data.setAll(props.chartData);
      legend.data.setAll(chart.series.values);
    }
  }
);

const deleteAllRange = () => {
  series.axisRanges.each((rangeDataItem) => {
    series.axisRanges.removeValue(rangeDataItem);
  });
};

const createRange = (
  xAxis: any,
  value: any,
  endValue: any,
  color: am5.Color
) => {
  const rangeDataItem = xAxis.makeDataItem({
    // @ts-ignore
    value,
    endValue,
  });

  // rangeDataItems.push(rangeDataItem);

  series.createAxisRange(rangeDataItem);

  // // @ts-ignore
  // range.strokes.template.setAll({
  //   stroke: color,
  //   strokeWidth: 3,
  // });
  //
  // // @ts-ignore
  // range.fills.template.setAll({
  //   fill: color,
  //   fillOpacity: 0.8,
  //   visible: true,
  // });

  // @ts-ignore
  rangeDataItem.get("axisFill").setAll({
    fill: color,
    fillOpacity: 0.8,
    visible: true,
  });
};
// console.log('props', props.data)
// noinspection TypeScriptValidateTypes
onMounted(() => {
  if (chartRef.value) {
    // Create the Root
    root = am5.Root.new(chartRef.value!);

    root.setThemes([am5ThemesTnimated.new(root)]);

    // noinspection TypeScriptValidateTypes
    chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        height: am5.percent(94),
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Create Y-axis
    // noinspection TypeScriptValidateTypes
    // const yAxis = chart.yAxes.push(
    //   am5xy.ValueAxis.new(root, {
    //     renderer: am5xy.AxisRendererY.new(root, {}),
    //   })
    // );
    //
    // // Create X-Axis
    // // noinspection TypeScriptValidateTypes
    // const xAxis = chart.xAxes.push(
    //   am5xy.CategoryAxis.new(root, {
    //     renderer: am5xy.AxisRendererX.new(root, {}),
    //     categoryField: "x",
    //   })
    // );

    xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        groupData: true,
        renderer: am5xy.AxisRendererX.new(root, {
          opposite: false,
          strokeOpacity: 0,
        }),
      })
    );

    yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "전체",
        xAxis,
        yAxis,
        valueYField: "y",
        valueXField: "x",
        // tooltip: am5.Tooltip.new(root, {}),
      })
    );

    series.data.setAll(props.chartData);

    const scrollbarX = am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50,
    });

    chart.set("scrollbarX", scrollbarX);
    //
    const sbxAxis = scrollbarX.chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    const sbyAxis = scrollbarX.chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    //
    //
    // // Create series
    sbseries = scrollbarX.chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "",
        xAxis: sbxAxis,
        yAxis: sbyAxis,
        valueYField: "y",
        valueXField: "x",
        // tooltip: am5.Tooltip.new(root, {}),
      })
    );
    //
    // // chart.series.push(
    // // 	am5xy.LineSeries.new(root, {
    // // 		id: item.id,
    // // 		name: item.title,
    // // 		xAxis,
    // // 		yAxis,
    // // 		valueYField: "y",
    // // 		valueXField: "x",
    // // 		calculateAggregates: true,
    // // 		// tooltip: am5.Tooltip.new(root, {}),
    // // 	})
    // // );
    //

    // // // @ts-ignore
    sbseries.data.setAll(props.chartData);

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "selectX",
      })
    );

    // createRange(xAxis, series, 166, 577, am5.color(0xff621f));
    //
    // // Add scrollbar
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    // // noinspection TypeScriptValidateTypes
    // chart.set(
    //   "scrollbarX",
    //   am5.Scrollbar.new(root, {
    //     orientation: "horizontal",
    //   })
    // );

    legend = chart.children.push(
      am5.Legend.new(root, {
        // centerX: am5.percent(50),
        x: am5.percent(5),
        y: am5.percent(100),
        layout: am5.GridLayout.new(root, {
          fixedWidthGrid: true,
          maxColumns: 9,
        }),
        clickTarget: "none",
      })
    );

    legend.itemContainers.template.events.on("click", function (ev: any) {
      // 클릭한 레전드의 데이터 아이템을 가져옵니다.
      const legendDataItem = ev.target.dataItem.dataContext;

      if (legendDataItem) {
        // 데이터 아이템에서 _setting 속성을 가져와 출력하거나 원하는 처리를 수행합니다.
        const settings = legendDataItem._settings;

        const item = props.items?.find((x) => x?.id === settings.id);

        deleteAllRange();

        if (item) {
          createRange(xAxis, item?.startPos, item?.endPos, am5.color(0xff621f));
        }
      }
    });

    legend.data.setAll(chart.series.values);

    cursor.lineY.set("visible", false);

    let selectStatedX: any;
    cursor.events.on("selectstarted", function () {
      selectStatedX = cursor.getPrivate("positionX");
    });

    cursor.events.on("selectended", function () {
      const selectEndedX = cursor.getPrivate("positionX");

      let startValue = xAxis.positionToValue(
        xAxis.toAxisPosition(selectStatedX)
      );
      let endValue = xAxis.positionToValue(xAxis.toAxisPosition(selectEndedX!));

      //
      // // flip if start > end
      if (startValue > endValue) {
        [startValue, endValue] = [endValue, startValue];
      }

      // let skip = false;
      // check for overlapping
      const len = xAxis.axisRanges.length;
      for (let i = len - 1; i >= 0; i--) {
        const axisRange = xAxis.axisRanges.getIndex(i);

        xAxis.axisRanges.removeValue(axisRange!);
        // let axisRangeStartValue = axisRange!.get("value")!;
        // let axisRangeEndValue = axisRange!.get("endValue")!;
        // // flip if start > end
        // if (axisRangeStartValue > axisRangeEndValue) {
        //   [axisRangeStartValue, axisRangeEndValue] = [
        //     axisRangeEndValue,
        //     axisRangeStartValue,
        //   ];
        // }
        //
        // // if both end and start values are within old range, do not do anything
        // if (
        //   startValue >= axisRangeStartValue &&
        //   startValue <= axisRangeEndValue &&
        //   endValue >= axisRangeStartValue &&
        //   endValue <= axisRangeEndValue
        // ) {
        //   skip = true;
        // } else {
        //   if (
        //     startValue >= axisRangeStartValue &&
        //     startValue <= axisRangeEndValue
        //   ) {
        //     startValue = axisRangeEndValue;
        //   }
        //
        //   if (
        //     endValue >= axisRangeStartValue &&
        //     endValue <= axisRangeEndValue
        //   ) {
        //     endValue = axisRangeStartValue;
        //   }
        // }
        //
        // // if a new range takes within itself whole old range, remove old range
        // if (
        //   startValue <= axisRangeStartValue &&
        //   endValue >= axisRangeEndValue
        // ) {
        //   xAxis.axisRanges.removeValue(axisRange!);
        // }
      }

      // if (!skip) {
      const dataItem = xAxis.makeDataItem({});
      dataItem.set("value", startValue);
      dataItem.set("endValue", endValue);

      xAxis.createAxisRange(dataItem);

      dataItem.get("axisFill")?.setAll({
        fill: chart.get("colors")?.getIndex(7),
        fillOpacity: 0.4,
        visible: true,
      });

      dataItem.get("grid")?.set("forceHidden", true);
      // }

      cursor.selection.hide();

      // let startValue = xAxis.getX(startIndex);
      // let endValue = xAxis.getX(endIndex);
      //
      // const startIndex = xAxis.getX(startValue);
      // const endIndex = xAxis.getX(endValue);

      // console.log(startValue, endValue);
      // createRange(xAxis, series, startValue, endValue, am5.color(0xff621f))
      // console.log(startValue)
      // console.log(endValue)
      // console.log(startIndex, endIndex, startValue, endValue);

      // emit("selected", {
      //   startPos: startIndex,
      //   endPos: endIndex,
      // });
      // let skip = false;
      // // check for overlapping
      // let len = xAxis.axisRanges.length;
      // for (let i = len - 1; i >= 0; i--) {
      // 	let axisRange = xAxis.axisRanges.getIndex(i);
      // 	let axisRangeStartValue = axisRange.get("value");
      // 	let axisRangeEndValue = axisRange.get("endValue");
      // 	// flip if start > end
      // 	if (axisRangeStartValue > axisRangeEndValue) {
      // 		[axisRangeStartValue, axisRangeEndValue] = [axisRangeEndValue, axisRangeStartValue];
      // 	}
      //
      // 	// if both end and start values are within old range, do not do anything
      // 	if (startValue >= axisRangeStartValue && startValue <= axisRangeEndValue && endValue >= axisRangeStartValue && endValue <= axisRangeEndValue) {
      // 		skip = true
      // 	}
      // 	else {
      // 		if (startValue >= axisRangeStartValue && startValue <= axisRangeEndValue) {
      // 			startValue = axisRangeEndValue;
      // 		}
      //
      // 		if (endValue >= axisRangeStartValue && endValue <= axisRangeEndValue) {
      // 			endValue = axisRangeStartValue;
      // 		}
      // 	}
      //
      // 	// if a new range takes within itself whole old range, remove old range
      // 	if (startValue <= axisRangeStartValue && endValue >= axisRangeEndValue) {
      // 		xAxis.axisRanges.removeValue(axisRange);
      // 	}
      // }
      //
      // // if (!skip) {
      // 	let dataItem = xAxis.makeDataItem({});
      // 	dataItem.set("value", startValue);
      // 	dataItem.set("endValue", endValue);
      //
      // 	console.log('------', startValue);
      // 	console.log('------', endValue);
      // 	xAxis.createAxisRange(dataItem);
      // 	// noinspection TypeScriptValidateTypes
      // 	dataItem.get("axisFill").setAll({ fill: chart.get("colors").getIndex(7), fillOpacity: 0.4, visible: true });
      // 	// dataItem.get("grid").set("forceHidden", true);
      // // }

      // createRange(series1, 125, 275, am5.color(0xff621f));

      cursor.selection.hide();

      emit("selected", {
        startPos: Math.round(startValue),
        endPos: Math.round(endValue),
      });
    });
  }

  // noinspection TypeScriptValidateTypes
});

onUnmounted(() => {
  if (root) {
    root.dispose();
  }
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 600px;
}
.amcharts-legend-label:hover {
  cursor: pointer;
}
</style>
