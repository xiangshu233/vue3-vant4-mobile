<template>
  <div>
    <NavBar />
    <van-field
      label="用户名"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      v-model="username"
    />
    <van-field
      label="手机号"
      readonly
      is-link
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      v-model="afterPhone"
    />
    <van-field
      label="修改登录密码"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      to="/changePassword"
    />
  </div>
</template>

<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import { useUserStore } from '@/store/modules/user';
  import { computed } from 'vue';

  const userStore = useUserStore();
  const { username, phone } = userStore.getUserInfo;

  const phoneDesensitize = (phone: string) => {
    const reg = /(\d{3})\d{4}(\d{4})/;
    return phone.replace(reg, '$1****$2');
  };

  const afterPhone = computed(() => phoneDesensitize(phone));
</script>

<style scoped lang="less">
  :deep(.van-field__control) {
    color: var(--van-text-color-2);
  }
</style>
