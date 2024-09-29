import useApiService from '@/services/authService';
import {useUserStore} from '@/stores/useUserStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  console.info('Auth middleware')

  if (!userStore.isAuthenticated) {
    try {
      const apiService = useApiService();
      const response = await apiService.checkUser();
      userStore.setUser(response.data);

      console.log('Got user from checker', userStore.user)
    } catch (error) {
      console.error('Auth middleware error', error);
      userStore.clearUser()
    }
  } else {
    console.log('user', userStore.user)
  }

  //
  // if (!user.value && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
});
