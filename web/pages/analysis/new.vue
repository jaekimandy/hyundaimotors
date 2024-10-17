<template>
  <c-card class="mb-4">
    <c-card-header>
      <c-button size="sm" @click="onClickList">목록</c-button>
    </c-card-header>
    <c-card-body>
      <c-form>
        <div class="mb-3">
          <c-form-label for="cardTypes">차종</c-form-label>
          <c-multi-select
            id="cardTypes"
            :options="inputForm.carTypes"
            options-style="text"
            placeholder="차종을 선택하세요"
            :multiple="false"
            @change="
              (v) => {
                submitForm.carType = v[0].value;
              }
            "
          />
        </div>
        <div class="mb-3">
          <c-form-input
            v-model="submitForm.year"
            type="text"
            label="년도"
          ></c-form-input>
        </div>
        <div class="mb-3">
          <c-form-label for="areas">장소</c-form-label>
          <c-multi-select
            id="areas"
            :options="inputForm.areas"
            options-style="text"
            placeholder="장소를 선택하세요"
            :multiple="false"
            @change="
              (v) => {
                submitForm.area = v[0].value;
              }
            "
          />
        </div>
        <div class="mb-3">
          <c-form-label for="areas">중량</c-form-label>
          <c-multi-select
            id="weights"
            :options="inputForm.weights"
            options-style="text"
            placeholder="중량을 선택하세요"
            :multiple="false"
            @change="
              (v) => {
                submitForm.weight = v[0].value;
              }
            "
          />
        </div>
        <div class="mb-3">
          <c-form-label for="areas">노면</c-form-label>
          <c-multi-select
            id="roadSurface"
            v-model="submitForm.roadSurface"
            :options="inputForm.roadSurfaces"
            options-style="text"
            placeholder="노면을 선택하세요"
            :multiple="false"
            @change="
              (v) => {
                submitForm.roadSurface = v[0].value;
                inputForm.showXcSplitSelect = v[0].text.indexOf('XC') === 0;
              }
            "
          />
        </div>
        <div class="mb-3">
          <c-form-input
            v-model="submitForm.testCount"
            type="text"
            label="횟수"
          ></c-form-input>
        </div>
        <div v-show="inputForm.chartCellNames.length > 0" class="mb-3">
          <c-form-label for="areas">차트 표시 Cell을 선택하세요</c-form-label>
          <c-multi-select
            id="roadSurface"
            :options="inputForm.chartCellNames"
            options-style="text"
            placeholder="차트 표시 Cell을 선택"
            :multiple="false"
            @change="
              (v) => {
                submitForm.chartCellName = v[0]?.value;
              }
            "
          />
        </div>
        <div class="mb-3">
          <c-form-input
            v-model="submitForm.chartCellName"
            readonly
            type="text"
            label="차트 표시 Cell"
          ></c-form-input>
        </div>
        <div v-show="inputForm.showXcSplitSelect" class="mb-3">
          <c-form-label for="areas">파일 분리 지정값 선택</c-form-label>
          <c-multi-select
            id="roadSurface"
            :options="inputForm.xcSplitSelect"
            options-style="text"
            placeholder="파일 분리 지정값을 선택 선택하세요"
            :multiple="false"
            @change="
              (v) => {
                submitForm.xcSplitRanges = v[0].value.split(',');
              }
            "
          />
        </div>
        <div v-show="inputForm.showXcSplitSelect" class="mb-3">
          <c-form-input
            v-model="submitForm.xcSplitRanges[0]"
            type="text"
            label="파일 분리 값1 "
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[1]"
            type="text"
            label="파일 분리 값 2"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[2]"
            type="text"
            label="파일 분리 값 3"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[3]"
            type="text"
            label="파일 분리 값 4"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[4]"
            type="text"
            label="파일 분리 값 5"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[5]"
            type="text"
            label="파일 분리 값 6"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[6]"
            type="text"
            label="파일 분리 값 7"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[7]"
            type="text"
            label="파일 분리 값 8"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[8]"
            type="text"
            label="파일 분리 값 9"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[9]"
            type="text"
            label="파일 분리 값 10"
          ></c-form-input>
          <c-form-input
            v-model="submitForm.xcSplitRanges[10]"
            type="text"
            label="파일 분리 값 11"
          ></c-form-input>
        </div>
        <div class="mb-3">
          <c-form-input
            type="file"
            label="측정자료"
            @change="handleFileUpload($event)"
          ></c-form-input>
        </div>
        <div class="d-grid gap-2 d-md-flex">
          <c-loading-button
            :loading="submitForm.loading"
            color="primary"
            size="sm"
            class="me-md-2 col-3"
            :disabled="!loaded"
            @click="onClickCreate"
            >등록</c-loading-button
          >
          <c-button
            size="sm"
            class="me-md-2 col-3"
            color="secondary"
            @click="onClickList"
            >목록</c-button
          >
        </div>
      </c-form>
    </c-card-body>
  </c-card>
