import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: 'http://localhost',
    timeout: 1000,
    withCredentials: true
  });

  apiClient.interceptors.response.use(
    response => response,
    error => {
      console.error('API Error:', error.response ? error.response.data : error.message);
      return Promise.reject(error);
    }
  );

  nuxtApp.provide('apiClient', apiClient);
});
