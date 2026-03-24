<template>
  <div class="floating-toolbar-wrap">
    <nav
      ref="toolbarRef"
      class="floating-toolbar"
      :class="{ dark: isDarkTheme }"
      :style="toolbarCssVars"
      aria-label="主导航"
    >
      <div class="ambient-glow" />
      <div class="film-grain" />

      <div
        ref="indicatorRef"
        class="active-indicator"
        :style="{
          transform: `translateX(${indicatorX}px)`,
          opacity: activeNavIndex >= 0 ? 1 : 0,
        }"
      >
        <div class="ring-glow" />
        <div class="ring-clip">
          <div class="ring-spin" />
        </div>
        <div class="inner-plate" />
      </div>

      <button
        v-for="(item, idx) in navItems"
        :key="item.path"
        :ref="(el) => setNavRef(el, idx)"
        type="button"
        class="nav-btn"
        :class="{
          'active': idx === activeNavIndex,
          'with-divider': idx < navItems.length - 1,
          'nav-bounce': navBounceIndex === idx,
        }"
        :aria-label="item.label"
        @click="handleNavClick(idx, item.path)"
      >
        <i :class="item.icon" />
      </button>

      <button
        v-if="props.showDarkModeToggle"
        type="button"
        class="nav-btn toggle-btn"
        :class="{ bounce: toggleBouncing }"
        aria-label="切换主题"
        @click="toggleTheme"
      >
        <span class="toggle-icon-wrap">
          <i class="i-ph:sun-dim sun-icon" :class="{ hidden: darkModel }" />
          <i class="i-ph:moon moon-icon" :class="{ show: darkModel }" />
        </span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useDark } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import { useDesignSettingStore } from '@/store/modules/designSetting'

interface NavItem {
  label: string
  path: string
  icon: string
}

interface Props {
  items?: NavItem[]
  showDarkModeToggle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    { label: 'Home', path: '/dashboard/index', icon: 'i-ph:house-line' },
    { label: 'Search', path: '/message/index', icon: 'i-ph:magnifying-glass' },
    { label: 'User', path: '/my/index', icon: 'i-ph:user-circle' },
  ],
  showDarkModeToggle: true,
})

const designStore = useDesignSettingStore()
const currentRoute = useRoute()
const router = useRouter()

const navItems = computed(() => props.items)

const activeNavIndex = computed(() => {
  const path = currentRoute.path
  const items = navItems.value
  if (items.length === 0) {
    return -1
  }
  const index = items.findIndex((item) => {
    const basePath = item.path.replace(/\/index$/, '')
    return path === item.path || path.startsWith(basePath)
  })
  return index >= 0 ? index : 0
})

const toolbarRef = ref<HTMLElement | null>(null)
const indicatorRef = ref<HTMLElement | null>(null)
const navRefs = ref<(HTMLElement | null)[]>([])
const indicatorX = ref(0)

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false,
})

const darkModel = computed({
  get: () => isDark.value || designStore.darkMode === 'dark',
  set: (value: boolean) => {
    isDark.value = value
    designStore.setDarkMode(value ? 'dark' : 'light')
  },
})
const isDarkTheme = computed(() => darkModel.value)
const toolbarColumns = computed(() => Math.max(1, navItems.value.length + (props.showDarkModeToggle ? 1 : 0)))
const toolbarCssVars = computed(() => ({
  '--accent-color': designStore.appTheme,
  '--accent-soft-color': `${designStore.appTheme}33`,
  'gridTemplateColumns': `repeat(${toolbarColumns.value}, 1fr)`,
}))

const toggleBouncing = ref(false)
const navBounceIndex = ref<number | null>(null)
let toggleTimer: number | null = null
let navBounceTimer: number | null = null
let resizeObserver: ResizeObserver | null = null

function setNavRef(el: Element | { $el?: Element } | null, index: number) {
  if (!el) {
    navRefs.value[index] = null
    return
  }
  const element = el instanceof HTMLElement
    ? el
    : ('$el' in el ? (el.$el as HTMLElement | undefined) : undefined)
  navRefs.value[index] = element ?? null
}

function updateIndicatorPosition() {
  const indicator = indicatorRef.value
  const target = navRefs.value[activeNavIndex.value]
  if (!indicator || !target) {
    return
  }
  const indicatorWidth = indicator.offsetWidth || 48
  indicatorX.value = target.offsetLeft + target.offsetWidth / 2 - indicatorWidth / 2
}

function scheduleIndicatorUpdate() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updateIndicatorPosition()
    })
  })
}

