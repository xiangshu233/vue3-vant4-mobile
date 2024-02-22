import type { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'

const Layout = () => import('@/layout/index.vue')

// 404 on a page
export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: PageEnum.ERROR_PAGE_NAME,
  component: Layout,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'ErrorPageSon',
      component: () => import('@/views/exception/404.vue'),
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
      },
    },
  ],
}

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
}

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/Login.vue'),
  meta: {
    title: '登录',
  },
}
