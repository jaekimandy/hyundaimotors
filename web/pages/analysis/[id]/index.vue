<template>
  <c-card class="mb-4">
    <!--suppress TypeScriptUnresolvedReference -->
    <c-card-header>
      {{ item.carType }}-{{ item.year }}-{{ item.area }} / {{ item.weight }}-{{
        item.roadSurface
      }}-{{ item.testCount }}
      <div class="d-grid gap-2 d-md-flex">
        <c-button
          color="primary"
          class="me-md-2"
          size="sm"
          @click="onClickSlice"
          >구간선택</c-button
        >
        <c-button color="primary" size="sm" @click="onClickFileUpload"
          >구간파일업로드</c-button
        >
      </div>
    </c-card-header>
    <c-card-body>
      <chart
        :chart-data="chartData1"
        :items="sliceItems"
        @selected="onChartSelect"
      ></chart>
      <!--			<Line ref="chart" :options="chartOptions" :data="chartData" />-->
    </c-card-body>
  </c-card>
  <c-card class="mb-4">
    <c-card-header> 구간목록 </c-card-header>
    <c-card-body>
      <c-accordion v-for="sliceItem in sliceItems" :key="sliceItem.id">
        <c-accordion-item>
          <c-accordion-header :disabled="sliceItem.status !== Status.Success">
            <span>{{ sliceItem.title }} </span>
            <span
              v-if="
                sliceItem.status !== Status.Success &&
                sliceItem.status !== Status.Uploaded
              "
            >
              (<c-spinner
                v-show="
                  sliceItem.status !== Status.Success &&
                  sliceItem.status !== Status.Uploaded
                "
                color="primary"
                size="sm"
              />)
            </span>
            <span v-else> ({{ sliceItem.status }}) </span>
            <a
              class="btn btn-sm btn-primary me-md-2"
              :href="downloadUrl(sliceItem.id, sliceItem.filename)"
              >파일받기</a
            >
            <c-button
              color="primary"
              size="sm me-md-2"
              :disabled="sliceItem.status !== Status.Uploaded"
              @click="onClickStartAnalysis(sliceItem.id)"
              >분석진행</c-button
            >
            <c-button
              color="primary"
              size="sm me-md-2"
              :disabled="
                sliceItem.status !== Status.Uploaded &&
                sliceItem.status !== Status.Success
              "
              @click="onClickEditItem(sliceItem.id)"
              >수정</c-button
            >
            <c-button
              color="primary"
              size="sm"
              :disabled="
                sliceItem.status !== Status.Success &&
                sliceItem.status !== Status.Uploaded
              "
              @click="onClickShowDelete(sliceItem.id)"
              >삭제</c-button
            >
          </c-accordion-header>
          <c-accordion-body v-if="sliceItem.status === Status.Success">
            <c-table>
              <c-table-head>
                <c-table-row>
                  <c-table-header-cell>컬럼명</c-table-header-cell>
                  <c-table-header-cell>Damage</c-table-header-cell>
                  <c-table-header-cell>상태</c-table-header-cell>
                  <c-table-header-cell>이미지</c-table-header-cell>
                </c-table-row>
              </c-table-head>
              <c-table-body>
                <template
                  v-for="image in JSON.parse(sliceItem.images) as SliceItemType[]"
                >
                  <c-table-row>
                    <c-table-data-cell>{{
                      image.columnName
                    }}</c-table-data-cell>
                    <c-table-data-cell>{{ image.damage }}</c-table-data-cell>
                    <c-table-data-cell>{{ image.status }}</c-table-data-cell>
                    <c-table-data-cell
                      ><c-button
                        size="small"
                        :disabled="image.status !== Status.Success"
                        @click="onClickShowImage(image?.id!!)"
                        >이미지보기</c-button
                      ></c-table-data-cell
                    >
                  </c-table-row>
                  <c-table-row
                    v-if="image.status === Status.Success"
                    :id="getImageId(image.id)"
                    style="display: none"
                  >
                    <c-table-data-cell colspan="4">
                      <img
                        :alt="image.columnName"
                        :src="getImageUrl(image.filename)"
                      />
                    </c-table-data-cell>
                  </c-table-row>
                </template>
              </c-table-body>
            </c-table>
          </c-accordion-body>
        </c-accordion-item>
      </c-accordion>
    </c-card-body>
  </c-card>
  <c-modal
    :visible="modalForm.show"
    @close="
      () => {
        modalForm.show = false;
      }
    "
  >
    <c-modal-header>{{ modalForm.title }}</c-modal-header>
    <c-modal-body>{{ modalForm.message }}</c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        @click="
          () => {
            modalForm.show = false;

            if (sliceForm.step === SliceStep.Complete) {
              sliceForm.step = SliceStep.Confirm;
            }
          }
        "
      >
        확인
      </c-button>
    </c-modal-footer>
  </c-modal>
  <c-modal
    :visible="confirmForm.show"
    @close="
      () => {
        confirmForm.show = false;
      }
    "
  >
    <c-modal-header>선택하신 구간으로 저장하시겠습니까?</c-modal-header>
    <c-modal-body>
      <div class="mb-3">
        <c-form-input
          v-model="sliceForm.startPos"
          type="text"
          label="시작위치"
        ></c-form-input>
      </div>
      <div class="mb-3">
        <c-form-input
          v-model="sliceForm.endPos"
          type="text"
          label="완료위치"
        ></c-form-input>
      </div>
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        @click="
          () => {
            confirmForm.show = false;
            sliceForm.step = SliceStep.None;
          }
        "
      >
        취소
      </c-button>
      <c-button
        color="primary"
        @click="
          () => {
            confirmForm.show = false;
            submitForm.show = true;
          }
        "
      >
        잔행
      </c-button>
    </c-modal-footer>
  </c-modal>
  <c-modal
    :visible="submitUploadForm.show"
    @close="
      () => {
        submitUploadForm.show = false;
      }
    "
  >
    <c-modal-header>구간명을 입력하세요</c-modal-header>
    <c-modal-body>
      <c-form-input
        v-model="submitUploadForm.title"
        type="text"
        label="구간명"
      ></c-form-input>
      <c-form-input
        type="file"
        label="구간파일"
        @change="handleFileUpload($event)"
      ></c-form-input>
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        :disabled="submitUploadForm.loading"
        @click="
          () => {
            submitUploadForm.show = false;
          }
        "
      >
        닫기
      </c-button>
      <c-loading-button
        :loading="submitUploadForm.loading"
        :disabled="!submitUploadForm.loaded"
        color="primary"
        @click="processUploadFile"
      >
        저장
      </c-loading-button>
    </c-modal-footer>
  </c-modal>
  <c-modal
    :visible="submitForm.show"
    @close="
      () => {
        submitForm.show = false;
      }
    "
  >
    <c-modal-header>구간명을 입력하세요</c-modal-header>
    <c-modal-body>
      <c-form-input
        v-model="submitForm.title"
        type="text"
        label="구간명"
      ></c-form-input>
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        :disabled="submitForm.loading"
        @click="
          () => {
            modalForm.show = false;
          }
        "
      >
        닫기
      </c-button>
      <c-loading-button
        :loading="submitForm.loading"
        color="primary"
        @click="processCreateSlice"
      >
        저장
      </c-loading-button>
    </c-modal-footer>
  </c-modal>
  <c-modal
    :visible="showImageForm.show"
    size="lg"
    @close="
      () => {
        showImageForm.show = false;
      }
    "
  >
    <c-modal-header>Level Crossing</c-modal-header>
    <c-modal-body>
      <img :src="showImageForm.levelCrossingImage" alt="" />
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        @click="
          () => {
            showImageForm.show = false;
          }
        "
      >
        닫기
      </c-button>
    </c-modal-footer>
  </c-modal>
  <c-modal
    :visible="deleteForm.show"
    @close="
      () => {
        deleteForm.show = false;
      }
    "
  >
    <c-modal-header>확인</c-modal-header>
    <c-modal-body>
      <span>해당 구간을 삭제 하시겠습니까?</span>
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        :disabled="deleteForm.loading"
        @click="
          () => {
            deleteForm.show = false;
            deleteForm.id = undefined;
          }
        "
      >
        닫기
      </c-button>
      <c-loading-button
        :loading="deleteForm.loading"
        :disabled="deleteForm.loaded"
        color="primary"
        @click="onClickDelete"
      >
        삭제
      </c-loading-button>
    </c-modal-footer>
  </c-modal>
  <edit-modal
    v-model:show="editForm.show"
    :edit-id="editForm.id"
    @completed="onEditComplete"
  ></edit-modal>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
} from "chart.js";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CFormInput,
  CLoadingButton,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTable,
  CTableRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CSpinner,
} from "@coreui/vue-pro";
import zoomPlugin from "chartjs-plugin-zoom";
import { useAsyncState } from "@vueuse/core";
import { watch } from "vue";
import EditModal from "./edit.modal.vue";
import Chart from "@/components/chart.vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  zoomPlugin,
  TimeScale
);

