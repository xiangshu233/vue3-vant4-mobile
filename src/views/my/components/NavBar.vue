<template>
  <van-nav-bar @click-left="router.back">
    <template #title>
      {{ getTitle }}
    </template>
    <template #left>
      <Icon>
        <ChevronBack />
      </Icon>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
  import { Icon } from '@vicons/utils';
  import { ChevronBack } from '@vicons/ionicons5';
  import { useRouter, useRoute } from 'vue-router';
  import { computed } from 'vue';

  const router = useRouter();
  const currentRoute = useRoute();

  const getTitle = computed(() => currentRoute.meta.title as string);
</script>

<style scoped lang="less"></style>
