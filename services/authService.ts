import {useNuxtApp} from '#app';

export default function useApiService() {
  const {$apiClient} = useNuxtApp();

  const handleRequest = (requestFunction) => {
    return requestFunction().then(response => response).catch(error => {
      console.error('Auth service failure', error)
      throw error
    })
  };

  const login = credentials => handleRequest(() => $apiClient.post('/v1/auth/login', credentials));
  const checkUser = () => handleRequest(() => $apiClient.get('/v1/user/'));
  const logout = () => handleRequest(() => $apiClient.post('/v1/auth/logout'));

  return {
    login,
    checkUser,
    logout,
  };
};
