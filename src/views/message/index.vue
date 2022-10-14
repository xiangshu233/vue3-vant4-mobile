<template>
  <div>
    <van-cell title="单元格" :is-link="true" />
    <van-cell title="单元格" :is-link="true" value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <van-cell :border="false" title="个人信息" :is-link="true" to="/" />
    <van-cell title="URL 跳转" is-link url="https://github.com" />
    <van-cell title="路由跳转" is-link to="/" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
