<template>
  <div class="flex flex-col justify-center items-center h-screen p-60px">
    <div class="wel-box flex flex-col items-center justify-between w-full">
      <SvgIcon class="logo" :size="130" name="logo" />
      <div class="text-darkBlue dark:text-garyWhite text-2xl font-black mt-12 mb-4 text-center"
        >欢迎来到 {{ title }}</div
      >
      <div class="w-full mt-4 mb-6">
        <van-swipe class="h-30" :autoplay="3000" :indicator-color="designStore.appTheme">
          <van-swipe-item
            class="text-gray-700 dark:text-gray-400 leading-relaxed text-center"
            v-for="(text, index) in getSwipeText"
            :key="index"
          >
            <p class="text-lg">{{ text.title }}</p>
            <p class="text-sm">{{ text.details }}</p>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="DashboardPage">
  import { computed } from 'vue';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import SvgIcon from '@/components/SvgIcon.vue';
  import { useGlobSetting } from '@/hooks/setting';

  const designStore = useDesignSettingStore();
  const globSetting = useGlobSetting();

  const { title } = globSetting;

  const getSwipeText = computed(() => {
    return [
      {
        title: '💡 最新技术栈',
        details: '基于Vue3、Vant4、Vite、TypeScript、windiCss等最新技术栈开发',
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
        details: '满足大部分图表展示，只需要写你的 options',
      },
      {
        title: '🥳 完善的登录系统、路由、Axios配置',
        details: '所有架构已搭建完毕，你可以直接开发你的业务需求',
      },
    ];
  });
</script>

<style scoped lang="less"></style>
