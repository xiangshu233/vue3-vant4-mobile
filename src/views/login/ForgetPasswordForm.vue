<template>
  <van-form v-if="getShow" ref="formRef" class="flex flex-col items-center" @submit="handleReset">
    <van-field
      v-model="formData.username"
      class="enter-y mb-4 items-center !rounded-md"
      name="username"
      placeholder="用户名"
      :rules="getFormRules.username"
    >
      <template #left-icon>
        <i class="i-ph:user-bold mr-2 text-lg" />
      </template>
    </van-field>

    <van-field
      v-model="formData.mobile"
      class="enter-y mb-4 items-center !rounded-md"
      name="password"
      placeholder="手机号码"
      :rules="getFormRules.mobile"
    >
      <template #left-icon>
        <i class="i-ic:twotone-smartphone mr-2 text-lg" />
      </template>
    </van-field>

    <van-field
      v-model="formData.sms"
      class="enter-y mb-10 items-center !rounded-md"
      center
      clearable
      placeholder="请输入短信验证码"
      :rules="getFormRules.sms"
    >
      <template #left-icon>
        <i class="i-material-symbols:edit-square-outline-rounded mr-2 text-lg" />
      </template>
      <template #button>
        <van-button size="small" type="primary">
          发送验证码
        </van-button>
      </template>
    </van-field>
    <van-button
      class="enter-y !mb-4 !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      重 置
    </van-button>

    <van-button
      class="enter-y !rounded-md"
      plain
      type="primary"
      block
      @click="handleBackLogin"
    >
      返 回
    </van-button>
  </van-form>
</template>

<script setup lang="ts">
import type { FormInstance } from 'vant'
import { LoginStateEnum, useFormRules, useLoginState } from './useLogin'

const { handleBackLogin, getLoginState } = useLoginState()
const { getFormRules } = useFormRules()
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD)

const loading = ref(false)
const formRef = ref<FormInstance>()
const formData = reactive({
  username: '',
  mobile: '',
  sms: '',
})

function handleReset() {
  formRef.value
    ?.validate()
    .then(async () => {
      try {
        loading.value = true
        // do something
      }
      finally {
        loading.value = false
      }
    })
    .catch(() => {
      console.error('验证失败')
    })
}
</script>

<style scoped lang="less"></style>
