/* eslint-disable ts/ban-types */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const Component: DefineComponent<{}, {}, any>
  export default Component
}
