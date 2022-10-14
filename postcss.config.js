/**
 * 由于在vite中用 module.exports = (param) => {} 这种方式导出postcss配置时，param中没有文件相关信息，
 * 同时postcss-px-to-viewport也没有提供类似postcss-pxtorem中 rootValue({ file }) {} 的方法，无法根据文件路径动态设置viewportWidth
 * 所以只能通过多次px2viewport()处理不同文件的hack方式来设置viewportWidth
 *
 * postcss-px-to-viewport v1.1.1不支持include配置项，v1.2.0开始加入include，但是并没有发布到npm仓库
 * 如在v1.1.1中使用include，无效果，并且执行多次导致转换混乱
 *
 * postcss-px-to-viewport 不支持 postcss 8.x，而vite内置postcss 8.x，所以使用postcss-px-to-viewport会抛出警告
 * 改用postcss-px-to-viewport-8-plugin替代
 */

const autoprefixer = require('autoprefixer');
const px2viewport = require('postcss-px-to-viewport-8-plugin');

const basePx2viewport = {
  unitToConvert: 'px', // 需要转换的单位，默认为 px
  // viewportWidth: 750, // 设计稿的视口宽度
  unitPrecision: 3, // 单位转换后保留的精度（很多时候无法整除）
  propList: [
    '*',
    // '!font-size'
  ], // 能转化为vw的属性列表，!font-size表示font-size后面的单位不会被转换
  viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
  fontViewportUnit: 'vw', // 字体使用的视口单位
  // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
  // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  // 下面配置表示类名中含有'keep-px'以及'.ignore'类都不会被转换
  selectorBlackList: ['.ignore', 'keep-px'],
  minPixelValue: 1, // 设置最小的转换数值，这里小于或等于 1px 不转换为视口单位
  mediaQuery: false, // 媒体查询里的单位是否需要转换单位
  // exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
  // include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
};

module.exports = {
  plugins: [
    autoprefixer(),
    // 只将vant转为350设计稿的viewport
    px2viewport({
      ...basePx2viewport,
      viewportWidth: 375,
      exclude: [/^(?!.*node_modules\/vant)/],
      // include: [/node_modules\/vant/],
    }),
    // 除了vant都转为750设计稿的viewport
    px2viewport({
      ...basePx2viewport,
      viewportWidth: 750,
      exclude: [/node_modules\/vant/],
    }),
  ],
};
