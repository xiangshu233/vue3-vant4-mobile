<template>
  <van-form v-if="getShow" ref="formRef" class="flex flex-col" @submit="handleRegister">
    <van-cell-group inset class="enter-y !mx-0 !mb-60px">
      <van-field
        v-model="formData.username"
        class="enter-y items-center !rounded-md"
        name="username"
        placeholder="用户名"
        :rules="getFormRules.username"
      >
        <template #left-icon>
          <Icon>
            <UserOutlined />
          </Icon>
        </template>
      </van-field>

      <van-field
        v-model="formData.mobile"
        class="enter-y items-center !rounded-md"
        name="password"
        placeholder="手机号码"
        :rules="getFormRules.mobile"
      >
        <template #left-icon>
          <Icon>
            <MobileOutlined />
          </Icon>
        </template>
      </van-field>

      <van-field
        v-model="formData.sms"
        class="enter-y items-center !rounded-md"
        center
        clearable
        placeholder="请输入短信验证码"
        :rules="getFormRules.sms"
      >
        <template #left-icon>
          <Icon>
            <EditOutlined />
          </Icon>
        </template>
        <template #button>
          <van-button size="small" type="primary">
            发送验证码
          </van-button>
        </template>
      </van-field>

      <van-field
        v-model="formData.password"
        class="enter-y items-center !rounded-md"
        :type="switchPassType ? 'password' : 'text'"
        name="password"
        placeholder="密码"
        :rules="getFormRules.password"
        @click-right-icon="switchPassType = !switchPassType"
      >
        <template #left-icon>
          <Icon>
            <LockOutlined />
          </Icon>
        </template>
        <template #right-icon>
          <Icon v-if="switchPassType">
            <EyeInvisibleOutlined />
          </Icon>
          <Icon v-else>
            <EyeOutlined />
          </Icon>
        </template>
      </van-field>

      <van-field
        v-model="formData.confirmPassword"
        class="enter-y items-center !rounded-md"
        :type="switchConfirmPassType ? 'password' : 'text'"
        name="confirmPassword"
        placeholder="确认密码"
        :rules="getFormRules.confirmPassword"
        @click-right-icon="switchConfirmPassType = !switchConfirmPassType"
      >
        <template #left-icon>
          <Icon>
            <LockOutlined />
          </Icon>
        </template>
        <template #right-icon>
          <Icon v-if="switchConfirmPassType">
            <EyeInvisibleOutlined />
          </Icon>
          <Icon v-else>
            <EyeOutlined />
          </Icon>
        </template>
      </van-field>

      <van-field
        name="policy"
        class="enter-y items-center px-1 !rounded-md"
        :rules="getFormRules.policy"
      >
        <template #input>
          <van-checkbox v-model="formData.policy" icon-size="14px" shape="square">
            我同意 xxx 隐私政策
          </van-checkbox>
        </template>
      </van-field>
    </van-cell-group>

    <van-button
      class="enter-y !mb-25px !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      注 册
    </van-button>

    <van-button
      class="enter-y !mb-150px !rounded-md"
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
import { computed, reactive, ref, unref } from 'vue'
import type { FormInstance } from 'vant'
import { Icon } from '@vicons/utils'
import {
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@vicons/antd'
import { LoginStateEnum, useFormRules, useLoginState } from './useLogin'

const { handleBackLogin, getLoginState } = useLoginState()
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)

const loading = ref(false)
const formRef = ref<FormInstance>()

const formData = reactive({
  username: '',
  mobile: '',
  sms: '',
  password: '',
  confirmPassword: '',
  policy: false,
})

const { getFormRules } = useFormRules(formData)

const switchPassType = ref(true)
const switchConfirmPassType = ref(true)

function handleRegister() {
  formRef.value
    ?.validate()
    .then(async () => {
      try {
        loading.value = true
        // do something

        console.log('%c [  ]-167', 'font-size:13px; background:pink; color:#bf2c9f;')
      }
      finally {
        loading.value = false

        console.log('%c [  ]-171', 'font-size:13px; background:pink; color:#bf2c9f;')
      }
    })
    .catch(() => {
      console.error('验证失败')
    })
}
</script>

<style scoped lang="less"></style>
