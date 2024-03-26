<template>
  <i18n-t tag="span" :keypath="getTitle" scope="global" />
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { useLangStore } from '@/store/modules/lang'

const props = defineProps({
  title: {
    type: [String, Object] as PropType<string | Title18n | any>,
    required: true,
    default: '',
  },
})

const localeStore = useLangStore()

const getTitle = computed(() => {
  const { title = '' } = props
  if (typeof title === 'object') {
    return title?.[localeStore.lang] ?? title
  }
  return title
})
</script>
