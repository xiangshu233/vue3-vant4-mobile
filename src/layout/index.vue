<template>
  <div
    class="layout-shell h-screen flex flex-col"
    :class="{ dark: designStore.darkMode === 'dark' }"
  >
    <RouterView class="flex-1 overflow-x-hidden">
      <template #default="{ Component, route }">
        <KeepAlive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
        <component :is="Component" v-else :key="route.fullPath" />
      </template>
    </RouterView>

    <!--
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/dashboard/index">
          首页
        </van-tabbar-item>
        <van-tabbar-item icon="search" to="/message/index">
          消息
        </van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/my/index">
          我的
        </van-tabbar-item>
      </van-tabbar>
    -->
    <FloatingNavBar :items="tabbarItems" :show-dark-mode-toggle="true" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FloatingNavBar from './components/FloatingNavBar.vue'
import { useRouteStore } from '@/store/modules/route'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const routeStore = useRouteStore()
const designStore = useDesignSettingStore()

const keepAliveComponents = computed(() => routeStore.keepAliveComponents)

const tabbarItems = [
  { label: 'Home', path: '/dashboard/index', icon: 'i-ph:house-line' },
  { label: 'Search', path: '/message/index', icon: 'i-ph:magnifying-glass' },
  { label: 'User', path: '/my/index', icon: 'i-ph:user-circle' },
]
</script>

<style scoped lang="less">
.layout-shell {
  background: #f7f8fa;
}

.layout-shell.dark {
  background: #000000;
}
</style>
