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
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

onMounted(() => {
  setOptions(chartOptions)
})
</script>

<style scoped></style>
