export type LocaleType = keyof typeof localeMap

export const localeMap = {
  zh_CN: 'zh_CN',
  en_US: 'en_US',
} as const

export const localeList = [
  {
    value: localeMap.en_US,
    text: 'English',
    icon: '🇺🇸',
    title: 'Language',
  },
  {
    value: localeMap.zh_CN,
    text: '简体中文',
    icon: '🇨🇳',
    title: '语言',
  },
]
