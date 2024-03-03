<template>
  <div class="enter-y wave-wrapper fixed bottom-0 w-full !-z-5">
    <svg
      class="ignore-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          :fill="hexToRgba(designStore.getAppTheme, 0.4)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          :fill="hexToRgba(designStore.getAppTheme, 0.5)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          :fill="hexToRgba(designStore.getAppTheme, 0.6)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="7"
          :fill="hexToRgba(designStore.getAppTheme, 0.7)"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { hexToRgba } from '@/utils'

const designStore = useDesignSettingStore()
</script>

<style scoped lang="less">
  .wave-wrapper {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
.ignore-waves {
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  min-height: 40px;
  max-height: 80px;
}

/* Animation */
.parallax > use {
  animation: move-forever 12s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  animation: move-forever 12s linear infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 16s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
