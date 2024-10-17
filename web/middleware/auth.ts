import { useAuthStore } from '~/stores';
import dayjs from 'dayjs';

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/sign-in') {
    return
  }

  const auth = useAuthStore()

  if (auth.isExpired) {
    return navigateTo('/sign-in')
  }

})
