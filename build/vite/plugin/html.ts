/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import pkg from '../../../package.json'
import { GLOB_CONFIG_FILE_NAME } from '../../constant'

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env

  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`

  const getAppConfigSrc = () => {
    return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}-${new Date().getTime()}`
  }

  // 当执行 yarn build 构建项目之后，会自动生成 _app.config.js 文件并插入 index.html
  // _app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址
  // 不用重新进行打包，可在打包后修改 /dist/_app.config.js 内的变量，刷新即可更新代码内的局部变量

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        title: VITE_GLOB_APP_TITLE,
      },

      // Embed the generated app.config.js file 需要注入的标签列表
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
          ]
        : [],
    },
  })
  return htmlPlugin
}
