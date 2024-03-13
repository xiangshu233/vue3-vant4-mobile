<template>
  <div>
    <SvgIcon v-if="designStore.getAppTheme === defaultAppTheme" class="!h-30 !w-30" name="logo" />
    <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 87 100">
      <defs>
        <linearGradient id="gradient23" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(-90 .5 .5)">
          <stop offset="0" :stop-color="hexToRgba(designStore.getAppTheme, 0.3)" stop-opacity="1" />
          <stop offset="1" :stop-color="hexToRgba(designStore.getAppTheme, 0.8)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient23)" d="M 86.45 25.05Q 86.05 25.9 85.5 26.25L 44.9 49.7 44.9 51.75 41.9 51.75 41.9 49.7 1.25 26.25Q 0.9 26.05 0.65 25.55L 0.45 25.1 0.45 75.2 0.5 75.75Q 0.7 76.35 1.1 76.55L 41.75 100 41.85 59.85 44.95 59.85 45.05 100 85.65 76.55Q 86.15 76.2 86.35 75.7L 86.45 75.2 86.45 25.05 Z" />
      <defs>
        <linearGradient id="gradient24" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(-90 .5 .5)">
          <stop offset="0" :stop-color="hexToRgba(designStore.getAppTheme, 0.8)" stop-opacity="1" />
          <stop offset="1" :stop-color="hexToRgba(designStore.getAppTheme, 0.2)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient24)" d="M 86.6 25.1Q 86.6 24.4 85.8 23.95L 45.15 0.5Q 44.35 0 43.15 0 42 0 41.2 0.5L 0.85 23.95Q 0 24.4 0 25.1 0 25.75 0.85 26.25L 41.45 49.7Q 42.3 50.15 43.45 50.15 44.65 50.15 45.45 49.7L 85.8 26.25Q 86.6 25.75 86.6 25.1 Z" />
      <defs>
        <linearGradient id="gradient25" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(-90 .5 .5)">
          <stop offset="0" :stop-color="hexToRgba(designStore.getAppTheme, 0.4)" stop-opacity="1" />
          <stop offset="1" :stop-color="hexToRgba(designStore.getAppTheme, 0.9)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient25)" d="M 67.9 35.85Q 67.8 36.35 67.5 36.55L 43.25 50.2 43.25 79.3 67.6 65.3Q 67.95 65.1 67.9 64.5L 67.9 35.85 Z" />
      <defs>
        <linearGradient id="gradient26" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(-90 .5 .5)">
          <stop offset="0" :stop-color="hexToRgba(designStore.getAppTheme, 0.8)" stop-opacity="1" />
          <stop offset="1" :stop-color="hexToRgba(designStore.getAppTheme, 0.4)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient26)" d="M 19.2 36.55Q 19 36.4 18.9 36.1L 18.8 35.85 18.85 64.85Q 18.9 65.15 19.15 65.3L 43.45 79.3 43.45 50.2 19.2 36.55 Z" />
      <defs>
        <linearGradient id="gradient27" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(-90 .5 .5)">
          <stop offset="0" :stop-color="hexToRgba(designStore.getAppTheme, 0.9)" stop-opacity="1" />
          <stop offset="1" :stop-color="hexToRgba(designStore.getAppTheme, 0.3)" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient27)" d="M 67.6 35.2L 44.4 21.8Q 43.9 21.55 43.25 21.55 42.55 21.55 42.1 21.8L 19.05 35.2Q 18.6 35.5 18.6 35.9 18.6 36.25 19.05 36.55L 42.25 49.95Q 42.7 50.2 43.4 50.2 44.1 50.2 44.55 49.95L 67.6 36.55Q 68.1 36.25 68.05 35.9 68.05 35.5 67.6 35.2 Z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { hexToRgba } from '@/utils'
import { appThemeList } from '@/settings/designSetting'

const defaultAppTheme = appThemeList[0]
const designStore = useDesignSettingStore()
</script>
