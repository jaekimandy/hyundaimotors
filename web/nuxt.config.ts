// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "@pinia/nuxt", "@vueuse/nuxt"],
  // @ts-ignore
  title: "현대자동차",
  ssr: false,
  plugins: [
    { src: "~/plugins/coreui/icon.ts", mode: "client" },
    { src: "~/plugins/coreui/pro.ts", mode: "client" },
  ],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "http://127.0.0.1:8000/graphql", // overwritten by process.env.GQL_HOST
      IMAGE_URL: "http://localhost:8000",
    },
  },
});