enum SliceStep {
  None,
  Start,
  End,
  Complete,
  Confirm,
}

enum Status {
  Uploaded = "UPLOADED",
  Request = "REQUEST",
  Pending = "PENDING",
  Success = "SUCCESS",
  Error = "ERROR",
}

type SliceItemType = {
  id?: string;
  columnName?: string;
  filename?: string;
  damage?: string;
  status?: Status;
  show?: boolean;
};

type AnalysisLevelCrossing = {
  id: string;
  status: Status;
};

const modalForm = reactive({
  show: false,
  message: "",
  title: "",
});

const sliceForm = reactive({
  step: SliceStep.None,
  startPos: 0,
  endPos: 0,
});

const confirmForm = reactive({
  show: false,
});

const submitForm = reactive({
  show: false,
  loading: false,
  startPos: 0,
  endPos: 0,
  title: "",
});

const submitUploadForm = reactive({
  show: false,
  loading: false,
  loaded: false,
  title: "",
  headers: [],
  chartData: [],
});

const showImageForm = reactive({
  show: false,
  loading: false,
  levelCrossingImage: "",
});

const deleteForm = reactive({
  show: false,
  loading: false,
  id: undefined,
});

const editForm = reactive({
  show: false,
  loading: false,
  id: undefined,
});

