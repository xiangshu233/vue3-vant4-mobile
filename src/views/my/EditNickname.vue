<template>
  <div>
    <NavBar>
      <template #right>
        <span @click="handleNickname">保存</span>
      </template>
    </NavBar>
    <van-form ref="formRef">
      <van-field
        v-model="formValue.nickname"
        class="mt-4"
        name="nickname"
        placeholder="请输入昵称（2-12字）"
        :rules="[
          {
            validator: validateNickname(),
            trigger: 'onChange',
          },
        ]"
      />
    </van-form>

    <div class="note p-6">
      <p>昵称支持2-12个中文字符或3-24个英文字符，</p>
      <p>符号仅支持”-“和”_“和”.“以及“·”</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'vant'
import { showToast } from 'vant'
import NavBar from './components/NavBar.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

const { nickname } = userStore.getUserInfo
const formRef = ref<FormInstance>()

const formValue = reactive({
  nickname: '',
})

function validateNickname() {
  return async (value: string) => {
    const pattern = /^[\u4E00-\u9FA5A-Za-z0-9-_.·]+$/
    if (!pattern.test(value)) {
      return Promise.resolve('请输入正确内容')
    }
    if (value.length < 2 || value.length > 12) {
      return Promise.resolve('长度不符合')
    }
    return Promise.resolve(true)
  }
}

function handleNickname() {
  formRef.value
    ?.validate()
    .then(async () => {
      try {
        const formValue = formRef.value?.getValues()
        showToast({
          message: `当前表单值：${JSON.stringify(formValue)}`,
        })
        // do something
      }
      finally {
        // after successful
      }
    })
    .catch(() => {
      console.error('验证失败')
    })
}

onMounted(() => {
  formValue.nickname = nickname
})
</script>

<style scoped lang="less">
.note {
  color: var(--van-text-color-2);
}
</style>
