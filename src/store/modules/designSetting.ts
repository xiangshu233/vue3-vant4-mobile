import { defineStore } from 'pinia';
import { store } from '@/store';
import designSetting from '@/settings/designSetting';

const { darkMode, appTheme, appThemeList } = designSetting;

interface DesignSettingState {
  // 系统主题
  darkMode: 'light' | 'dark';
  // 系统风格
  appTheme: string;
  // 系统内置风格
  appThemeList: string[];
}

export const useDesignSettingStore = defineStore({
  id: 'app-design-setting',
  state: (): DesignSettingState => ({
    darkMode,
    appTheme,
    appThemeList,
  }),
  getters: {
    getDarkMode(): 'light' | 'dark' {
      return this.darkMode;
    },
    getAppTheme(): string {
      return this.appTheme;
    },
    getAppThemeList(): string[] {
      return this.appThemeList;
    },
  },
  actions: {
    setDarkMode(mode: 'light' | 'dark'): void {
      this.darkMode = mode;
    },
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'DESIGN-SETTING',
        storage: localStorage,
      },
    ],
  },
});

// Need to be used outside the setup
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}
