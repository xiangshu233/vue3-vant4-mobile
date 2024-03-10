// app theme preset color

export interface DesignSettingState {
  // 系统主题
  darkMode: 'light' | 'dark'
  // 系统风格
  appTheme: string
  // 系统内置风格
  appThemeList: string[]
  // 是否开启路由动画
  isPageAnimate: boolean
  // 路由动画类型
  pageAnimateType: string
}

export const appThemeList: string[] = [
  '#5d9dfe',
  '#2d8cf0',
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
  '#FF3D68',
  '#00C1D4',
  '#18a058',
  '#78DEC7',
  '#1768AC',
  '#FB9300',
  '#FC5404',
  '#8675ff',
]

const setting: DesignSettingState = {
  // 深色主题
  darkMode: 'dark',
  // 系统主题色
  appTheme: '#5d9dfe',
  // 系统内置主题色列表
  appThemeList,
  // 是否开启路由动画
  isPageAnimate: true,
  // 路由动画类型
  pageAnimateType: 'zoom-fade',
}

export default setting