</template>

<script setup lang="ts">
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CLoadingButton,
  CMultiSelect,
} from "@coreui/vue-pro";

const router = useRouter();

const localShow = ref(false);

interface Props {
  show?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

watch(
  () => props.show,
  (show) => {
    if (show) {
      localShow.value = show;
    }
  }
);

const chartColumns = [
  "Front Left Wheel Center Force (Z)",
  "swift@FrtLhWftFz.RN_7",
  "Swift@FLWftFz.RN_1",
  "Front Left Swift Force Fz(N)",
  "FLWheelFz",
  "WFT@FLFz.RN_11",
  "WFT@FLFz.RN_1",
  "FLWftFz",
  "WFT@FLFz.RN_19",
  "Transducers@FL_Fz.RN_17",
  "DN8_RLDA@FL_Fz.RN_3",
  "WFT@WFT_FL_Fz.RN_2",
  "SWIFT@FLWftFz.RN_3",
  "swift@FrtLhWftFz.RN_3",
  "Swift@FLFz.RN_2",
  "Swift@FLSwiftFz.RN_2",
  "WFT@FLWftFz.RN_2",
  "FL Fz",
  "WFT@FLFz.RN_2",
  "swift@FLFz.RN_4",
  "WFT@WFT_FL_Fz.RN_15",
  "Swift@FLSwifFz.RN_1",
  "WFT@LR_Z_Force.RN_2",
  "Swift_110@FrtLhWhlFz.RN_1",
  "FL Swift Fz",
  "swift@FLWftFz.RN_7",
  "Swift@FLWftFz.RN_21",
];
const inputForm = reactive({
  xcSplitSelect: [
    {
      value: "4375,5750,1375,1188,1063,1188,1063,2000,4500,8001,16500",
      text: "구간1",
    },
    {
      value: "4438,5688,1438,1000,938,1063,938,2250,4563,7938,16563",
      text: "구간2",
    },
    {
      value: "5375,5625,1375,1000,1000,1125,1125,2125,4688,7813,16313",
      text: "구간3",
    },
    {
      value: "5879,6081,1465,1484,1473,1210,1421,3042,5103,7979,15834",
      text: "구간4",
    },
    {
      value: "5047,4704,1500,1383,1516,1274,1336,2875,5258,8501,16766",
      text: "구간5",
    },
    {
      value: "1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000",
      text: "테스트",
    },
  ],
  carTypes: [
    {
      value: "AD",
      text: "AD",
    },
    {
      value: "BC3N",
      text: "BC3N",
    },
    {
      value: "DM",
      text: "DM",
    },
    {
      value: "DMc",
      text: "DMc",
    },
    {
      value: "HCi",
      text: "HCi",
    },
    {
      value: "HS",
      text: "HS",
    },
    {
      value: "HS4WD",
      text: "HS4WD",
    },
    {
      value: "IB",
      text: "IB",
    },
    {
      value: "JA",
      text: "JA",
    },
    {
      value: "K3",
      text: "K3",
    },
    {
      value: "LF",
      text: "LF",
    },
    {
      value: "LM",
      text: "LM",
    },
    {
      value: "MD",
      text: "MD",
    },
    {
      value: "MQ4",
      text: "MQ4",
    },
    {
      value: "NE",
      text: "NE",
    },
    {
      value: "NF",
      text: "NF",
    },
  ],
  areas: [
    {
      value: "NPG",
      text: "NPG",
    },
  ],
  weights: [
    {
      value: "2UP",
      text: "2UP",
    },
    {
      value: "3UP",
      text: "3UP",
    },
    {
      value: "4UP",
      text: "4UP",
    },
    {
      value: "GVW",
      text: "GVW",
    },
    {
      value: "4UP_40kg",
      text: "4UP_40kg",
    },
    {
      value: "5UP_40kg",
      text: "5UP_40kg",
    },
  ],
  roadSurfaces: [
    {
      value: "BG",
      text: "BG",
    },
    {
      value: "DWAY",
      text: "City(DriveWay)",
    },
    {
      value: "FT",
      text: "City(FullTurn)",
    },
    {
      value: "GS",
      text: "City(Go&Stop)",
    },
    {
      value: "HANDLING",
      text: "City(Handling)",
    },
    {
      value: "POT20_BP",
      text: "City(Pothole&Bump)",
    },
    {
      value: "TS",
      text: "City(TwistSine)",
    },
    {
      value: "ABS",
      text: "City(ABS)",
    },
    {
      value: "BrokenAsphalt",
      text: "XC(BrokenAsphalt)",
    },
    {
      value: "Manhole",
      text: "XC(Manhole)",
    },
    {
      value: "CobbleStone",
      text: "XC(CobbleStone)",
    },
    {
      value: "ChatterStrip",
      text: "XC(ChatterStrip)",
    },
    {
      value: "ResonanceBump",
      text: "XC(ResonanceBump)",
    },
    {
      value: "WashBoard",
      text: "XC(WashBoard)",
    },
    {
      value: "SpotPatch",
      text: "XC(SpotPatch)",
    },
    {
      value: "ChuckHole",
      text: "XC(ChuckHole)",
    },
    {
      value: "Scurve",
      text: "XC(SCurve)",
    },
    {
      value: "AddAsphalt",
      text: "XC(AddAsphalt)",
    },
    {
      value: "BrokenAsphalt2",
      text: "XC(BrokenAsphalt2)",
    },
    {
      value: "Rest",
      text: "XC(Rest)",
    },
    {
      value: "OFFROAD",
      text: "OffRoad",
    },
    {
      value: "UPHILL",
      text: "UpHill",
    },
    {
      value: "DownHill",
      text: "downhill",
    },
  ],
  chartCellNames: [],
  showXcSplitSelect: false,
});

const submitForm = reactive({
  loading: false,
  carType: "",
  area: "",
  year: "",
  roadSurface: "",
  weight: "",
  chartData: "",
  testCount: "",
  xcSplitRanges: [],
  chartCellName: "",
});

const file = ref(null);

const loaded = ref(false);

const onClickList = () => {
  router.back();
};

const onClickCreate = async () => {
  if (!submitForm.carType) {
    alert("차종을 선택하셔야 합니다");
    return;
  }

  if (!submitForm.year) {
    alert("년도를 입력하셔야 합니다");
    return;
  }

  if (!submitForm.area) {
    alert("장소를 선택하셔야 합니다");
    return;
  }

  if (!submitForm.roadSurface) {
    alert("노면을 선택하셔야 합니다");
    return;
  }

  if (!submitForm.weight) {
    alert("중량을 선택하셔야 합니다");
    return;
  }

  if (!submitForm.testCount) {
    alert("횟수를 입력 합니다");
    return;
  }

  submitForm.loading = true;

  const { data } = await useAsyncGql({
    operation: "createAnalysisFile",
    variables: {
      chartCellName: submitForm.chartCellName,
      carType: submitForm.carType,
      year: submitForm.year,
      area: submitForm.area,
      roadSurface: submitForm.roadSurface,
      weight: submitForm.weight,
      chartData: submitForm.chartData,
      testCount: submitForm.testCount,
      xcSplitRange: submitForm.xcSplitRanges.join(","),
    },
  }).finally(() => {
    submitForm.loading = false;
  });

  if (data.value) {
    await router.push("/analysis");
  }
};

const processFindYPos = (items: string[]) => {
  for (const title of chartColumns) {
    const yPos = items.findIndex((x: string) => x === title);

    if (yPos !== -1) {
      return yPos;
    }
  }

  return undefined;
};

const handleFileUpload = (event: any) => {
  file.value = event.target.files[0];

  const readFile = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });

  readFile(file.value).then((resp: any) => {
    submitForm.chartData = resp.toString().trim();

    const cvsItems = submitForm.chartData.split("\n");
    const headers = cvsItems[2].split(",");
    const yPos = processFindYPos(headers);

    if (yPos) {
      submitForm.chartCellName = headers[yPos];
    } else {
      // console.log(map);
      inputForm.chartCellNames = headers
        .filter((x) => x !== " ")
        .map((x) => {
          return {
            text: x,
            value: x,
          };
        }) as never[];
    }

    loaded.value = true;
  });
};
</script>
