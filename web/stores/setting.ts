import { defineStore } from "pinia";

export const useSetting = defineStore("auth", {
  state: () => ({
    asideVisible: false,
    sidebarVisible: '',
    sidebarUnfoldable: false,
    theme: 'default',
  }),
  actions: {
    toggleAside() {
      this.asideVisible = !this.asideVisible
    },
    toggleSidebar() {
      if (this.sidebarVisible !== '') {
        this.sidebarVisible = ''
      }  else {
        this.sidebarVisible = 'visible'
      }
    },
    toggleTheme(payload: { value: string }) {
      this.theme = payload.value
    },
    toggleUnfoldable() {
      this.sidebarUnfoldable = !this.sidebarUnfoldable
    },
    updateSidebarVisible(payload: { value: string}) {
      this.sidebarVisible = payload.value
    },
  },
  getters: {
  }
});
