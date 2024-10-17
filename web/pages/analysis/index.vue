<template>
  <c-row>
    <c-col :xs="12">
      <c-card class="mb-4">
        <c-card-header>
          <c-button color="primary" size="sm" @click="onClickNew"
            >업로드</c-button
          >
        </c-card-header>
        <c-card-body>
          <c-row>
            <c-table>
              <c-table-head>
                <c-table-row>
                  <c-table-header-cell>차종</c-table-header-cell>
                  <c-table-header-cell>연도</c-table-header-cell>
                  <c-table-header-cell>장소</c-table-header-cell>
                  <c-table-header-cell>중량</c-table-header-cell>
                  <c-table-header-cell>노면</c-table-header-cell>
                  <c-table-header-cell>횟수</c-table-header-cell>
                  <c-table-header-cell>상세</c-table-header-cell>
                  <c-table-header-cell>수정</c-table-header-cell>
                  <c-table-header-cell>다운로드</c-table-header-cell>
                  <c-table-header-cell>삭제</c-table-header-cell>
                </c-table-row>
              </c-table-head>
              <c-table-body>
                <c-table-row v-for="item in items" :key="item.id">
                  <c-table-data-cell>{{ item.carType }}</c-table-data-cell>
                  <c-table-data-cell>{{ item.year }}</c-table-data-cell>
                  <c-table-data-cell>{{ item.area }}</c-table-data-cell>
                  <c-table-data-cell>{{ item.weight }}</c-table-data-cell>
                  <c-table-data-cell>{{ item.roadSurface }}</c-table-data-cell>
                  <c-table-data-cell>{{ item.testCount }}</c-table-data-cell>
                  <c-table-data-cell
                    ><c-button size="sm" @click="onShowDetail(item.id)"
                      >상세</c-button
                    ></c-table-data-cell
                  >
                  <c-table-data-cell
                    ><c-button size="sm" @click="onShowEdit(item.id)"
                      >수정</c-button
                    ></c-table-data-cell
                  >
                  <c-table-data-cell>
                    <a
                      class="btn btn-sm"
                      :href="downloadUrl(item.id, item.filename)"
                      >다운로드</a
                    >
                  </c-table-data-cell>
                  <c-table-data-cell
                    ><c-button size="sm" @click="onClickDelete(item.id)"
                      >삭제</c-button
                    ></c-table-data-cell
                  >
                </c-table-row>
              </c-table-body>
            </c-table>
          </c-row>
        </c-card-body>
      </c-card>
    </c-col>
  </c-row>
  <c-modal
    :visible="deleteFrom.show"
    @close="
      () => {
        deleteFrom.show = false;
        deleteFrom.deleteId = undefined;
      }
    "
  >
    <c-modal-header>확인</c-modal-header>
    <c-modal-body>
      <span>해당 데이터를 삭제 하시겠습니까?</span>
    </c-modal-body>
    <c-modal-footer>
      <c-button
        color="secondary"
        :disabled="deleteFrom.loading"
        @click="
          () => {
            deleteFrom.show = false;
            deleteFrom.deleteId = undefined;
          }
        "
      >
        취소
      </c-button>
      <c-loading-button
        :loading="deleteFrom.loading"
        color="primary"
        @click="processDelete"
      >
        진행
      </c-loading-button>
    </c-modal-footer>
  </c-modal>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  CTable,
  CTableHead,
  CTableRow,
  CRow,
  CCard,
  CCol,
  CCardHeader,
  CCardBody,
  CTableHeaderCell,
  CButton,
  CTableBody,
  CTableDataCell,
  CLoadingButton,
  CModalFooter,
  CModal,
  CFormInput,
  CModalBody,
  CModalHeader,
} from "@coreui/vue-pro";
import { watch } from "vue";

// import { reactive } from 'vue';
// import { useRouter } from 'vue-router';
// import { CLoadingButton } from '@coreui/vue-pro/dist/components/loading-button';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const reload = ref(false);

const items = ref([] || undefined);

const deleteFrom = ref({
  loading: false,
  show: false,
  deleteId: undefined,
});

watch(
  () => reload.value,
  (v) => {
    if (v) {
      useAsyncGql({
        operation: "analysisFiles",
        variables: {},
      })
        .then((resp) => {
          items.value = resp.data.value?.analysisFiles;
        })
        .finally(() => {
          reload.value = false;
        });
    }
  }
);

const onClickNew = () => {
  router.push("/analysis/new");
};

const onShowDetail = (id) => {
  router.push(`/analysis/${id}`);
};

const onShowEdit = (id) => {
  router.push(`/analysis/${id}/edit`);
};

const onClickDelete = (id) => {
  deleteFrom.value.deleteId = id;
  deleteFrom.value.show = true;
};

const processDelete = () => {
  deleteFrom.value.loading = true;

  useAsyncGql({
    operation: "deleteAnalysisFile",
    variables: {
      id: deleteFrom.value.deleteId,
    },
  })
    .then((resp) => {
      return resp;
    })
    .finally(() => {
      deleteFrom.value.deleteId = undefined;
      deleteFrom.value.loading = false;
      deleteFrom.value.show = false;
      reload.value = true;
    });
};
const downloadUrl = (id, filename) => {
  return `${runtimeConfig.public.IMAGE_URL}/media/uploads/${id}/${filename}`;
};

reload.value = true;
</script>

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
