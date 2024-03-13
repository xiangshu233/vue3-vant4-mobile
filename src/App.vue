<template>
  <vanConfigProvider :theme="getDarkMode" :theme-vars="getThemeVars()">
    <routerView v-slot="{ Component }">
      <div class="absolute bottom-0 top-0 w-full overflow-hidden">
        <transition :name="getTransitionName" mode="out-in" appear>
          <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </div>
    </routerView>
  </vanConfigProvider>
</template>

<script setup lang="ts">
import { darken, lighten } from '@/utils'
import { useRouteStore } from '@/store/modules/route'
import { useDesignSetting } from '@/hooks/setting/useDesignSetting'

const routeStore = useRouteStore()
const { getDarkMode, getAppTheme, getIsPageAnimate, getPageAnimateType } = useDesignSetting()

// 需要缓存的路由组件
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)

function getThemeVars() {
  const appTheme = unref(getAppTheme)
  const darkenStr = darken(appTheme, 25)
  const lightenStr = lighten(appTheme, 10)

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
  }
}

const getTransitionName = computed(() => {
  return unref(getIsPageAnimate) ? unref(getPageAnimateType) : undefined
})
</script>

<style lang="less">
  @import './styles/index.less';
</style>
