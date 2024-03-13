<template>
  <svg :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
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

    return { symbolId, getStyle }
  },
})
</script>

<style scoped lang="less"></style>
