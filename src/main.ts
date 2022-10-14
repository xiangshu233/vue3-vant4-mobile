import 'virtual:windi.css';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
// Register icon sprite
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import router, { setupRouter } from './router';
import { updateDarkSign } from './theme';

async function bootstrap() {
  const app = createApp(App);
  // 挂载状态管理
  setupStore(app);
  // 挂载路由
  setupRouter(app);
  await router.isReady();
  // 路由准备就绪后挂载APP实例
  app.mount('#app', true);

  // 根节点挂载 dark 标识
  const appDesignSetting = window.localStorage.getItem('DESIGN-SETTING');
  const darkMode = appDesignSetting && JSON.parse(appDesignSetting).darkMode;
  updateDarkSign(darkMode);
}

void bootstrap();