const sliceItems = ref([]);

const runtimeConfig = useRuntimeConfig();

const downloadUrl = (id: any, filename: any) => {
  return `${runtimeConfig.public.IMAGE_URL}/media/uploads/${route.params.id}/splits/${id}/${filename}`;
};

const onClickStartAnalysis = (id: string) => {
  useAsyncGql({
    operation: "startAnalysisLevelCrossing",
    variables: {
      id,
    },
  })
    .then((resp) => {
      return resp;
    })
    .finally(() => {
      // @ts-ignore
      useAsyncGql({
        operation: "analysisLevelCrossings",
        variables: {
          analysisFileId: route.params.id,
        },
      })
        .then((resp) => {
          // @ts-ignore
          sliceItems.value = resp.data.value.analysisLevelCrossings;
          return resp;
        })
        .finally(() => {
          submitUploadForm.loading = false;
          submitUploadForm.show = false;

          if (id) {
            processCheckUpdate(id);
          }
        });
    });
};

const onClickEditItem = (id: string) => {
  // @ts-ignore
  editForm.id = id;
  editForm.show = true;
};

const onClickShowDelete = (id: string) => {
  // @ts-ignore
  deleteForm.id = id;
  deleteForm.show = true;
};

const onEditComplete = () => {
  processAnalysisLevelCrossings();
};
const onClickDelete = () => {
  deleteForm.loading = true;

  const { state: deleteState } = useAsyncState(
    // @ts-ignore
    useAsyncGql({
      operation: "deleteAnalysisLevelCrossing",
      variables: {
        id: deleteForm.id,
      },
    }).then((resp) => {
      return resp;
    }),
    {}
  );

  watch(
    () => deleteState.value,
    () => {
      deleteForm.show = false;
      deleteForm.loading = false;
      deleteForm.id = undefined;

      processAnalysisLevelCrossings();
    }
  );
};

