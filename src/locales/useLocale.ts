/**
 * Multi-language related operations
 */
import { computed, unref } from 'vue'
import { Locale as VantLocale } from 'vant'
import { loadLocalePool, setHtmlPageLang } from './helper'
import type { LocaleType } from './config'
import { i18n } from '.'

import { useLangStoreWidthOut } from '@/store/modules/lang'

interface LangModule {
  message: Recordable
  dateLocale: Recordable
  dateLocaleName: string
}

function setI18nLanguage(locale: LocaleType) {
  const localeStore = useLangStoreWidthOut()
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  }
  else {
    (i18n.global.locale as any).value = locale
  }
  localeStore.setLanguage(locale)
  setHtmlPageLang(locale)
}

export function useLocale() {
  const localeStore = useLangStoreWidthOut()
  const getLocale = computed(() => localeStore.getLanguage)

  const getAntdLocale = computed<any>((): any => {
    return i18n.global.getLocaleMessage(unref(getLocale)).antdLocale
  })

  // Switching the language will change the locale of useI18n
  // And submit to configuration modification
  async function changeLocale(locale: LocaleType) {
    const globalI18n = i18n.global
    const currentLocale = unref(globalI18n.locale)

    if (currentLocale === locale) {
      return locale
    }
    const langModule = ((await import(`./package/${locale}.ts`)) as any).default as LangModule
    if (!langModule) {
      return
    }
    const { message } = langModule

    if (loadLocalePool.includes(locale)) {
      VantLocale.use(locale, message.antdLocale)
      setI18nLanguage(locale)
      return locale
    }

    VantLocale.use(locale, message.antdLocale)
    globalI18n.setLocaleMessage(locale, message)
    loadLocalePool.push(locale)

    setI18nLanguage(locale)
    return locale
  }

  return {
    getLocale,
    changeLocale,
    getAntdLocale,
  }
}
