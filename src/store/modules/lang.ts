import { defineStore } from 'pinia'
import { LANG_SETTING } from '../mutation-types'
import { createStorage } from '@/utils/Storage'
import { store } from '@/store'
import { type LocaleType, localeMap } from '@/locales/config'

interface LocaleState {
  lang: LocaleType
}

const Storage = createStorage({ storage: localStorage })

const locaLang = Storage.get(LANG_SETTING)
const browserLanguage = navigator.language || (navigator as any).userLanguage
const lan = locaLang || (/zh.*/i.test(browserLanguage) ? localeMap.zh_CN : localeMap.en_US)
if (!locaLang) {
  Storage.set(LANG_SETTING, lan)
}

export const useLangStore = defineStore({
  id: 'app-lang',
  state: (): LocaleState => ({
    lang: Storage.get(LANG_SETTING, localeMap.zh_CN),
  }),
  getters: {
    getLanguage(): LocaleType {
      return this.lang ?? localeMap.zh_CN
    },
  },
  actions: {
    // 设置语言
    setLanguage(data: LocaleType): void {
      this.lang = data
      Storage.set(LANG_SETTING, data)
    },
  },
})

// Need to be used outside the setup
export function useLangStoreWidthOut() {
  return useLangStore(store)
}