const onClickShowImage = (id: string) => {
  const image = document.getElementById(`image-${id}`);

  if (image?.style?.display === "none") {
    image?.style?.setProperty("display", "block");
  } else {
    image?.style?.setProperty("display", "none");
  }

  // // showImageForm.levelCrossingImage = `${runtimeConfig.public.IMAGE_URL}${image}`;
  // // showImageForm.show = true;
};

const getImageId = (id: any) => {
  return `image-${id}`;
};

const getImageUrl = (image: any) => {
  return `${runtimeConfig.public.IMAGE_URL}${image}`;
};

const handleFileUpload = (event: any) => {
  const file = event.target.files[0];
  submitUploadForm.loaded = false;

  const readFile = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });

  readFile(file).then((resp: any) => {
    const cvsItems = resp.split("\n");
    // submitUploadForm.headers = cvsItems.slice(0, 8); //.join("\r\n");
    // @ts-ignore
    submitUploadForm.chartData = cvsItems.slice(8); // .join("\r\n");
    submitUploadForm.loaded = true;
  });
};

const processAnalysisLevelCrossings = () => {
  const { state } = useAsyncState(
    // @ts-ignore
    useAsyncGql({
      operation: "analysisLevelCrossings",
      variables: {
        analysisFileId: route.params.id,
      },
    }).then((resp) => {
      return resp.data?.value?.analysisLevelCrossings;
    }),
    {}
  );

  watch(
    () => state.value,
    (value: any) => {
      sliceItems.value = value;
    }
  );
};

const processAnalysisLevelCrossingsAsync = async () => {
  // @ts-ignore
  return await useAsyncGql({
    operation: "analysisLevelCrossings",
    variables: {
      analysisFileId: route.params.id,
    },
  }).then((resp: any) => {
    // @ts-ignore
    // sliceItems.value = resp.data.value.analysisLevelCrossings;
    // console.log("....", sliceItems.value);
    return resp.data.value.analysisLevelCrossings;
  });
};
// await useAsyncGql({
//   operation: "analysisLevelCrossings",
//   variables: {
//     analysisFileId: route.params.id,
//   },
// })
//   .then((resp) => {
//     sliceItems.value = resp.data.value.analysisLevelCrossings;
//     // console.log("....", sliceItems.value);
//     return resp;
//   })
//   .finally(() => {
//     submitUploadForm.loading = false;
//     submitUploadForm.show = false;
//   });

const processCheckUpdate = (id, delay = 2.5) => {
  const { state } = useAsyncState(
    useAsyncGql({
      operation: "analysisLevelCrossing",
      variables: {
        id,
      },
    }).then((resp) => {
      return resp.data?.value?.analysisLevelCrossing;
    }),
    { id: null },
    {
      delay: delay * 1000,
    }
  );

  watch(
    () => state.value as AnalysisLevelCrossing,
    (value: AnalysisLevelCrossing) => {
      if (value.status === Status.Pending) {
        processCheckUpdate(id);
      } else {
        processAnalysisLevelCrossings();
      }
    }
  );
};

