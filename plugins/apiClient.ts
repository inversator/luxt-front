import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const apiClient = axios.create({
    baseURL: 'http://localhost',
    timeout: 1000,
  });

  // apiClient.defaults.withCredentials = true;

  apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  nuxtApp.provide('apiClient', apiClient);
});
