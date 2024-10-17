<template>
  <c-modal
    :visible="props.show"
    @close="
      () => {
        emit('update:show', false);
      }
    "
  >
    <c-modal-header>{{ item?.title }} 수정</c-modal-header>
    <c-modal-body>
      <div class="mb-3">
        <c-form-input
          v-model="submitForm.startPos"
          type="text"
          label="시작위치"
        ></c-form-input>
      </div>
      <div class="mb-3">
        <c-form-input
          v-model="submitForm.endPos"
          type="text"
          label="완료위치"
        ></c-form-input>
      </div>
    </c-modal-body>
    <c-modal-footer>
      <c-loading-button
        :disabled="submitForm.loading"
        :loading="submitForm.loading"
        color="primary"
        @click="onClickSubmit"
      >
        수정
      </c-loading-button>
      <c-button
        :disabled="submitForm.loading"
        color="secondary"
        @click="
          () => {
            emit('update:show', false);
          }
        "
      >
        취소
      </c-button>
    </c-modal-footer>
  </c-modal>
</template>

<script setup lang="ts">
import {
  CButton,
  CModalFooter,
  CModal,
  CModalBody,
  CModalHeader,
  CFormInput,
  CLoadingButton,
} from "@coreui/vue-pro";

// @ts-ignore
import { useAsyncState } from "@vueuse/core";
// @ts-ignore
import { ref } from "#imports";

// import { ref } from "#imports";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  editId: {
    type: String,
    default: undefined,
  },
});

const emit = defineEmits(["update:show", "completed"]);

interface SubmitForm {
  title: string;
  startPos?: string;
  endPos?: string;
  loading: boolean;
}

const item = ref<{
  id: string;
  title: string;
  startPos?: number | null;
  endPos?: number | null;
}>(undefined);

const submitForm = ref<SubmitForm>({
  title: "",
  startPos: 0,
  endPos: 0,
  loading: false,
});

watch(
  () => props.editId,
  (editId) => {
    if (editId) {
      processAnalysisLevelCrossing(props.editId);
    }
  }
);

const processAnalysisLevelCrossing = (id: string) => {
  const { state } = useAsyncState(
    useAsyncGql({
      operation: "analysisLevelCrossing",
      variables: {
        id,
      },
    }).then((resp) => {
      return resp.data.value.analysisLevelCrossing;
    }),
    {},
    {}
  );

  watch(
    () => state.value,
    (value) => {
      if (value) {
        item.value = value;
        submitForm.value.title = value.title;
        submitForm.value.startPos = value.startPos;
        submitForm.value.endPos = value.endPos;
      }
    }
  );
  // useAsyncGql({
};

const onClickSubmit = () => {
  submitForm.loading = true;

  const { state } = useAsyncState(
    useAsyncGql({
      operation: "updateAnalysisLevelCrossing",
      variables: {
        id: props.editId,
        title: submitForm.value.title,
        startPos: parseInt(submitForm.value.startPos),
        endPos: parseInt(submitForm.value.endPos),
      },
    })
      .then((resp) => {
        if (resp.data.value.updateAnalysisLevelCrossing.analysisLevelCrossing) {
          emit("update:show", false);
          emit("completed", true);
        }
        return resp.data.value.analysisLevelCrossing;
      })
      .finally(() => (submitForm.loading = false)),
    {},
    {}
  );
};

// 	operation: "startAnalysisLevelCrossing",
// 	variables: {
// 		id,
// 	},
// })
// 	.then((resp) => {
// 		return resp;
// 	})
// 	.finally(() => {
// 		// @ts-ignore
// 		useAsyncGql({
// 			operation: "analysisLevelCrossings",
// 			variables: {
// 				analysisFileId: route.params.id,
// 			},
// 		})
// 			.then((resp) => {
// 				// @ts-ignore
// 				sliceItems.value = resp.data.value.analysisLevelCrossings;
// 				return resp;
// 			})
// 			.finally(() => {
// 				submitUploadForm.loading = false;
// 				submitUploadForm.show = false;
//
// 				if (id) {
// 					processCheckUpdate(id);
// 				}
// 			});
// 	});
</script>
