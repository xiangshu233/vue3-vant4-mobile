import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');

const routeModuleList: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: {
      title: '主控台',
      icon: 'wap-home',
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
      title: '消息',
      icon: 'chat',
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
    path: '/my',
    name: 'My',
    redirect: '/my/index',
    component: Layout,
    meta: {
      title: '我的',
      icon: 'manager',
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
      title: '编辑个人信息',
      innerPage: true,
    },
    component: () => import('@/views/my/EditUserInfo.vue'),
  },
  {
    path: '/editNickname',
    name: 'EditNickname',
    meta: {
      title: '修改昵称',
      innerPage: true,
      keepAlive: false,
    },
    component: () => import('@/views/my/EditNickname.vue'),
  },
  {
    path: '/editSign',
    name: 'EditSign',
    meta: {
      title: '修改签名',
      innerPage: true,
    },
    component: () => import('@/views/my/EditSign.vue'),
  },
  {
    path: '/accountSetting',
    name: 'AccountSetting',
    meta: {
      title: '账号与安全',
      innerPage: true,
    },
    component: () => import('@/views/my/AccountSetting.vue'),
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    meta: {
      title: '修改登录密码',
      innerPage: true,
    },
    component: () => import('@/views/my/ChangePassword.vue'),
  },
  {
    path: '/themeSetting',
    name: 'ThemeSetting',
    meta: {
      title: '主题设置',
      innerPage: true,
    },
    component: () => import('@/views/my/ThemeSetting.vue'),
  },
];

export default routeModuleList;
