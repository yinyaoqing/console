import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Router } from 'vue-router'

// 擴展 Pinia 的類型定義，加入 router 屬性
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router
  }
}

// 創建並配置 Pinia 存儲
export default store(() => {
  const pinia = createPinia()
  // 使用持久化狀態插件
  pinia.use(piniaPluginPersistedstate)

  return pinia
})
