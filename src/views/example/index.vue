<template>
  <div class="my-4">
    <van-cell-group inset>
      <van-cell center :title="`🌓 ${$t('layout.setting.diabloMode')}`">
        <template #right-icon>
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
          <span class="mx-2">{{ isDark }}</span>
          <van-switch v-model="checked" size="22" @click="toggle()" />
        </template>
      </van-cell>
      <van-cell center is-link :title="$t('layout.setting.changeLanguage')" @click="showLanguagePicker = true">
        <template #icon>
          <i class="i-material-symbols:language mr-1 text-xl" />
        </template>
      </van-cell>
    </van-cell-group>

    <LocalePicker v-model:show="showLanguagePicker" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { LocalePicker } from '@/components/locale-picker'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const designStore = useDesignSettingStore()

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
const showLanguagePicker = ref(false)

const checked = ref(isDark.value)

const toggleDark = useToggle(isDark)

function toggle() {
  toggleDark()
  designStore.setDarkMode(isDark.value ? 'dark' : 'light')
}
</script>

<style scoped lang="less">

</style>
