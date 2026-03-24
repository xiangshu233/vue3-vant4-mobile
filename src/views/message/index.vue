<template>
  <div class="message-page pb-24">
    <div class="section-title">
      数据概览
    </div>
    <lineChart />
    <barChart />
    <pieChart />
  </div>
</template>

<script setup lang="ts">
import lineChart from './lineChart.vue'
import barChart from './barChart.vue'
import pieChart from './pieChart.vue'
</script>

<style scoped lang="less">
.section-title {
  padding: 24px 16px 16px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

html.light .section-title {
  color: #555;
}

html.dark .section-title {
  color: rgba(255, 255, 255, 0.5);
}

html.dark .section-title::after {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  margin-top: 6px;
  background: var(--van-primary-color);
}
</style>
