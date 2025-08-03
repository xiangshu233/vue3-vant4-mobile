/**
 * 处理移动端浏览器视口高度问题
 */

const supportsDvh = () => {
  const div = document.createElement('div')
  div.style.height = '100dvh'
  return div.style.height === '100dvh'
}

export const setupViewportHeight = () => {
  if (supportsDvh()) {
    return
  }

  updateViewportHeight()

  window.addEventListener('resize', updateViewportHeight)
  window.addEventListener('orientationchange', updateViewportHeight)
}

const updateViewportHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh-offset', `${(vh * 100) * 0.05}px`)
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}