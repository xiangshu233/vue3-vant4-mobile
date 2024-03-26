<template>
  <div>
    <NavBar />
    <van-field
      v-model="username"
      :label="$t('routes.my.username')"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
    />
    <van-field
      v-model="afterPhone"
      :label="$t('routes.my.phone')"
      readonly
      is-link
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
    />
    <van-field
      :label="$t('routes.my.changePassword')"
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
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const { username, phone } = userStore.getUserInfo

function phoneDesensitize(phone: string) {
  const reg = /(\d{3})\d{4}(\d{4})/
  return phone.replace(reg, '$1****$2')
}

const afterPhone = computed(() => phoneDesensitize(phone))
</script>

<style scoped lang="less">
  :deep(.van-field__control) {
  color: var(--van-text-color-2);
}
</style>
