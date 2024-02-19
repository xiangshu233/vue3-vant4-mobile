import { addClass, removeClass, hasClass } from '@/utils/domUtils';

/**
 * html 根标签上挂载 暗/亮 属性标识
 */
export function updateDarkSign(mode: 'light' | 'dark') {
  const htmlRoot = document.getElementById('htmlRoot');
  if (!htmlRoot) {
    return;
  }
  const hasDarkClass = hasClass(htmlRoot, 'dark');

  if (mode === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    if (!hasDarkClass) {
      addClass(htmlRoot, 'dark');
    }
  } else {
    htmlRoot.setAttribute('data-theme', 'light');
    if (hasDarkClass) {
      removeClass(htmlRoot, 'dark');
    }
  }
}
