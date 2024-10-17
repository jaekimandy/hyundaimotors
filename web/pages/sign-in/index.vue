<!--<template>-->
<!--  <div class="container login">-->
<!--    <form class="row">-->
<!--      <h3>D-drive</h3>-->
<!--      <p class="text-muted system-name">-->
<!--        현대자동차 00관리시스템-->
<!--      </p>-->
<!--      <div class="input-form">-->
<!--        <div class="mb-3">-->
<!--          <input type="email" class="form-control" placeholder="ID">-->
<!--        </div>-->
<!--        <div class="mb-5">-->
<!--          <input type="password" class="form-control" placeholder="Password">-->
<!--        </div>-->
<!--        <div class="d-grid gap-2">-->
<!--          <button class="btn btn-primary" type="button">Login</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.login {-->
<!--    position: relative;-->
<!--    width: 1440px;-->
<!--    height: 1024px;-->
<!--    color: red;-->
<!--    background-image: url('../../assets/images/image_46.png');-->
<!--}-->
<!--form {-->
<!--  position: absolute;-->
<!--  width: 866px;-->
<!--  height: 732px;-->
<!--  left: 0;-->
<!--  top: 146px;-->

<!--  /* 현차 서브 컬러 */-->
<!--  background: #F7F3F2;-->
<!--  backdrop-filter: blur(25px);-->
<!--  /* Note: backdrop-filter has minimal browser support */-->
<!--  border-radius: 0 100px 100px 0;-->

<!--  h3 {-->
<!--    /* D-drive */-->
<!--    position: absolute;-->
<!--    height: 74px;-->
<!--    left: 162px;-->
<!--    top: 241px;-->

<!--    font-family: 'Noto Sans',sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 700;-->
<!--    font-size: 54px;-->
<!--    line-height: 74px;-->
<!--    color: #223E81;-->
<!--  }-->

<!--  p.system-name {-->
<!--    position: absolute;-->
<!--    height: 22px;-->
<!--    left: 162px;-->
<!--    top: 327px;-->

<!--    font-family: 'Noto Sans',sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 400;-->
<!--    font-size: 16px;-->
<!--    line-height: 22px;-->

<!--    color: #555555;-->
<!--  }-->

<!--  div.input-form {-->
<!--    position: absolute;-->
<!--    width: 491px;-->
<!--    left: 162px;-->
<!--    top: 421px;-->

<!--  }-->

<!--  input.form-control {-->
<!--    box-sizing: border-box;-->
<!--    /* Auto layout */-->

<!--    flex-direction: row;-->
<!--    align-items: center;-->
<!--    padding: 16px 46px;-->
<!--    gap: 10px;-->

<!--    background: #FFFFFF;-->
<!--    border: 1px solid #C4C4C4;-->
<!--    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);-->
<!--    border-radius: 10px;-->
<!--  }-->

<!--  button {-->
<!--    height: 70px;-->
<!--    background: #223E81;-->
<!--    font-family: 'Noto Sans',sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 700;-->
<!--    font-size: 24px;-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center sign-in">
    <CContainer>
      <CRow>
        <CCol :md="6">
          <h3 class="title">D-<span>Drive</span></h3>
        </CCol>
      </CRow>
      <CRow class="mt-4">
        <CCol :md="6">
          <h3 class="title-01">현대자동차 관리시스템</h3>
          <p class="title-01 text-muted">
            원할한 서비스 이용을 위해 로그인 해주세요
          </p>
        </CCol>
      </CRow>
      <CRow class="mt-5">
        <CCol :md="6">
          <CCardGroup>
            <CCard class="p-5">
              <CCardBody>
                <CForm>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <!--suppress VueMissingComponentImportInspection -->
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="submitForm.username"
                      placeholder="Username"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <!--suppress VueMissingComponentImportInspection -->
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="submitForm.password"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup>

                  <div class="d-grid gap-2">
                    <CLoadingButton
                      :loading="submitForm.loading"
                      color="primary"
                      @click="onSubmit"
                      >Login</CLoadingButton
                    >
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>

    <CModal
      :backdrop="false"
      :keyboard="false"
      :visible="errorModal.show"
      @close="
        () => {
          errorModal.show = false;
        }
      "
    >
      <CModalHeader>
        <CModalTitle>{{ errorModal.title }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {{ errorModal.message }}
      </CModalBody>
      <CModalFooter>
        <CButton
          size="sm"
          color="primary"
          @click="
            () => {
              errorModal.show = false;
            }
          "
          >Close</CButton
        >
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup lang="ts">
import {
  CCol,
  CContainer,
  CRow,
  CLoadingButton,
  CModalTitle,
  CModalFooter,
  CCard,
  CCardBody,
  CCardGroup,
  CModal,
  CModalHeader,
  CModalBody,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
} from "@coreui/vue-pro";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores";

definePageMeta({
  layout: "empty",
});

const errorModal = reactive({
  show: false,
  title: "",
  message: "",
});

const submitForm = reactive({
  loading: false,
  username: "",
  password: "",
});

// const router = useRouter();
const authStore = useAuthStore();
const router = useRouter();
const onSubmit = async () => {
  submitForm.loading = true;

  const { data, error } = await useAsyncGql({
    operation: "tokenAuth",
    variables: {
      username: submitForm.username,
      password: submitForm.password,
    },
  }).finally(() => {
    submitForm.loading = false;
  });

  if (error.value) {
    errorModal.title = "로그인오류";
    errorModal.message = "아이디 또는 비밀번호가 틀립니다";
    errorModal.show = true;
  }

  if (data.value) {
    authStore.token = data.value.tokenAuth!;
    authStore.refreshExpiresIn = data.value.refreshExpiresIn!;
    // noinspection TypeScriptUnresolvedReference
    // authStore.setToken(data.value.tokenAuth!);
    await router.replace("/analysis");
  }
};
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
