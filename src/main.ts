import 'virtual:uno.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
import '@unocss/reset/tailwind-compat.css'

// Register icon sprite
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from '@/store'

async function bootstrap() {
  const app = createApp(App)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  setupRouter(app)
  await router.isReady()
  // 路由准备就绪后挂载APP实例
  app.mount('#app', true)
}

void bootstrap()
