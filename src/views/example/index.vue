<template>
  <div class="my-4">
    <van-cell-group inset>
      <van-cell center title="🌓 暗黑模式">
        <template #right-icon>
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
          <span class="mx-2">{{ isDark }}</span>
          <van-switch v-model="checked" size="22" @click="toggle()" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const designStore = useDesignSettingStore()

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})

const checked = ref(isDark.value)

const toggleDark = useToggle(isDark)

function toggle() {
  toggleDark()
  designStore.setDarkMode(isDark.value ? 'dark' : 'light')
}
</script>

<style scoped lang="less">

</style>
