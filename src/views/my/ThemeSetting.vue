<template>
  <div>
    <NavBar />
    <van-divider>主题模式</van-divider>
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

    <van-divider>页面切换动画</van-divider>
    <van-cell center title="开启动画">
      <template #right-icon>
        <van-switch v-model="designStore.isPageAnimate" />
      </template>
    </van-cell>

    <van-field
      label="动画类型"
      readonly
      :disabled="!designStore.isPageAnimate"
      is-link
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      v-model="animateState.text"
      @click="openAnimatePick"
    />
    <van-popup v-model:show="animateState.showPicker" position="bottom" round>
      <van-picker
        v-model="animateState.value"
        :columns="animateOptions"
        @confirm="handleSaveAnimateType"
        @cancel="animateState.showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import { Icon } from '@vicons/utils';
  import { updateDarkSign } from '@/theme';
  import { CheckOutlined } from '@vicons/antd';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import { animates as animateOptions } from '@/settings/animateSetting';
  import NavBar from './components/NavBar.vue';

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

  const findCurrentAnimateType = animateOptions.find(
    (item) => item.value === designStore.pageAnimateType
  );

  const animateState = reactive({
    text: findCurrentAnimateType?.text,
    value: [designStore.pageAnimateType],
    showPicker: false,
  });

  const openAnimatePick = () => {
    if (designStore.isPageAnimate) animateState.showPicker = true;
  };

  const handleSaveAnimateType = ({ selectedOptions }) => {
    animateState.text = selectedOptions[0].text;
    designStore.setPageAnimateType(selectedOptions[0].value);
    animateState.showPicker = false;
  };
</script>

<style scoped lang="less"></style>
