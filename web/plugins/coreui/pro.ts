import CoreuiVue from '@coreui/vue-pro'

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  nuxtApp.vueApp.use(CoreuiVue);
})
