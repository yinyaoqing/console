import { RouteRecordRaw } from 'vue-router'
import { ROUTE_NAMES, ROUTE_PATHS } from './constants'

// 定義路由組件
const RouteComponents = {
  LoginPage: () => import('pages/LoginPage.vue'),
  MainLayout: () => import('layouts/MainLayout.vue'),
  HomePage: () => import('pages/HomePage.vue'),
  ErrorNetwork: () => import('pages/ErrorNetwork.vue'),
  ErrorNotFound: () => import('pages/ErrorNotFound.vue'),
  MemberList: () => import('pages/members/MemberList.vue'),
  AccountVerification: () => import('pages/members/AccountVerification.vue'),
  InSiteMail: () => import('pages/members/InSiteMail.vue'),
  MemberTag: () => import('pages/members/MemberTag.vue'),
  WithdrawalRecord: () => import('pages/financial/WithdrawalRecord.vue'),
}

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_PATHS.LOGIN,
    name: ROUTE_NAMES.LOGIN,
    meta: { requiresAuth: false },
    component: RouteComponents.LoginPage,
  },
  {
    path: ROUTE_PATHS.INDEX,
    name: ROUTE_NAMES.INDEX,
    redirect: ROUTE_NAMES.HOME,
    meta: { requiresAuth: true },
    component: RouteComponents.MainLayout,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        name: ROUTE_NAMES.HOME,
        component: RouteComponents.HomePage,
      },
      {
        path: ROUTE_PATHS.MEMBER_MANAGEMENT,
        name: ROUTE_NAMES.MEMBER_MANAGEMENT,
        redirect: `${ROUTE_PATHS.MEMBER_MANAGEMENT}/${ROUTE_PATHS.MEMBER_LIST}`,
        children: [
          {
            path: ROUTE_PATHS.MEMBER_LIST,
            name: ROUTE_NAMES.MEMBER_LIST,
            meta: {
              requiresAuth: true,
              permissions: ['010100', '010101', '010102', '010103', '010104'],
            },
            component: RouteComponents.MemberList,
          },
          {
            path: ROUTE_PATHS.ACCOUNT_VERIFICATION,
            name: ROUTE_NAMES.ACCOUNT_VERIFICATION,
            meta: {
              requiresAuth: true,
              permissions: ['010200', '010201', '010202', '010203', '010204'],
            },
            component: RouteComponents.AccountVerification,
          },
          {
            path: ROUTE_PATHS.IN_SITE_MAIL,
            name: ROUTE_NAMES.IN_SITE_MAIL,
            meta: {
              requiresAuth: true,
              permissions: ['010300', '010301', '010302', '010303', '010304'],
            },
            component: RouteComponents.InSiteMail,
          },
          {
            path: ROUTE_PATHS.MEMBER_TAG,
            name: ROUTE_NAMES.MEMBER_TAG,
            meta: {
              requiresAuth: true,
              permissions: ['010400', '010401', '010402', '010403', '010404'],
            },
            component: RouteComponents.MemberTag,
          },
        ],
      },
      {
        path: ROUTE_PATHS.FINANCIAL_MANAGEMENT,
        name: ROUTE_NAMES.FINANCIAL_MANAGEMENT,
        redirect: `${ROUTE_PATHS.FINANCIAL_MANAGEMENT}/${ROUTE_PATHS.WITHDRAWAL_RECORD}`,
        children: [
          {
            path: ROUTE_PATHS.WITHDRAWAL_RECORD,
            name: ROUTE_NAMES.WITHDRAWAL_RECORD,
            meta: {
              requiresAuth: true,
              permissions: ['020100', '020101', '020102', '020103', '020104'],
            },
            component: RouteComponents.WithdrawalRecord,
          },
        ],
      },
    ],
  },
  {
    path: ROUTE_PATHS.ERROR,
    name: ROUTE_NAMES.ERROR_NETWORK,
    meta: { requiresAuth: false },
    component: RouteComponents.ErrorNetwork,
  },
  {
    path: '/:catchAll(.*)*',
    name: ROUTE_NAMES.ERROR_NOT_FOUND,
    meta: { requiresAuth: false },
    component: RouteComponents.ErrorNotFound,
  },
]

export default routes
