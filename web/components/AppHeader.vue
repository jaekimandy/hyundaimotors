<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="mx-auto d-lg-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
      </CHeaderNav>
      <CHeaderNav class="me-4">
        <!-- noti -->
        <!--        <AppHeaderDropdownNotif />-->
        <!-- task -->
        <!--        <AppHeaderDropdownTasks />-->
        <!-- mssgs -->
        <!--        <AppHeaderDropdownMssgs />-->
      </CHeaderNav>
      <CHeaderNav class="ms-3 me-4">
        <!-- 사용자 정보 -->
        <!--        <AppHeaderDropdownAccnt />-->
      </CHeaderNav>
      <CHeaderToggler class="px-md-0 me-md-3">
        <CIcon icon="cil-applications-settings" size="lg" />
      </CHeaderToggler>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppHeaderDropdownAccnt from "@/components/AppHeaderDropdownAccnt.vue";
import AppHeaderDropdownMssgs from "@/components/AppHeaderDropdownMssgs.vue";
import AppHeaderDropdownNotif from "@/components/AppHeaderDropdownNotif.vue";
import AppHeaderDropdownTasks from "@/components/AppHeaderDropdownTasks.vue";
import { logo } from "@/assets/brand/logo";

export default {
  name: "AppHeader",
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
    AppHeaderDropdownMssgs,
    AppHeaderDropdownNotif,
    AppHeaderDropdownTasks,
  },
  setup() {
    return {
      logo,
    };
  },
};
</script>