// const processAnalysisLevelCrossings = async () => {
//   // @ts-ignore
//   await useAsyncGql({
//     operation: "analysisLevelCrossings",
//     variables: {
//       analysisFileId: route.params.id,
//     },
//   }).then((resp: any) => {
//     // @ts-ignore
//     // sliceItems.value = resp.data.value.analysisLevelCrossings;
//     // console.log("....", sliceItems.value);
//     return resp;
//   });
// };
const processUploadFile = async () => {
  submitUploadForm.loading = true;
  // @ts-ignore
  const { data } = await useAsyncGql({
    operation: "uploadAnalysisLevelCrossing",
    variables: {
      analysisFileId: route.params.id,
      chartData: submitUploadForm.chartData.join("\n").trim(),
      title: submitUploadForm.title,
    },
  });

  if (data.value) {
    submitUploadForm.loading = false;
    submitUploadForm.show = false;

    try {
      await processReloadChart();
      await processAnalysisLevelCrossingsAsync().then((resp) => {
        // @ts-ignore
        sliceItems.value = resp;
        return resp;
      });
    } catch (err) {
      console.error(err);
    }

    // await Promise.all([
    //   processAnalysisLevelCrossingsAsync().then((resp) => {
    //     // @ts-ignore
    //     sliceItems.value = resp;
    //     return resp;
    //   }),
    //   processReloadChart(),
    // ]).finally(() => {
    //
    // });
  } else {
    submitUploadForm.loading = false;
    submitUploadForm.show = false;
  }
};

const processCreateSlice = async () => {
  sliceForm.step = SliceStep.None;
  submitForm.loading = true;

  const chartData = csvList.value.slice(sliceForm.startPos, sliceForm.endPos);

  // @ts-ignore
  const { data } = await useAsyncGql({
    operation: "createAnalysisLevelCrossing",
    variables: {
      analysisFileId: route.params.id,
      chartData: cvsHeader.value.concat(chartData).join("\n"),
      startPos: parseInt(sliceForm.startPos.toString()),
      endPos: parseInt(sliceForm.endPos.toString()),
      title: submitForm.title,
    },
  });

  if (data.value) {
    // const id =
    //   data.value?.createAnalysisLevelCrossing?.analysisLevelCrossing?.id;

    // @ts-ignore
    await useAsyncGql({
      operation: "analysisLevelCrossings",
      variables: {
        analysisFileId: route.params.id,
      },
    })
      .then((resp) => {
        sliceItems.value = resp.data.value.analysisLevelCrossings;
        // console.log("....", sliceItems.value);
        return resp;
      })
      .finally(() => {
        submitForm.loading = false;
        submitForm.show = false;
      });
  } else {
    submitForm.loading = false;
    submitForm.show = false;
  }
};

// const loaded = ref(false);

const chartData = ref({
  labels: ["1", "2"],
  datasets: [
    {
      data: [10, 20],
    },
  ],
});

const chartData1 = ref({});
const chartCellName = ref("");

watch(
  () => sliceForm.step,
  (step) => {
    switch (step) {
      case SliceStep.Start:
        modalForm.title = "구간선택";
        modalForm.message = "시작위치 및 완료 위치를 차트에서 선택하세요";
        modalForm.show = true;
        break;
      // case SliceStep.End:
      //   modalForm.title = "구간선택";
      //   modalForm.message = "완료위치 구간을 선택하세요";
      //   modalForm.show = true;
      //   break;
      case SliceStep.Complete:
        modalForm.title = "구간선택";
        modalForm.message = `구간 선택이 완료되었습니다\n선택하신 구간은 ${sliceForm.startPos} ~ ${sliceForm.endPos} 입니다`;
        modalForm.show = true;
        break;
      case SliceStep.Confirm:
        confirmForm.show = true;
        break;
    }
  }
);

// noinspection ES6ShorthandObjectProperty
const onChartSelect = ({ startPos, endPos }) => {
  if (sliceForm.step !== SliceStep.Start) {
    return;
  }

  sliceForm.startPos = parseInt(startPos);
  sliceForm.endPos = parseInt(endPos);

  sliceForm.step = SliceStep.Complete;
};

const onClickSlice = () => {
  switch (sliceForm.step) {
    case SliceStep.None:
      sliceForm.step = SliceStep.Start;
      break;
  }
};

const onClickFileUpload = () => {
  submitUploadForm.show = true;
};

