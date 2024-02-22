<template>
  <van-uploader
    :max-size="700 * 1024"
    :max-count="1"
    :before-read="beforeRead"
    :after-read="afterRead"
    accept="image/*"
  >
    <template #default>
      <slot name="default" />
    </template>
  </van-uploader>
</template>

<script setup lang="ts">
import { showFailToast } from 'vant'

function beforeRead(file) {
  if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
    return true
  }
  showFailToast('请上传正确格式的图片')
  return false
}

function afterRead(file) {
  console.log('%c [ file ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', file)
  // 这里写上传逻辑
}
</script>

<style scoped lang="less"></style>
