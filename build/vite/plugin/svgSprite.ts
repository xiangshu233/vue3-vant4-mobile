/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export function configSvgIconsPlugin(isBuild: boolean) {
  // 指定需要缓存的图标文件夹
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 是否压缩
    svgoOptions: isBuild,
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  })
  return svgIconsPlugin
}