// const chartOptions = ref({
//   responsive: true,
//   onClick: (_point: any, event: any) => {
//     if (event.length <= 0) return;
//     switch (sliceForm.step) {
//       case SliceStep.Start:
//         // sliceForm.startPos = event[0].index;
//         // sliceForm.step = SliceStep.Complete;
//         break;
//         // case SliceStep.End:
//         //   sliceForm.endPos = event[0].index;
//         //   sliceForm.step = SliceStep.Complete;
//         break;
//     }
//   },
//   // plugins: {
//   //   zoom: zoomOptions,
//   //   title: {
//   //     display: true,
//   //     position: "bottom",
//   //     text: (_ctx) => {},
//   //   },
//   // },
//   // transitions: {
//   //   zoom: {
//   //     animation: {
//   //       duration: 100,
//   //     },
//   //   },
//   // },
// });

const route = useRoute();

interface AnalysisFile {
  chartCellName: string;
  carType: string;
  year: string;
  area: string;
  roadSurface: string;
  weight: string;
  chartData: string;
}

const item = ref<AnalysisFile | undefined>(undefined);
const csvList = ref();
const cvsHeader = ref();

const processFindYPos = (items: []) => {
  // for (const title of chartColumn) {
  const yPos = items.findIndex((x: string) => x === chartCellName.value);

  if (yPos !== -1) {
    return yPos;
  }
};

const processReloadChart = async () => {
  // @ts-ignore
  return await useAsyncGql({
    operation: "analysisFile",
    variables: {
      id: route.params.id,
    },
  })
    .then((resp) => {
      const { data } = resp;
      if (data.value) {
        item.value = {
          // @ts-ignore
          chartCellName: data.value.analysisFile.chartCellName,
          // @ts-ignore
          carType: data.value.analysisFile.carType,
          // @ts-ignore
          year: data.value.analysisFile.year,
          // @ts-ignore
          area: data.value.analysisFile.area,
          // @ts-ignore
          roadSurface: data.value.analysisFile.roadSurface,
          // @ts-ignore
          weight: data.value.analysisFile.weight,
          // @ts-ignore
          testCount: data.value.analysisFile.testCount,
          // @ts-ignore
          chartData: data.value.analysisFile.chartData,
        };

        chartCellName.value = item.value.chartCellName;
        // @ts-ignore
        const cvsItems = data.value.analysisFile.chartData.split("\n");

        // @ts-ignore
        const yPos = processFindYPos(cvsItems[2].split(","));
        //
        //   Front Left Wheel Center Force (Z)

        cvsHeader.value = cvsItems.slice(0, 8);

        csvList.value = cvsItems.slice(8);
        let idx = 0;

        const items = csvList.value
          .map((line: string) => {
            const items = line.split(",");
            // console.log(items)
            return {
              x: Number(++idx),
              // @ts-ignore
              y: Number(items[yPos]),
            };
          })
          .filter((x) => x.y);

        chartData.value.labels = items.map((x: { x; y }) => {
          return x.x;
        });

        chartData.value.datasets[0].data = items.map((x: { x; y }) => {
          return x.y;
        });

        chartData1.value = items;
      }
    })
    .finally(() => {});
};

await processReloadChart();

// @ts-ignore
useAsyncGql({
  operation: "analysisLevelCrossings",
  variables: {
    analysisFileId: route.params.id,
  },
})
  .then((resp) => {
    // @ts-ignore
    sliceItems.value = resp.data.value.analysisLevelCrossings;
    return resp;
  })
  .finally(() => {});
</script>

<!--suppress CssUnknownTarget -->
<style scoped lang="scss">
div.sign-in {
  background: linear-gradient(
      0deg,
      rgba(39, 53, 94, 0.56),
      rgba(39, 53, 94, 0.56)
    ),
    url("../../assets/images/sign-in/bg.png");
  background-blend-mode: color, normal;

  h3.title {
    font-style: italic;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #ffffff;
    text-align: center;

    span {
      color: #cedaff;
    }
  }

  h3.title-01 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    color: #ffffff;
    text-align: center;
  }

  p.title-01 {
    color: #b7b7b7 !important;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
  }

  button {
    height: 70px;
    background: #223e81;
  }
}
</style>
