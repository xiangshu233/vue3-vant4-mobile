<template>
  <div class="ignore-nav-footer">
    <van-tabbar route>
      <van-tabbar-item
        fixed
        replace
        v-for="menu in getMenus"
        :key="menu.name"
        :to="menu.path"
        :icon="(menu.meta?.icon as string)"
        >{{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRouteStore } from '@/store/modules/route';

  const routeStore = useRouteStore();
  const getMenus = computed(() => routeStore.menus);
</script>

<style scoped lang="less">
  .nav-footer {
    height: @footer-height;
  }
</style>
