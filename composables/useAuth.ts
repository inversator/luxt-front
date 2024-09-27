
import { useState } from '#app';
import { computed } from 'vue';
import useApiService from '@/services/authService';

export default function useAuth() {
  const user = useState('user', () => null);
  const apiService = useApiService();

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiService.login(credentials);
      user.value = response.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      user.value = null;
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = computed(() => user.value !== null);

  return { user, login, logout, isAuthenticated };
}
