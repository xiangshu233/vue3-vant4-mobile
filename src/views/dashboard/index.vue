<template>
  <div class="h-screen flex flex-col items-center justify-center p-60px">
    <div class="wel-box w-full flex flex-col items-center justify-between">
      <div class="page-title mb-4 mt-12 text-center">
        {{ title }}
      </div>
      <div class="mb-6 mt-4 w-full">
        <van-swipe class="h-30" :autoplay="3000" :indicator-color="designStore.appTheme">
          <van-swipe-item
            v-for="(text, index) in getSwipeText"
            :key="index"
            class="swipe-item text-center leading-relaxed"
          >
            <p class="swipe-title">
              {{ text.title }}
            </p>
            <p class="swipe-details">
              {{ text.details }}
            </p>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { useGlobSetting } from '@/hooks/setting'

defineOptions({
  name: 'DashboardPage',
})

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()

const { title } = globSetting

const getSwipeText = computed(() => {
  return [
    {
      title: '💡 最新技术栈',
      details: '基于Vue3、Vant4、Vite、TypeScript、UnoCSS等最新技术栈开发',
    },
    {
      title: '✨ 零配置 ESlint',
      details: '使用 Git Hook 进行 Lint Commit，规范化提交',
    },
    {
      title: '🌠 使用最新的 <script setup> 语法',
      details: 'Vue 3.4+ 最新语法',
    },
    {
      title: '⚡️ 轻量快速的热重载',
      details: '无论应用程序大小如何，都始终极快的模块热重载（HMR）',
    },
    {
      title: '🔩 主题配置',
      details: '具备主题配置及黑暗主题适配，且持久化保存',
    },
    {
      title: '🛠️ 丰富的 Vite 插件',
      details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
    },
    {
      title: '📊 内置 useEcharts hooks',
      details: '满足大部分图表展示，只需要写你的 Options',
    },
    {
      title: '🥳 完善的登录系统、路由、Axios配置',
      details: '所有基础设施已搭建完毕，你可以直接开发你的业务需求',
    },
  ]
})
</script>

<style scoped lang="less">
.page-title {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

html.light .page-title {
  color: #1a1a2e;
}

html.dark .page-title {
  color: rgba(255, 255, 255, 0.95);
}

html.light .page-title::after,
html.dark .page-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  margin: 8px auto 0;
  background: linear-gradient(
    90deg,
    transparent,
    v-bind('designStore.appTheme'),
    transparent
  );
  border-radius: 1px;
}

.swipe-item {
  padding: 0 8px;
}

html.light .swipe-title {
  color: #333;
}

html.dark .swipe-title {
  color: rgba(255, 255, 255, 0.88);
}

html.light .swipe-details {
  color: #666;
}

html.dark .swipe-details {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}
</style>
