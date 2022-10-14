<template>
  <div>
    <NavBar />
    <van-divider>主题</van-divider>
    <van-cell center title="暗黑模式">
      <template #right-icon>
        <van-switch v-model="getDarkMode" />
      </template>
    </van-cell>

    <van-divider>系统主题色</van-divider>
    <div flex="~" justify="center">
      <div grid="~ cols-8 gap-2">
        <span
          h="70px"
          w="70px"
          border="2 rounded-md border-white"
          flex="~"
          align="items-center"
          justify="center"
          v-for="(item, index) in designStore.appThemeList"
          :key="index"
          :style="{ 'background-color': item }"
          @click="togTheme(item)"
        >
          <Icon v-if="item === designStore.appTheme">
            <CheckOutlined h="!60px" w="!60px" text="white" />
          </Icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { Icon } from '@vicons/utils';
  import { CheckOutlined } from '@vicons/antd';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import NavBar from './components/NavBar.vue';

  import { updateDarkSign } from '@/theme';

  const designStore = useDesignSettingStore();

  const getDarkMode = computed({
    get: () => designStore.getDarkMode === 'dark',
    set: (value) => {
      const darkMode = value ? 'dark' : 'light';
      updateDarkSign(darkMode);
      designStore.setDarkMode(darkMode);
    },
  });

  function togTheme(color: string) {
    designStore.appTheme = color;
  }
</script>

<style scoped lang="less"></style>
