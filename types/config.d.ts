export interface GlobConfig {
  title: string
  titleCN: string
  apiUrl: string
  shortName: string
  urlPrefix?: string
  uploadUrl?: string
  prodMock: boolean
  imgUrl?: string
}

export interface GlobEnvConfig {
  // 标题
  VITE_GLOB_APP_TITLE: string
  // 中文标题
  VITE_GLOB_APP_TITLE_CN: string
  // 接口地址
  VITE_GLOB_API_URL: string
  // 接口前缀
  VITE_GLOB_API_URL_PREFIX?: string
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string
  // 图片上传地址
  VITE_GLOB_UPLOAD_URL?: string
  // 图片前缀地址
  VITE_GLOB_IMG_URL?: string
  // 生产环境开启mock
  VITE_GLOB_PROD_MOCK: boolean
}
