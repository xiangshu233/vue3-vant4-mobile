<template>
  <div class="h-screen flex flex-col items-center justify-center p-8">
    <!-- <van-cell center title="🌗 暗黑模式">
      <template #right-icon>
        <van-switch v-model="getDarkMode" size="18px" />
      </template>
    </van-cell> -->
    <div class="wel-box w-full flex flex-col justify-between">
      <div class="wel-top">
        <div class="logo enter-y">
          <SvgIcon :size="130" name="logo" />
        </div>
        <div
          class="text-darkBlue dark:text-garyWhite enter-y mb-4 mt-12 text-center text-2xl font-black"
        >
          欢迎来到 {{ title }}
        </div>
        <div class="enter-y mb-6 mt-4 w-full">
          <van-swipe class="h-30" :autoplay="3000" :indicator-color="designStore.appTheme">
            <van-swipe-item
              v-for="(text, index) in getSwipeText"
              :key="index"
              class="text-center text-gray-700 leading-relaxed dark:text-gray-400"
            >
              <p class="text-lg">
                {{ text.title }}
              </p>
              <p class="text-sm">
                {{ text.details }}
              </p>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="wel-bottom">
        <van-button
          class="enter-y !rounded-md"
          type="primary"
          block
          @click="router.push({ name: 'Login' })"
        >
          Let's Get Started
        </van-button>
        <a class="enter-y mt-6 text-sm">创建账户？</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import SvgIcon from '@/components/SvgIcon.vue'
import { useGlobSetting } from '@/hooks/setting'

// import { updateDarkSign } from '@/theme'

// const getDarkMode = computed({
//   get: () => designStore.getDarkMode === 'dark',
//   set: (value) => {
//     const darkMode = value ? 'dark' : 'light'
//     updateDarkSign(darkMode)
//     designStore.setDarkMode(darkMode)
//   },
// })

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()
const router = useRouter()

const { title } = globSetting

const getSwipeText = computed(() => {
  return [
    {
      title: '💡 最新技术栈',
      details: '基于Vue3、Vant4、Vite、TypeScript等最新技术栈开发',
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
  ]
})
</script>

<style scoped lang="less">
  .wel-box {
  min-height: 50vh;
  max-width: 45vh;
  min-width: 30vh;
  .wel-top {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .wel-bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
