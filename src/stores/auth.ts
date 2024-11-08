import { defineStore } from 'pinia'
import { $api } from '@/boot/axios'
import { router } from '@/router'

interface AuthState {
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
  }),

  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
  },

  actions: {
    async login(postData: Record<string, unknown>) {
      try {
        // const res = await $api.post('/users/login', postData)
        console.log(postData)
        this.isAuthenticated = true
        // return res
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async logout() {
      this.isAuthenticated = false
      router.push({ name: 'Login' })
    },

    async fetchToken() {
      await $api.get('/auth/token')
    },
  },

  persist: true,
})
