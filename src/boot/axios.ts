import { boot } from 'quasar/wrappers' // 從 Quasar 中導入 boot 函數
import axios, { AxiosInstance } from 'axios' // 導入 axios 和 AxiosInstance 類型
// 取消 ts 錯誤
//// @ts-expect-error ERROR: 找不到模組 "quasar"。
// import { Notify } from 'quasar'

console.log(import.meta.env)
declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance // 定義 $axios 為 AxiosInstance 類型
    $api: AxiosInstance // 定義 $api 為 AxiosInstance 類型
  }
}
// 創建一個 Axios 實例
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // 設置基本 URL
  timeout: 10000, // 設置請求超時時間
})

// 在 Quasar 中提供 api 實例
export default boot(({ app, router }) => {
  // 添加請求攔截器
  api.interceptors.request.use(
    (config) => {
      // 可以在這裡添加自定義的請求邏輯，例如添加 token
      const token = localStorage.getItem('token') // 假設 token 存儲在 localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}` // 添加 Authorization 標頭
      }
      return config
    },
    (error) => {
      console.error('請求攔截器錯誤')
      return Promise.reject(error) // 返回錯誤
    }
  )

  // 添加響應攔截器
  api.interceptors.response.use(
    (response) => {
      return response.data // 直接返回數據
    },
    (error) => {
      // 錯誤處理
      // Notify.create(error)
      if (error.message.includes('Network Error')) {
        router.push({
          name: 'ErrorNetwork',
        })
      }
      return Promise.reject(error) // 返回錯誤
    }
  )
  app.provide('$axios', axios) // 提供 $axios 以便在組件中使用
  app.provide('$api', api) // 提供 $api 以便在組件中使用
})

export const $api = api
