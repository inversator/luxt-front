import { useNuxtApp } from '#app';

const useApiService = () => {
  const { $apiClient } = useNuxtApp();

  const login = async (credentials) => {
    try {
      const response = await $apiClient.post('/v1/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const checkUser = async () => {
    try {
      const response = await $apiClient.get('/v1/user/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await $apiClient.post('/v1/auth/logout');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    login,
    checkUser,
    logout,
  };
};

export default useApiService;
