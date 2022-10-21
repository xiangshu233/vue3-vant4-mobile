<template>
  <vanConfigProvider :theme="getDarkMode" :theme-vars="getThemeVars">
    <routerView v-slot="{ Component }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </routerView>
  </vanConfigProvider>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import { darken, lighten } from '@/utils/index';
  import { useRouteStore } from '@/store/modules/route';

  const routeStore = useRouteStore();
  const designStore = useDesignSettingStore();

  // 需要缓存的路由组件
  const keepAliveComponents = computed(() => routeStore.keepAliveComponents);

  const getDarkMode = computed(() => designStore.getDarkMode);

  const getThemeVars = computed(() => {
    const appTheme = designStore.appTheme;
    const darkenStr = darken(appTheme, 25);
    const lightenStr = lighten(appTheme, 10);

    return {
      actionSheetCancelTextColor: appTheme,
      buttonPrimaryBackground: appTheme,
      buttonPrimaryBorderColor: appTheme,
      radioCheckedIconColor: appTheme,
      sliderActiveBackground: appTheme,
      cascaderActiveColor: appTheme,
      checkboxCheckedIconColor: appTheme,
      numberKeyboardButtonBackground: appTheme,
      pickerLoadingIconColor: appTheme,
      calendarRangeEdgeBackground: appTheme,
      calendarRangeMiddleColor: appTheme,
      calendarSelectedDayBackground: appTheme,
      stepperButtonRoundThemeColor: appTheme,
      switchOnBackground: appTheme,
      dialogConfirmButtonTextColor: appTheme,
      dropdownMenuOptionActiveColor: appTheme,
      dropdownMenuTitleActiveTextColor: appTheme,
      notifyPrimaryBackground: appTheme,
      circleColor: appTheme,
      noticeBarBackground: lightenStr,
      noticeBarTextColor: darkenStr,
      progressColor: appTheme,
      progressPivotBackground: appTheme,
      stepActiveColor: appTheme,
      stepFinishLineColor: appTheme,
      swipeIndicatorActiveBackground: appTheme,
      tagPrimaryColor: appTheme,
      navBarIconColor: appTheme,
      navBarTextColor: appTheme,
      paginationItemDefaultColor: appTheme,
      sidebarSelectedBorderColor: appTheme,
      tabsDefaultColor: appTheme,
      tabsBottomBarColor: appTheme,
      tabbarItemActiveColor: appTheme,
      treeSelectItemActiveColor: appTheme,
    };
  });
</script>

<style lang="less">
  @import './styles/index.less';
</style>
