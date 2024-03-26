import type { RouteRecordRaw } from 'vue-router'
import { t } from '@/hooks/useI18n'

const Layout = () => import('@/layout/index.vue')

const routeModuleList: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: {
      title: t('layout.footer.home'),
      icon: 'i-simple-icons:atlassian',
    },
    children: [
      {
        path: 'index',
        name: 'DashboardPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/message',
    name: 'Message',
    redirect: '/message/index',
    component: Layout,
    meta: {
      title: t('layout.footer.chart'),
      icon: 'i-simple-icons:soundcharts',
    },
    children: [
      {
        path: 'index',
        name: 'MessagePage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/message/index.vue'),
      },
    ],
  },
  {
    path: '/example',
    name: 'Example',
    redirect: '/example/index',
    component: Layout,
    meta: {
      title: t('layout.footer.example'),
      icon: 'i-material-symbols:award-star',
    },
    children: [
      {
        path: 'index',
        name: 'ExamplePage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/example/index.vue'),
      },
    ],
  },
  {
    path: '/my',
    name: 'My',
    redirect: '/my/index',
    component: Layout,
    meta: {
      title: t('layout.footer.my'),
      icon: 'i-simple-icons:docsify',
    },
    children: [
      {
        path: 'index',
        name: 'MyPage',
        meta: {
          keepAlive: false,
          hiddenHeader: true,
        },
        component: () => import('@/views/my/index.vue'),
      },
    ],
  },

  // my innerPage
  {
    path: '/editUserInfo',
    name: 'EditUserInfo',
    meta: {
      title: t('routes.my.editUserInfo'),
      innerPage: true,
    },
    component: () => import('@/views/my/EditUserInfo.vue'),
  },
  {
    path: '/editNickname',
    name: 'EditNickname',
    meta: {
      title: t('routes.my.editNickname'),
      innerPage: true,
      keepAlive: false,
    },
    component: () => import('@/views/my/EditNickname.vue'),
  },
  {
    path: '/editSign',
    name: 'EditSign',
    meta: {
      title: t('routes.my.editSignature'),
      innerPage: true,
    },
    component: () => import('@/views/my/EditSign.vue'),
  },
  {
    path: '/accountSetting',
    name: 'AccountSetting',
    meta: {
      title: t('routes.my.accountSetting'),
      innerPage: true,
    },
    component: () => import('@/views/my/AccountSetting.vue'),
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    meta: {
      title: t('routes.my.changePassword'),
      innerPage: true,
    },
    component: () => import('@/views/my/ChangePassword.vue'),
  },
  {
    path: '/themeSetting',
    name: 'ThemeSetting',
    meta: {
      title: t('layout.setting.sysTheme'),
      innerPage: true,
    },
    component: () => import('@/views/my/ThemeSetting.vue'),
  },
]

export default routeModuleList
