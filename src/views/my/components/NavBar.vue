<template>
  <van-nav-bar @click-left="router.back">
    <template #title>
      <TitleI18n :title="getTitle" />
    </template>
    <template #left>
      <i class="i-ic:sharp-arrow-back-ios" text-xl />
    </template>
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { TitleI18n } from '@/components/title-i18n'

const router = useRouter()
const currentRoute = useRoute()

const getTitle = computed(() => currentRoute.meta.title as string)
</script>

<style scoped lang="less">
</style>
