<template>
  <van-form ref="formRef" v-if="getShow" class="flex flex-col items-center" @submit="handleReset">
    <van-field
      class="enter-y items-center mb-25px !rounded-md"
      v-model="formData.username"
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
      class="enter-y items-center mb-25px !rounded-md"
      v-model="formData.mobile"
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
      class="enter-y items-center mb-70px !rounded-md"
      v-model="formData.sms"
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
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>

    <van-button
      class="enter-y !mb-25px !rounded-md"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      重 置
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
  import { computed, reactive, ref, unref } from 'vue';
  import type { FormInstance } from 'vant';
  import { Icon } from '@vicons/utils';
  import { UserOutlined, MobileOutlined, EditOutlined } from '@vicons/antd';
  import { LoginStateEnum, useLoginState, useFormRules } from './useLogin';

  const { handleBackLogin, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();
  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);

  const loading = ref(false);
  const formRef = ref<FormInstance>();
  const formData = reactive({
    username: '',
    mobile: '',
    sms: '',
  });

  function handleReset() {
    formRef.value
      ?.validate()
      .then(async () => {
        try {
          loading.value = true;
          // do something
        } finally {
          loading.value = false;
        }
      })
      .catch(() => {
        console.error('验证失败');
      });
  }
</script>

<style scoped lang="less"></style>
