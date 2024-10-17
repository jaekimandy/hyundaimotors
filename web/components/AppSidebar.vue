<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible != ''"
    @visible-change="(event) => updateSidebarVisible(event)"
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand>
    <AppSidebarNav />
  </CSidebar>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { useStore } from 'vuex'
import { AppSidebarNav } from "./AppSidebarNav";
import { useSetting } from "@/stores/setting";
import { logoNegative } from "@/assets/brand/logo-negative";
import { sygnet } from "@/assets/brand/sygnet";

const store = useSetting();

const sidebarUnfoldable = computed(() => {
  return store.sidebarUnfoldable;
});

const sidebarVisible = computed(() => {
  return store.sidebarVisible;
});

const updateSidebarVisible = (event: any) => {
  store.updateSidebarVisible(event);
};

// export default {
//   name: 'AppSidebar',
//   components: {
//     AppSidebarNav,
//   },
//   setup() {
//     const store = useStore()
//     return {
//       logoNegative,
//       sygnet,
//       sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
//       sidebarVisible: computed(() => store.state.sidebarVisible),
//     }
//   },
// }
</script>
