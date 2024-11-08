import { route } from 'quasar/wrappers'
import { ROUTE_NAMES } from './constants'
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from '@/stores/auth'

// 路由守衛邏輯
const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.getIsAuthenticated

  const allowedRoutes = [
    ROUTE_NAMES.LOGIN,
    ROUTE_NAMES.ERROR_NETWORK,
    ROUTE_NAMES.ERROR_NOT_FOUND,
  ] as const

  if (
    !isAuthenticated &&
    to.name &&
    !allowedRoutes.includes(to.name as (typeof allowedRoutes)[number])
  ) {
    next({ name: ROUTE_NAMES.LOGIN })
  } else if (isAuthenticated && to.name === ROUTE_NAMES.LOGIN) {
    next({ name: ROUTE_NAMES.HOME })
  } else {
    next()
  }
}

// 創建路由實例
const createMyRouter = () => {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHistory(''),
  })
  Router.beforeEach(authGuard)
  return Router
}

// 導出路由實例
export const router = createMyRouter()

// 為了與 Quasar 的 route 函數兼容，保留原來的默認導出
export default route(function () {
  return router
})