function bindResizeObserver() {
  if (typeof ResizeObserver === 'undefined') {
    return
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  resizeObserver = new ResizeObserver(() => {
    scheduleIndicatorUpdate()
  })
  if (toolbarRef.value) {
    resizeObserver.observe(toolbarRef.value)
  }
  if (indicatorRef.value) {
    resizeObserver.observe(indicatorRef.value)
  }
  for (const navEl of navRefs.value) {
    if (navEl) {
      resizeObserver.observe(navEl)
    }
  }
}

function goNav(path: string) {
  router.push(path)
}

function handleNavClick(index: number, path: string) {
  navBounceIndex.value = null
  if (navBounceTimer) {
    window.clearTimeout(navBounceTimer)
  }
  void nextTick(() => {
    navBounceIndex.value = index
    navBounceTimer = window.setTimeout(() => {
      navBounceIndex.value = null
    }, 420)
  })
  goNav(path)
}

function toggleTheme() {
  if (!props.showDarkModeToggle) {
    return
  }
  toggleBouncing.value = false
  if (toggleTimer) {
    window.clearTimeout(toggleTimer)
  }
  void nextTick(() => {
    toggleBouncing.value = true
    toggleTimer = window.setTimeout(() => {
      toggleBouncing.value = false
    }, 420)
  })
  darkModel.value = !darkModel.value
}

watch(
  () => currentRoute.path,
  async () => {
    await nextTick()
    bindResizeObserver()
    scheduleIndicatorUpdate()
  },
  { immediate: false },
)

watch(activeNavIndex, async () => {
  await nextTick()
  scheduleIndicatorUpdate()
})

onMounted(async () => {
  await nextTick()
  bindResizeObserver()
  scheduleIndicatorUpdate()
  window.addEventListener('resize', scheduleIndicatorUpdate)
  const storeDark = designStore.darkMode === 'dark'
  if (isDark.value !== storeDark) {
    isDark.value = storeDark
  }
})

onBeforeUnmount(() => {
  if (toggleTimer) {
    window.clearTimeout(toggleTimer)
  }
  if (navBounceTimer) {
    window.clearTimeout(navBounceTimer)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('resize', scheduleIndicatorUpdate as () => void)
})
</script>

<style scoped lang="less">
.floating-toolbar-wrap {
  pointer-events: none;
  position: fixed;
  z-index: 20;
  left: 0;
  right: 0;
  bottom: calc(14px + env(safe-area-inset-bottom));
  display: flex;
  justify-content: center;
}

.floating-toolbar {
  pointer-events: auto;
  position: relative;
  width: min(92vw, 340px);
  height: 62px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 6px;
  border-radius: 31px;
  background: rgba(16, 20, 30, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(140%);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.floating-toolbar.dark {
  background: rgba(16, 20, 30, 0.86);
  border-color: rgba(255, 255, 255, 0.08);
}

.floating-toolbar:not(.dark) {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(24, 39, 75, 0.12);
  box-shadow: 0 6px 16px rgba(41, 58, 88, 0.08);
}

.ambient-glow {
  position: absolute;
  inset: -18px;
  background: radial-gradient(
    72% 100% at 50% 112%,
    var(--accent-soft-color),
    transparent 70%
  );
  pointer-events: none;
}

.film-grain {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
  mix-blend-mode: soft-light;
  background-image: radial-gradient(
      circle at 22% 28%,
      rgba(255, 255, 255, 0.38) 0.35px,
      transparent 1px
    ),
    radial-gradient(
      circle at 78% 72%,
      rgba(255, 255, 255, 0.26) 0.4px,
      transparent 1px
    );
  background-size:
    4px 4px,
    5px 5px;
}

.active-indicator {
  position: absolute;
  left: 0;
  top: 50%;
  width: 70px;
  height: 44px;
  margin-top: -22px;
  transition: transform 0.28s ease;
  pointer-events: none;
}

.ring-glow {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  background: var(--accent-soft-color);
  opacity: 0.22;
  filter: none;
  box-shadow: none;
}

.ring-clip {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  overflow: visible;
}

.ring-spin {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  border: 1px solid var(--accent-color);
  opacity: 0.35;
  animation: none;
  background: transparent;
}

.inner-plate {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  background: transparent;
}

.floating-toolbar:not(.dark) .inner-plate {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(24, 39, 75, 0.1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 2px 8px rgba(31, 41, 55, 0.12);
}

.nav-btn {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 22px;
  cursor: pointer;
  transition: color 0.25s ease;
}

.floating-toolbar:not(.dark) .nav-btn {
  color: rgba(44, 59, 88, 0.72);
}

.nav-btn.active {
  color: var(--accent-color);
}

.floating-toolbar:not(.dark) .nav-btn.active {
  color: #1f2937;
}

.nav-btn.with-divider::after {
  content: '';
  position: absolute;
  right: 0;
  top: 15px;
  width: 1px;
  height: 30px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(255, 255, 255, 0.14),
    transparent
  );
}

.floating-toolbar:not(.dark) .nav-btn.with-divider::after {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(36, 54, 88, 0.12),
    transparent
  );
}

.theme-switch-wrap {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
}

.toggle-btn {
  color: rgba(255, 255, 255, 0.6);
}

.floating-toolbar:not(.dark) .toggle-btn {
  color: rgba(44, 59, 88, 0.78);
}

.floating-toolbar:not(.dark) .ring-glow {
  background: rgba(255, 255, 255, 0.95);
  opacity: 0.75;
}

.floating-toolbar:not(.dark) .ring-spin {
  border-color: rgba(24, 39, 75, 0.14);
  opacity: 1;
}

.toggle-icon-wrap {
  position: relative;
  width: 22px;
  height: 22px;
}

.sun-icon,
.moon-icon {
  position: absolute;
  inset: 0;
  transition:
    opacity 0.28s ease,
    transform 0.32s ease;
}

.sun-icon.hidden {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}

.moon-icon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}

.moon-icon.show {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.toggle-btn.bounce {
  animation: toggle-bounce 0.42s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.nav-btn.nav-bounce i {
  animation: nav-icon-bounce 0.42s cubic-bezier(0.34, 1.2, 0.64, 1);
}

@keyframes toggle-bounce {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes nav-icon-bounce {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
}
</style>
