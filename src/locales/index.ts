import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import { setHtmlPageLang, setLoadLocalePool } from './helper.js'
import { localeMap } from './config.js'
import { useLangStoreWidthOut } from '@/store/modules/lang.js'

async function createI18nOptions() {
  const localeStore = useLangStoreWidthOut()
  const locale = localeStore.getLanguage
  const defaultLocal = await import(`./package/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}

  setHtmlPageLang(locale)
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale)
  })

  return {
    locale,
    legacy: false,
    fallbackLocale: localeMap.zh_CN, // set fallback locale
    messages: {
      [locale]: message as { [key: string]: string },
    },
    globalInjection: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export const getI18n = (async () => createI18n(await createI18nOptions()))()

export const i18n: Awaited<typeof getI18n> = null as any

getI18n.then(res => (i18n = res))

export async function setupI18n(app: App) {
  await getI18n
  app.use(i18n)
}
