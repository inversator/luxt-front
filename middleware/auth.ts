import useApiService from '@/services/authService';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useState('user')
  console.info('Auth middleware')

  if (user.value === undefined || !user.value) {
    try {
      const apiService = useApiService();
      const response = await apiService.checkUser();
      user.value = response.user;
    } catch (error) {
      console.error('Auth middleware error', error);
      user.value = null
    }

  } else {
    console.log('user', user)
  }

  console.log(user.value)
  //
  // if (!user.value && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
});
