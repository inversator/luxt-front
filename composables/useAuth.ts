// import { useState } from '#app';
import {computed} from 'vue';
import useApiService from '@/services/authService';
import {useUserStore} from '@/stores/useUserStore';

export default function useAuth() {
  // const user = useState('user', () => null);
  const userStore = useUserStore();
  const apiService = useApiService();

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiService.login(credentials);
      console.log('writing user data in composable useAuth', response.data.user)
      userStore.setUser(response.data.user);

    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      userStore.clearUser();
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = computed(() => userStore.isAuthenticated);

  return {login, logout, isAuthenticated};
}
