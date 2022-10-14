<template>
  <div class="ignore-nav-header">
    <van-nav-bar fixed :title="getTitle" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const currentRoute = useRoute();

  const getTitle = computed(() => currentRoute.meta.title as string);
</script>

<style scoped lang="less">
  .ignore-nav-header {
    height: @header-height;
  }
</style>
