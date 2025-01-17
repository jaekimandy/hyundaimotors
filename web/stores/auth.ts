import { defineStore } from "pinia";
import dayjs from "dayjs";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    refreshExpiresIn: 0,
  }),
  actions: {
    setToken(token?: string, refreshExpiresIn?: number) {
      this.token = token!;
      this.refreshExpiresIn = refreshExpiresIn!;
    },
  },
  getters: {
    isExpired: (state) => {
      return state.refreshExpiresIn - dayjs().unix() <= 0;
    },
  },
});
