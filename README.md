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

## 重要提醒

⚠️⚠️⚠️ feature 分支正在升级相关依赖，内容尚不稳定，建议使用 main 分支

## 介绍

👋👋👋 Vue3 Vant4 Mobile 使用了最新的 `Vue3.2`、`Vite3`、`Vant4`、`Pinia2`、`TypeScript`、`UnoCSS` 等主流技术开发，集成 `Dark Mode`（暗黑）模式和系统主题色，并且持久化保存，集成 `Mock` 数据，顺便写了个 登录/注册/找回密码 页面（包括逻辑），你只需要替换你的 API 即可，顺便写了个包含 `NavBar`、`TabBar` 的 Layout，顺便集成了 `Axios`、`useECharts`、`IconSvg`，顺便集成了代码规范检查工具 `Eslint`、`Prettier`、`Stylelint`。顺便全页面均可以 `<keep-alive>`，顺便......好吧没有了。现在，你可以在此之上直接开发你的业务代码！希望你能喜欢。🥳🥳🥳

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

预览链接：_[https://vvmobile.xiangshu233.cn/](https://vvmobile.xiangshu233.cn/)_

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
- [UnoCSS](https://unocss.dev/) - 原子化 `CSS`，熟悉 `UnoCSS` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - 了解 `Mockjs` 基本语法
- [ES6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## 环境准备

本地环境需要安装 [pnpm7.x](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 必须使用[pnpm7.x](https://www.pnpm.cn/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `15.x` 及以上。

## VS Code 配套插件

如果你使用的 IDE 是 [VS Code](https://code.visualstudio.com/)（推荐）的话，可以安装以下工具来提高开发效率及代码格式化

- [UnoCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 提示插件
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

### 提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

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

### 提交校验

代码首次拉下来 `pnpm install` 后 需要执行以下命令来更新 `git hooks`

```shell
# Update ./git/hooks
npx simple-git-hooks
```

本项目提交规范校验使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 作为 git hooks，使用 [cz-git](https://github.com/Zhengqbbb/cz-git) 作为 commitlint commitizen。

代码要想使用 commitlint 规范提交需要在更改的文件 `git add` 后，控制台执行 `cz` 命令开启 cz-git CLI

若想直接执行 `git commit` 需要满足上面提交规范才能通过校验，否则无法提交

simple-git-hooks 和 husky 都是用于管理 Git 钩子（Git hooks）的工具，但它们有一些区别：

1. simple-git-hooks:

- 简介: simple-git-hooks 是一个轻量级的工具，用于管理和运行Git钩子。
- 特点:
  - 提供了简单的配置方式来定义和运行 Gi 钩子。
  - 适合于小型项目或对 Git 钩子需求不复杂的项目。
  - 相对较少的功能和配置选项。
  - 使用场景: 适用于简单的项目或对 Git 钩子管理需求不高的情况。

2. husky:

- 简介: husky 是一个功能强大的工具，用于管理 Git 钩子，并且在项目中被广泛使用。
- 特点:
  - 提供了丰富的配置选项和灵活性，可以精细地控制 Git 钩子的行为。
  - 支持在不同的 Git 钩子事件上运行自定义脚本。
  - 可以与其他工具（如linters、测试框架等）集成，实现更复杂的工作流。
  - 使用场景: 适用于需要灵活配置和管理 Git 钩子的项目，尤其是大型或复杂的项目。

```json
// package.json
{
  "simple-git-hooks": {
    // 对暂存区执行 eslint --fix
    "pre-commit": "pnpm lint-staged",
    // 对提交信息进行校验
    "commit-msg": "npx --no-install commitlint --edit $1"
  },

  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE | [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| not support                                                                                                                                           | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                                    | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

## 维护者

[@xiangshu233](https://github.com/xiangshu233)

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
