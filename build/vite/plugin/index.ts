import type { PluginOption } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'
import { configSvgIconsPlugin } from './svgSprite'

/**
 * 配置 vite 插件
 * @param viteEnv vite 环境变量配置文件键值队 object
 * @param isBuild 是否是 build 环境 true/false
 * @returns vitePlugins[]
 */
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, prodMock: boolean) {
  // VITE_BUILD_COMPRESS 是否启用 gzip 压缩或 brotli 压缩
  // 可选: gzip | brotli | none，
  // 如果你需要多种形式，你可以用','来分隔

  // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE 打包使用压缩时是否删除原始文件，默认为 false
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // 按需引入VantUi且自动创建组件声明
    Components({
      dts: true,
      resolvers: [VantResolver()],
      types: [],
    }),
    // UnoCSS
    UnoCSS(),

    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts',
    }),
  ]

  // 加载 html 插件 vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild, prodMock))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  if (isBuild) {
    // rollup-plugin-gzip
    // 加载 gzip 打包
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    )
  }

  return vitePlugins
}
