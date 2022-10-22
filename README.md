<div align="center">
  <a href="https://github.com/xiangshu233/vue3-vant4-mobile">
    <img alt="Vue3Vant4MobileLogo" width="200" height="200" src="https://raw.githubusercontent.com/xiangshu233/blogAssets/main/2022/10/logo.svg">
  </a>
</div><br><br>

<p align="center">
  <img src="https://img.shields.io/github/license/xiangshu233/vue3-vant4-mobile" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/xiangshu233/vue3-vant4-mobile" alt="version" />
  <img src="https://img.shields.io/github/repo-size/xiangshu233/vue3-vant4-mobile" alt="repo-size" />
  <img src="https://img.shields.io/github/languages/top/xiangshu233/vue3-vant4-mobile" alt="languages" />
  <img src="https://img.shields.io/github/issues-closed/xiangshu233/vue3-vant4-mobile" alt="issues" />
</p>


<h1 align="center">vue3-vant4-mobile</h1>


## 介绍
👋👋👋 Vue3 Vant4 Mobile 使用了最新的`Vue3.2`、`Vite3`、`Vant4`、`Pinia2`、`Typescript`、`Windicss` 等主流技术开发，集成 `Dark Mode`(暗黑)模式和系统主题色，且持久化保存，集成 `Mock` 数据，顺便写了个 登录/注册/找回密码 页面（包括逻辑），你只需要替换你的API即可，简单写了个包含 `NavBar`、`TabBar`的 `Layout`，顺便全页面均可以 `keep-alive`。最基本的`Axios`、`useEcharts`、`IconSvg`、也已内置，还有代码规范检查工具`Eslint`、`Prettier`、`Stylelint`。现在，你可以在此之上直接开发你的业务代码！希望你能喜欢。🥳🥳🥳

## 截图预览
<p align="center">
  <span>
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022091917.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092004.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092015.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092022.png" width="400" />
  </span>
</p>


<p align="center">
  <span>
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092052.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092140.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092224.png" width="400" />
    <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092358.png" width="400" />
  </span>
</p>

## 基础知识

既然你搜了 `vue3`、`vant4` 此类关键词，则默认你会用这些配套技术栈。

- [Vite](https://cn.vitejs.dev/) - 熟悉 `Vite` 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 `Vue3` 基础语法
- [Vant4](https://youzan.github.io/vant/v4/#/zh-CN) - `vant4` 组件基本使用
- [Pinia](https://pinia.vuejs.org/) -  比 `Vuex` 简单
- [TypeScript](https://www.typescriptlang.org/) -  熟悉 `TypeScript` 基本语法
- [Vue-Router-Next](https://router.vuejs.org/) - 熟悉 `Vue-Router`基本使用
- [Echarts5](https://echarts.apache.org/handbook/zh/get-started/) - 熟悉 `Echarts` 基本使用
- [Xicons](https://www.xicons.org/#/) - 本项目推荐图标库，当然你也可以使用 `IconSVg`
- [Postcss-px-to-viewport-8-plugin](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin) - 了解手机端 `px` 转 `viewport` 插件的作用
- [Lodash-es](https://www.lodashjs.com/) - `Js`高性能工具库
- [WindiCss](https://cn.windicss.org/guide/) - 原子化 `Css`，熟悉 `Windicss` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) -  了解 `mockjs` 基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 `es6` 基本语法

##  环境准备

本地环境需要安装 [pnpm7.x](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 必须使用[pnpm7.x](https://www.pnpm.cn/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `15.x` 及以上。

## Vscode 配套插件

如果你使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - 更好的错误定位

## 使用

- 获取项目代码

```bash
git clone https://github.com/xiangshu233/vue3-vant4-mobile.git
```

- 安装依赖

```bash
cd vue3-vant4-mobile

pnpm install
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE | [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| not support                                                  | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## 维护者

[@xiangshu233](https://github.com/xiangshu233)


## 小声比比

这个Logo是我在网上随便找的，不知道是谁的Logo（🧎‍♂️🧎‍♂️🧎‍♂️），如果有侵权之类的（萌新不懂），请[邮箱](mailto:xiangshu233@outlook.com)通知我一下，秒删。另外本项目代码大量借鉴（复制）[naive-ui-admin](https://github.com/jekip/naive-ui-admin)、[vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) 代码/逻辑，我太菜了。😭😭😭

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
