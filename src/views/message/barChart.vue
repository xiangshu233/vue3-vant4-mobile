<template>
  <div class="my-card m-16px rounded-2xl p-24px">
    <div ref="chartRef" :style="{ height: '350px' }" />
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { useECharts } from '@/hooks/web/useECharts'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)
const designStore = useDesignSettingStore()

const chartColors = [designStore.appTheme, '#4a9eff', '#5dd9a8', '#ff9f7a', '#7ec8e3', '#b8a9e0']

const chartOptions: EChartsOption = {
  color: chartColors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: '1%',
    right: '7%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
    },
  ],
}

onMounted(() => {
  setOptions(chartOptions)
})
</script>

<style scoped></style>
