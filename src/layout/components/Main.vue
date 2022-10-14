<template>
  <div class="flex-1 nav-body">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="zoom-fade" mode="out-in" appear>
          <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component v-else :is="Component" :key="route.fullPath" />
        </transition>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRouteStore } from '@/store/modules/route';

  const routeStore = useRouteStore();
  // 需要缓存的路由组件
  const keepAliveComponents = computed(() => routeStore.keepAliveComponents);
</script>

<style scoped lang="less">
  .nav-body {
    overflow-x: auto;
  }
</style>
