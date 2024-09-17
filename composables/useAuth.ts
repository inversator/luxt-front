import {computed, ref} from 'vue'

// import {login as loginService, logout as logoutService} from '@/services/authService'
// import useApiService from '@/services/authService'

// export function useAuth() {
//   const user = ref(null);
//   const error = ref(null);
//
//   const loginUser = async (email: string, password: string) => {
//     try {
//       const response = await login(email, password);
//       console.info(response)
//       localStorage.setItem('token', response.data.token);
//     } catch (e) {
//       console.error(e)
//     }
//   };
//
//   // Другие функции: registerUser, logoutUser, refreshToken, getCurrentUser
//
//   return {
//     user,
//     error,
//     loginUser,
//     // Другие функции
//   };
// }

import useApiService from '@/services/authService'

const user = ref(null)
const login = async (credentials: { email: string, password: string }) => {

  try {
    const apiService = useApiService()
    const response = await apiService.login(credentials)
    localStorage.setItem('accessToken', response.data.token)
    user.value = response.data
  } catch (error) {
    console.error(error)
    throw error;
  }
}

const logout = async () => {
  try {
    // await logoutService()
    user.value = null
  } catch (error) {
    console.error(error)
  }
}

const isAuthenticated = computed(() => user.value !== null)

export {user, login, logout, isAuthenticated}
