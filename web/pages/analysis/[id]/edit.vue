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
        <div class="d-grid gap-2 d-md-flex">
          <c-loading-button
            :loading="submitForm.loading"
            color="primary"
            size="sm"
            class="me-md-2 col-3"
            :disabled="!loaded"
            @click="onClickCreate"
            >수정</c-loading-button
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
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CMultiSelect,
  CButton,
  CLoadingButton,
} from "@coreui/vue-pro";

const router = useRouter();

const route = useRoute();

const submitForm = ref({
  loading: false,
  chartCellName: "",
  carType: null,
  area: "",
  year: "",
  roadSurface: "",
  weight: "",
  chartData: "",
  testCount: "",
});

const inputForm = reactive({
  carTypes: [
    {
      value: "AD",
      text: "AD",
      selected: false,
    },
    {
      value: "BC3N",
      text: "BC3N",
      selected: false,
    },
    {
      value: "DM",
      text: "DM",
      selected: false,
    },
    {
      value: "DMc",
      text: "DMc",
      selected: false,
    },
    {
      value: "HCi",
      text: "HCi",
      selected: false,
    },
    {
      value: "HS",
      text: "HS",
      selected: false,
    },
    {
      value: "HS4WD",
      text: "HS4WD",
      selected: false,
    },
    {
      value: "IB",
      text: "IB",
      selected: false,
    },
    {
      value: "JA",
      text: "JA",
      selected: false,
    },
    {
      value: "K3",
      text: "K3",
      selected: false,
    },
    {
      value: "LF",
      text: "LF",
      selected: false,
    },
    {
      value: "LM",
      text: "LM",
      selected: false,
    },
    {
      value: "MD",
      text: "MD",
      selected: false,
    },
    {
      value: "MQ4",
      text: "MQ4",
      selected: false,
    },
    {
      value: "NE",
      text: "NE",
      selected: false,
    },
    {
      value: "NF",
      text: "NF",
      selected: false,
    },
  ],
  areas: [
    {
      value: "NPG",
      text: "NPG",
      selected: false,
    },
  ],
  weights: [
    {
      value: "2UP",
      text: "2UP",
      selected: false,
    },
    {
      value: "3UP",
      text: "3UP",
      selected: false,
    },
    {
      value: "4UP",
      text: "4UP",
      selected: false,
    },
    {
      value: "GVW",
      text: "GVW",
      selected: false,
    },
    {
      value: "4UP_40kg",
      text: "4UP_40kg",
      selected: false,
    },
    {
      value: "5UP_40kg",
      text: "5UP_40kg",
      selected: false,
    },
  ],
  roadSurfaces: [
    {
      value: "BG",
      text: "BG",
      selected: false,
    },
    {
      value: "DWAY",
      text: "City(DriveWay)",
      selected: false,
    },
    {
      value: "FT",
      text: "City(FullTurn)",
      selected: false,
    },
    {
      value: "GS",
      text: "City(Go&Stop)",
      selected: false,
    },
    {
      value: "HANDLING",
      text: "City(Handling)",
      selected: false,
    },
    {
      value: "POT20_BP",
      text: "City(Pothole&Bump)",
      selected: false,
    },
    {
      value: "TS",
      text: "City(TwistSine)",
      selected: false,
    },
    {
      value: "ABS",
      text: "City(ABS)",
      selected: false,
    },
    {
      value: "BrokenAsphalt",
      text: "XC(BrokenAsphalt)",
      selected: false,
    },
    {
      value: "Manhole",
      text: "XC(Manhole)",
      selected: false,
    },
    {
      value: "CobbleStone",
      text: "XC(CobbleStone)",
      selected: false,
    },
    {
      value: "ChatterStrip",
      text: "XC(ChatterStrip)",
      selected: false,
    },
    {
      value: "ResonanceBump",
      text: "XC(ResonanceBump)",
      selected: false,
    },
    {
      value: "WashBoard",
      text: "XC(WashBoard)",
      selected: false,
    },
    {
      value: "SpotPatch",
      text: "XC(SpotPatch)",
      selected: false,
    },
    {
      value: "ChuckHole",
      text: "XC(ChuckHole)",
      selected: false,
    },
    {
      value: "Scurve",
      text: "XC(SCurve)",
      selected: false,
    },
    {
      value: "AddAsphalt",
      text: "XC(AddAsphalt)",
      selected: false,
    },
    {
      value: "BrokenAsphalt2",
      text: "XC(BrokenAsphalt2)",
      selected: false,
    },
    {
      value: "Rest",
      text: "XC(Rest)",
      selected: false,
    },
    {
      value: "OFFROAD",
      text: "OffRoad",
      selected: false,
    },
    {
      value: "UPHILL",
      text: "UpHill",
      selected: false,
    },
    {
      value: "DownHill",
      text: "downhill",
      selected: false,
    },
  ],
});

await useAsyncGql({
  operation: "analysisFile",
  variables: {
    id: route.params.id,
  },
})
  .then((resp) => {
    const { data } = resp;

    if (data.value?.analysisFile == null) {
      throw new Error("NotFound File");
    }

    if (data.value) {
      const carTypeIndex = inputForm.carTypes.findIndex(
        (x) => x.value === data.value?.analysisFile?.carType
      );
      const weightIndex = inputForm.weights.findIndex(
        (x) => x.value === data.value?.analysisFile?.weight
      );
      const areaIndex = inputForm.areas.findIndex(
        (x) => x.value === data.value?.analysisFile?.area
      );
      const roadSurfaceIndex = inputForm.roadSurfaces.findIndex(
        (x) => x.value === data.value?.analysisFile?.roadSurface
      );

      inputForm.carTypes[carTypeIndex].selected = true;
      inputForm.weights[weightIndex].selected = true;
      inputForm.areas[areaIndex].selected = true;
      inputForm.roadSurfaces[roadSurfaceIndex].selected = true;

      submitForm.value = {
        loading: false,
        chartCellName: data.value.analysisFile.chartCellName,
        carType: data.value.analysisFile.carType,
        year: data.value.analysisFile.year,
        area: data.value.analysisFile.area,
        roadSurface: data.value.analysisFile.roadSurface,
        weight: data.value.analysisFile.weight,
        testCount: data.value.analysisFile.testCount,
        chartData: data.value.analysisFile.chartData,
      };
    }
  })
  .finally(() => {});

const file = ref(null);

const loaded = ref(true);

const onClickList = () => {
  router.back();
};

const onClickCreate = async () => {
  const form = unref(submitForm);

  submitForm.value.loading = true;

  const { data } = await useAsyncGql({
    operation: "updateAnalysisFile",
    variables: {
      id: route.params.id,
      chartCellName: form.chartCellName,
      carType: form.carType,
      year: form.year,
      area: form.area,
      roadSurface: form.roadSurface,
      weight: form.weight,
      chartData: form.chartData,
      testCount: form.testCount,
    },
  }).finally(() => {
    submitForm.value.loading = false;
  });

  if (data.value) {
    await router.replace(`/analysis/${route.params.id}`);
  }
};

const handleFileUpload = (event: any) => {
  loaded.value = false;

  file.value = event.target.files[0];

  const readFile = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });

  readFile(file.value).then((resp: any) => {
    submitForm.value.chartData = resp;

    loaded.value = true;
  });
};
</script>
