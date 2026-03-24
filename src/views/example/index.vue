<template>
  <div class="example-page my-4 pb-24">
    <van-cell-group inset>
      <van-cell center title="🌓 暗黑模式">
        <template #right-icon>
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
          <van-switch v-model="darkSwitch" size="22" />
        </template>
      </van-cell>
      <template v-for="item in menuItems" :key="item.route">
        <van-cell :title="item.title" :to="item.route" is-link />
      </template>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const designStore = useDesignSettingStore()

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false,
})

const darkSwitch = computed({
  get: () => isDark.value,
  set: (value: boolean) => {
    isDark.value = value
    designStore.setDarkMode(value ? 'dark' : 'light')
  },
})

const menuItems = [
  { title: '🐗 keep-alive', route: '/editNickname' },
  { title: '🦘 404 页演示', route: '/404' },
]
</script>

<style scoped lang="less">

</style>
