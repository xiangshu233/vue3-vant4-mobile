<template>
  <svg :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineOptions({ name: 'SvgIcon' })

const props = withDefaults(
  defineProps<{
    prefix?: string
    name: string
    size?: number | string
    color?: string
  }>(),
  {
    prefix: 'icon',
    size: 16,
    color: '#333',
  },
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const getStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s,
  }
})
</script>

<style scoped lang="less"></style>
