<!-- eslint-disable prettier/prettier -->
<template>
  <div class="h-screen flex flex-col">
    <van-nav-bar v-if="getShowHeader" placeholder fixed :title="getTitle" />
    <routerView class="flex-1 overflow-x-hidden">
      <template #default="{ Component, route }">
        <!--
          keep-alive 标签的 include 属性是根据组件的 name 判断的，
          所以 index.vue 和 list.vue 等页面 vue 文件里一定要写上 name，
          并且与 router 路由表中使用的 name 属性 一致，否则无效
          Vue 3.3 中新引入了 defineOptions 宏声明 name 属性
          https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2
        -->
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component :is="Component" v-else :key="route.fullPath" />
      </template>
    </routerView>
    <van-tabbar route class="tabbar">
      <van-tabbar-item
        v-for="menu in getMenus"
        :key="menu.name"
        replace
        :to="menu.path"
      >
        <template #icon>
          <i :class="menu.meta?.icon" />
        </template>
        {{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useRouteStore } from '@/store/modules/route'

const routeStore = useRouteStore()
// 需要缓存的路由组件
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)
const currentRoute = useRoute()

const getTitle = computed(() => currentRoute.meta.title as string)

// 菜单
const getMenus: ComputedRef<RouteRecordRaw[]> = computed(() =>
  routeStore.menus.filter((item) => {
    return !item.meta?.innerPage
  }),
)

const getShowHeader = computed(() => !currentRoute.meta.hiddenHeader)
</script>

<style scoped lang="less">
.tabbar {
  bottom: 0;
  width: 100%;
  position: relative;
}
</style>
