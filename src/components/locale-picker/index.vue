<template>
  <van-popup position="bottom" round @update:show="emit('update:show', $event)">
    <van-picker
      v-model="language"
      :columns="localeList"
      @confirm="handleMenuClick"
      @cancel="emit('update:show', false);"
    />
  </van-popup>
</template>

<script lang="ts" setup>
import { ref, unref, watchEffect } from 'vue'
import { useLocale } from '@/locales/useLocale'
import { type LocaleType, localeList } from '@/locales/config'

const emit = defineEmits(['update:show'])
const language = ref()
const selectedKeys = ref<string[]>([])

const { changeLocale, getLocale } = useLocale()

watchEffect(() => {
  selectedKeys.value = [unref(getLocale)]
})

async function toggleLocale(lang: LocaleType | string) {
  await changeLocale(lang as LocaleType)
  selectedKeys.value = [lang as string]
  emit('update:show', false)
}

function handleMenuClick({ selectedValues: [key] }) {
  if (unref(getLocale) === key) {
    return
  }
  toggleLocale(key as string)
}
</script>
