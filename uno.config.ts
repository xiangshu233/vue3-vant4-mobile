import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    // 此预设尝试提供流行的实用程序优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等
    presetUno(),

    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    // https://unocss.dev/presets/rem-to-px
    presetRemToPx({
      // default
      baseFontSize: 16,
    }),

    // 图标预设: https://unocss.dev/presets/icons
    presetIcons({
      // cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),

    // 属性模式(在 class 属性过多的情况下优先使用属性模式，否则将会变得难以维护)
    // https://unocss.dev/presets/attributify#attributify-mode
    presetAttributify(),

    // https://unocss.dev/presets/typography#usage
    presetTypography(),

    // 网络字体预设：https://unocss.dev/presets/web-fonts
    presetWebFonts({
      // 默认字体提供商 https://unocss.dev/presets/web-fonts#providers
      provider: 'google',
      // https://unocss.dev/presets/web-fonts#example
      fonts: {
        mono: ['Fira Code'],
      },
    }),
  ],
  transformers: [
    // 启用 Windi CSS for UnoCSS 的变体组功能(就是简写，具体看链接): https://unocss.dev/transformers/variant-group#usage
    transformerVariantGroup(),
    // 在样式类里你也可以写原子化 css 具体看链接: https://unocss.dev/transformers/directives#usage
    // Unknown at rule @apply: https://github.com/unocss/unocss/issues/2401
    transformerDirectives(),
  ],

  // 一些实用的自定义组合
  shortcuts: {
    'm-0-auto': 'm-0 ma', // margin: 0 auto
    'wh-full': 'w-full h-full', // width: 100%, height: 100%
    'flex-center': 'flex justify-center items-center', // flex布局居中
    'flex-x-center': 'flex justify-center', // flex布局：主轴居中
    'flex-y-center': 'flex items-center', // flex布局：交叉轴居中
    'text-overflow': 'overflow-hidden whitespace-nowrap text-ellipsis', // 文本溢出显示省略号
    'text-break': 'whitespace-normal break-all break-words', // 文本溢出换行
  },

  // 由于 UnoCSS 在构建时工作，这意味着只会生成静态呈现的 icon 并将其发送到你的组件中
  // 通过模板字符串 :class="menu.meta?.icon" 来动态生成 CSS 类名。
  // 这个类名是在运行时计算的，UnoCSS 在构建时无法知道 menu.meta?.icon 的具体值，
  // 因此无法生成对应的 CSS。为了解决这个问题，你可以使用 UnoCSS 的 safelist 选项来指定一些始终需要生成的 CSS 类。
  // https://unocss.dev/guide/advanced#safelist
  safelist: [
    'i-simple-icons:atlassian',
    'i-simple-icons:soundcharts',
    'i-simple-icons:docsify',
    'i-material-symbols:award-star',
  ],
})
