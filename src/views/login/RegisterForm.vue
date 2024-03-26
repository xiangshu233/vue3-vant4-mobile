<template>
  <van-form v-if="getShow" ref="formRef" class="flex flex-col" @submit="handleRegister">
    <van-cell-group inset class="enter-y !mx-0 !mb-10">
      <van-field
        v-model="formData.username"
        class="enter-y items-center !rounded-md"
        name="username"
        :placeholder="$t('routes.my.username')"
        :rules="getFormRules.username"
      >
        <template #left-icon>
          <i class="i-ph:user-bold mr-2 text-lg" />
        </template>
      </van-field>

      <van-field
        v-model="formData.mobile"
        class="enter-y items-center !rounded-md"
        name="password"
        :placeholder="$t('routes.my.phone')"
        :rules="getFormRules.mobile"
      >
        <template #left-icon>
          <i class="i-ic:twotone-smartphone mr-2 text-lg" />
        </template>
      </van-field>

      <van-field
        v-model="formData.sms"
        class="enter-y items-center !rounded-md"
        center
        clearable
        :placeholder="$t('routes.basic.code')"
        :rules="getFormRules.sms"
      >
        <template #left-icon>
          <i class="i-material-symbols:edit-square-outline-rounded mr-2 text-lg" />
        </template>
        <template #button>
          <van-button size="small" type="primary">
            {{ $t('routes.basic.sendCode') }}
          </van-button>
        </template>
      </van-field>

      <van-field
        v-model="formData.password"
        class="enter-y items-center !rounded-md"
        :type="switchPassType ? 'password' : 'text'"
        name="password"
        :placeholder="$t('routes.my.password')"
        :rules="getFormRules.password"
        @click-right-icon="switchPassType = !switchPassType"
      >
        <template #left-icon>
          <i class="i-iconamoon:lock-bold mr-2 text-lg" />
        </template>
        <template #right-icon>
          <i v-if="switchPassType" class="i-mdi:eye-outline mr-2 text-lg" />
          <i v-else class="i-mdi:eye-off mr-2 text-lg" />
        </template>
      </van-field>

      <van-field
        v-model="formData.confirmPassword"
        class="enter-y items-center !rounded-md"
        :type="switchConfirmPassType ? 'password' : 'text'"
        name="confirmPassword"
        :placeholder="$t('routes.my.confirmpassword')"
        :rules="getFormRules.confirmPassword"
        @click-right-icon="switchConfirmPassType = !switchConfirmPassType"
      >
        <template #left-icon>
          <i class="i-iconamoon:lock-bold mr-2 text-lg" />
        </template>
        <template #right-icon>
          <i v-if="switchConfirmPassType" class="i-mdi:eye-outline mr-2 text-lg" />
          <i v-else class="i-mdi:eye-off mr-2 text-lg" />
        </template>
      </van-field>

      <van-field
        name="policy"
        class="enter-y items-center !rounded-md"
        :rules="getFormRules.policy"
      >
        <template #input>
          <van-checkbox v-model="formData.policy" icon-size="14px" shape="square">
            {{ $t('routes.basic.policy') }}
          </van-checkbox>
        </template>
      </van-field>
    </van-cell-group>

    <van-button
      class="enter-y !mb-4 !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      {{ $t('routes.basic.register') }}
    </van-button>

    <van-button
      class="enter-y !rounded-md"
      plain
      type="primary"
      block
      @click="handleBackLogin"
    >
      {{ $t('common.back') }}
    </van-button>
  </van-form>
</template>

<script setup lang="ts">
import { computed, reactive, ref, unref } from 'vue'
import type { FormInstance } from 'vant'

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
