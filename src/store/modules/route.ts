import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { store } from '@/store'

export interface IRouteState {
  menus: RouteRecordRaw[]
  routers: RouteRecordRaw[]
  keepAliveComponents: string[]
}

export const useRouteStore = defineStore({
  id: 'app-route',
  state: (): IRouteState => ({
    menus: [],
    routers: [],
    keepAliveComponents: [],
  }),
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus
    },
  },
  actions: {
    setRouters(routers: RouteRecordRaw[]) {
      this.routers = routers
    },
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus
    },
    setKeepAliveComponents(compNames: string[]) {
      // 设置需要缓存的组件
      this.keepAliveComponents = compNames
    },
  },
})

// Need to be used outside the setup
export function useRouteStoreWidthOut() {
  return useRouteStore(store)
}
