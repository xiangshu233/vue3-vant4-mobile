<div align="center">
  <a href="https://github.com/xiangshu233/vue3-vant4-mobile">
    <img alt="Vue3Vant4MobileLogo" width="200" height="200" src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/07/logo.svg">

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

👋👋👋 Vue3 Vant4 Mobile 使用了最新的 `Vue3.2`、`Vite3`、`Vant4`、`Pinia2`、`TypeScript`、`WindiCSS` 等主流技术开发，集成 `Dark Mode`（暗黑）模式和系统主题色，并且持久化保存，集成 `Mock` 数据，顺便写了个 登录/注册/找回密码 页面（包括逻辑），你只需要替换你的 API 即可，顺便写了个包含 `NavBar`、`TabBar` 的 Layout，顺便集成了 `Axios`、`useECharts`、`IconSvg`，顺便集成了代码规范检查工具 `Eslint`、`Prettier`、`Stylelint`。顺便全页面均可以 `<keep-alive>`，顺便......好吧没有了。现在，你可以在此之上直接开发你的业务代码！希望你能喜欢。🥳🥳🥳

## 截图预览

<table>
	<tr>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022091917.png" width="400" alt="登录页面" /></td>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092004.png" width="400" alt="主控台页(首页）" /></td>
	</tr>
	<tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092015.png" width="400" alt="消息页（图标页）" /></td>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092022.png" width="400" alt="我的（我的信息页面）" /></td>
	</tr>
</table>


<details>
<summary>展开预览暗黑模式下的界面截图。</summary>

<table>
	<tr>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092052.png" width="400" alt="登录页面（暗黑模式）" /></td>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092140.png" width="400" alt="主控台页（暗黑模式）" /></td>
	</tr>
	<tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022092224.png" width="400" alt="我的页面（暗黑模式）" /></td>
		<td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221023152559.png" width="400" alt="主题设置页面（暗黑模式）" /></td>
	</tr>
</table>

</details>

## 线上预览

预览链接：*[https://vvmobile.xiangshu233.cn/](https://vvmobile.xiangshu233.cn/)*

账号：admin，密码：123456

账号：test，密码：123456

或者扫描以下二维码进入手机演示

<p align="center">
  <img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/07/vue3-vant4-mobile-QR-code.png" width="200" />
</p>

## 基础知识

- [Vite](https://cn.vitejs.dev/) - 熟悉 `Vite` 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 `Vue3` 基础语法
- [Vant4](https://youzan.github.io/vant/v4/#/zh-CN) - 掌握 `vant4` 组件基本使用
- [Pinia](https://pinia.vuejs.org/) - 熟悉 `Pinia` 特性
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Vue-Router-Next](https://router.vuejs.org/) - 熟悉 `Vue-Router`基本使用
- [ECharts5](https://echarts.apache.org/handbook/zh/get-started/) - 熟悉 `Echarts` 基本使用
- [xicons](https://www.xicons.org/#/) - 本项目推荐图标库，当然你也可以使用 `IconSVg`
- [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) - 了解手机端 `px` 转 `viewport` 插件的作用
- [Lodash-es](https://www.lodashjs.com/) - `JS`高性能工具库
- [WindiCSS](https://cn.windicss.org/guide/) - 原子化 `CSS`，熟悉 `WindiCSS` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - 了解 `Mockjs` 基本语法
- [ES6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## 环境准备

本地环境需要安装 [pnpm7.x](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 必须使用[pnpm7.x](https://www.pnpm.cn/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `15.x` 及以上。

## VS Code 配套插件

如果你使用的 IDE 是 [VS Code](https://code.visualstudio.com/)（推荐）的话，可以安装以下工具来提高开发效率及代码格式化

- [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - WindiCSS 提示插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - CSS 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - `.env` 文件 高亮
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - 更好的错误定位

## 使用

```bash
# 获取项目代码
git clone https://github.com/xiangshu233/vue3-vant4-mobile.git

# 安装依赖
cd vue3-vant4-mobile
pnpm install

# 运行
pnpm dev

# 打包
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
| --- | --- | --- | --- | --- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 维护者

[@xiangshu233](https://github.com/xiangshu233)

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
