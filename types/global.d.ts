import type {
  ComponentPublicInstance,
  FunctionalComponent,
  VNodeChild,
  PropType as VuePropType,
} from 'vue'

// declare global 在具有 import 或 export 声明全局范围内的事物的文件中使用。
// 这在包含 import 或 export 因为此类文件被视为模块的文件中是必需的，并且在模块中声明的任何内容都在模块范围内。
// 在不是模块的文件中使用 declare global（即不包含import / export）是错误的，因为这样的文件中的所有内容都在全局范围内。

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }

  // vue
  type PropType<T> = VuePropType<T>
  type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  }

  type Nullable<T> = T | null
  type NonNullable<T> = T extends null | undefined ? never : T
  type Recordable<T = any> = Record<string, T>
  interface ReadonlyRecordable<T = any> {
    readonly [key: string]: T
  }
  interface Indexable<T = any> {
    [key: string]: T
  }
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  type TimeoutHandle = ReturnType<typeof setTimeout>
  type IntervalHandle = ReturnType<typeof setInterval>

  interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  interface WheelEvent {
    path?: EventTarget[]
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
    VITE_PUBLIC_PATH: string
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_DROP_CONSOLE: boolean
    VITE_GLOB_PROD_MOCK: boolean
    VITE_GLOB_IMG_URL: string
    VITE_PROXY: [string, string][]
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
