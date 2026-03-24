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

## Stargazers over time

[![Stargazers over time](https://starchart.cc/xiangshu233/vue3-vant4-mobile.svg?variant=adaptive)](https://starchart.cc/xiangshu233/vue3-vant4-mobile)

## 介绍

👋👋👋 Vue3 Vant4 Mobile 使用了最新的 `Vue3.5`、`Vite8`、`Vant4`、`Pinia`、`TypeScript`、`UnoCSS` 等主流技术开发，集成 `Dark Mode`（暗黑）模式和系统主题色，并且持久化保存，集成 `Mock` 数据，顺便写了登录/注册/找回密码 页面（包括逻辑），只需替换你的 API 即可，另外页面均可以 `<keep-alive>`，随便写了个包含 `NavBar`、`TabBar` 的 Layout，集成了 `Axios`、`useECharts`、`IconSvg`。

项目使用了 [antfu](https://github.com/antfu) 大佬的 [antfu/eslint-config](https://github.com/antfu/eslint-config) 作为代码规范检查工具，摆脱繁琐无聊的 Eslint 配置，配合 `cz-git`、 `lint-staged`、`simple-git-hooks`可对暂存区代码提交校验，代码风格不合格可打断提交，保证多人协作开发时上游 Git 库的干净。

现在你可以在此之上直接开发你的业务代码！希望你能喜欢！

## 截图预览

<table>
  <tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2022/10/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221022091917.png" width="400" alt="登录页面" /></td>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172041924.png" width="400" alt="主控台页(首页）" /></td>
  </tr>
  <tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172042123.png" width="400" alt="消息页（图标页）" /></td>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172042858.png" width="400" alt="我的（我的信息页面）" /></td>
  </tr>
</table>

<details>
<summary>展开预览暗黑模式下的界面截图</summary>

<table>
  <tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172036432.png" width="400" alt="登录页面（暗黑模式）" /></td>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172038413.png" width="400" alt="主控台页（暗黑模式）" /></td>
  </tr>
  <tr>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172039913.png" width="400" alt="我的页面（暗黑模式）" /></td>
    <td><img src="https://fastly.jsdelivr.net/gh/xiangshu233/blogAssets/2023/12/202403172040019.png" width="400" alt="主题设置页面（暗黑模式）" /></td>
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
- [Iconify](https://icones.js.org/) - 本项目推荐图标库，当然你也可以使用 `IconSvg`
- [Postcss-Mobile-Forever](https://github.com/wswmsword/postcss-mobile-forever) - 了解手机端 `px` 转 `viewport` 插件的作用
- [Lodash-es](https://www.lodashjs.com/) - `JS`高性能工具库
- [UnoCSS](https://unocss.dev/) - 原子化 `CSS`，熟悉 `UnoCSS` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - 了解 `Mockjs` 基本语法
- [ES6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## 关于 Icon 的使用

项目使用 `unocss` 的 `icon` [预设](https://unocss.dev/presets/icons) 作为系统 Icon

请遵循以下约定使用图标

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

```html
<!-- A basic anchor icon from Phosphor icons -->
<div class="i-ph-anchor-simple-thin" />
<!-- An orange alarm from Material Design Icons -->
<div class="i:mdi:alarm" />
```

点击这里获取所有[可用的图标](https://icones.js.org/)，找到想要的图标后点击复制 icon name 到 class 里即可

> [!WARNING]
> 记得加 `i-xxx` 前缀，从 icones 复制的 icon name 是没有 `i-` 前缀的
>
> 更多详细使用请看 https://unocss.dev/presets/icons#icons-preset

## 环境准备

本地环境需要安装 [Pnpm](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 推荐使用 [pnpm>=8.15.4](https://www.pnpm.cn/)，否则依赖可能安装不上，打包报错等问题。
- [Node.js](http://nodejs.org/) 版本要求`20.x`以上，这里推荐 `^20.9.0 || >=21.7.1`

## VS Code 配套插件

如果你使用的 IDE 是 [VS Code](https://code.visualstudio.com/)（推荐）的话，可以安装以下工具来提高开发效率及代码格式化

- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 提示插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 开发必备
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - 用于 TypeScript 服务器的 Vue 插件
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - `.env` 文件 高亮
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - 更好的错误定位
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 不同 IDE 维护一致的编码样式
- [File Nesting Updater](https://marketplace.visualstudio.com/items?itemName=antfu.file-nesting) - 使用 VS Code 的文件嵌套功能使文件树更干净的配置
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=antfu.file-nesting) - 使 VSCode 中的 TypeScript 错误更漂亮、更易于理解
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - 在树视图中显示 TODO、FIXME 等注释标签
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) - 突出显示尾随空格并立即将其删除

## VS Code Eslint 支持（自动修复）

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

将以下设置添加到您的 `.vscode/settings.json` 中：

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml"
  ]
}
```

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

## Git 提交规范

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

> [!TIP]
> 关于前端工程化 **配置构建代码检查工作流** 不了解的可以看下面这两篇文章了解下
>
> [前端工程化配置(上) 构建代码检查工作流](https://xiangshu233.cn/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%85%8D%E7%BD%AE%EF%BC%88%E4%B8%8A%EF%BC%89%20%E6%9E%84%E5%BB%BA%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5%E5%B7%A5%E4%BD%9C%E6%B5%81/)
>
> [前端工程化配置(下) 规范仓库提交记录 commitlint + commitizen + cz-git + 配置](https://xiangshu233.cn/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%85%8D%E7%BD%AE%EF%BC%88%E4%B8%8B%EF%BC%89%20%E8%A7%84%E8%8C%83%E4%BB%93%E5%BA%93%E6%8F%90%E4%BA%A4%E8%AE%B0%E5%BD%95/)

> [!IMPORTANT]
> 首次 clone 代码 `pnpm install` 后 需要执行以下命令来更新`git hooks`
>
> ```shell
> # Update ./git/hooks
> npx simple-git-hooks
> ```

本项目提交规范校验使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 作为 git hooks，使用 [cz-git](https://github.com/Zhengqbbb/cz-git) 作为 commitlint commitizen。

> [!IMPORTANT]
>
> ```shell
> # Global install commitizen CLI
> npm install -g commitizen
> ```
>
> 先全局安装 `commitizen` ，之后更改的代码若想要使用 Commitlint 规范提交需要将文件（放入暂存区） `git add` 后，控制台执行 `cz` 命令开启 cz-git CLI
> 。若想直接执行 `git commit` 需要满足上面提交规范才能通过校验，否则将会被 Git Hook 打断提交

simple-git-hooks 和 husky 都是用于管理 Git 钩子（Git hooks）的工具，但它们有一些区别：

> simple-git-hooks:
>
> - 简介: simple-git-hooks 是一个轻量级的工具，用于管理和运行Git钩子。
> - 特点:
>   - 提供了简单的配置方式来定义和运行 Gi 钩子。
>   - 适合于小型项目或对 Git 钩子需求不复杂的项目。
>   - 相对较少的功能和配置选项。
>   - 使用场景: 适用于简单的项目或对 Git 钩子管理需求不高的情况。
>
> husky:
>
> - 简介: husky 是一个功能强大的工具，用于管理 Git 钩子，并且在项目中被广泛使用。
> - 特点:
>   - 提供了丰富的配置选项和灵活性，可以精细地控制 Git 钩子的行为。
>   - 支持在不同的 Git 钩子事件上运行自定义脚本。
>   - 可以与其他工具（如linters、测试框架等）集成，实现更复杂的工作流。
>   - 使用场景: 适用于需要灵活配置和管理 Git 钩子的项目，尤其是大型或复杂的项目。

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
