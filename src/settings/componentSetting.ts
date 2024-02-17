export default {
  upload: {
    // 考虑接口规范不同
    apiSetting: {
      // 集合字段名
      infoField: 'result',
      // 图片地址字段名
      imgField: 'imagePath',
    },
    // 最大上传图片大小
    maxSize: 1,
    // 图片上传类型
    fileType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
  },
}
