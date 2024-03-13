<template>
  <div>
    <NavBar>
      <template #right>
        <span @click="handleNickname">保存</span>
      </template>
    </NavBar>
    <van-form ref="formRef">
      <van-field
        v-model="formValue.sign"
        class="mt-20px"
        name="sign"
        clearable
        rows="4"
        autosize
        label="签名"
        type="textarea"
        maxlength="70"
        placeholder="随知修行乃当务之急，然怠惰度日至今"
        show-word-limit
      />
    </van-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'vant'
import { showToast } from 'vant'
import NavBar from './components/NavBar.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

const { sign } = userStore.getUserInfo
const formRef = ref<FormInstance>()

const formValue = reactive({
  sign: '',
})

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
  formValue.sign = sign ?? ''
})
</script>

<style scoped lang="less">

</style>
