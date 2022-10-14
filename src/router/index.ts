import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { LoginRoute, RootRoute, ErrorPageRoute } from '@/router/base';
import { createRouterGuards } from './router-guards';
import { useRouteStoreWidthOut } from '@/store/modules/route';

// 菜单
import routeModuleList from './modules';

// 普通路由
export const constantRouter: RouteRecordRaw[] = [LoginRoute, RootRoute, ErrorPageRoute];

const routeStore = useRouteStoreWidthOut();

routeStore.setMenus(routeModuleList);
routeStore.setRouters(constantRouter.concat(routeModuleList));

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter.concat(...routeModuleList),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
