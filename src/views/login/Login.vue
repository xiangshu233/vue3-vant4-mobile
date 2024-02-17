<template>
  <div>
    <div class="h-screen flex justify-center p-8">
      <div class="w-full flex flex-col">
        <LoginTitle />
        <LoginForm />
        <ForgetPasswordForm />
        <RegisterForm />
      </div>
    </div>
    <LoginWave />
  </div>
</template>

<script setup lang="ts">
import LoginTitle from './LoginTitle.vue'
import LoginForm from './LoginForm.vue'
import ForgetPasswordForm from './ForgetPasswordForm.vue'
import RegisterForm from './RegisterForm.vue'
import LoginWave from './LoginWave.vue'
</script>

<style scoped lang="less">
:deep(.van-field__left-icon) {
  display: flex;
}
:deep(.van-field__right-icon) {
  display: flex;
}
</style>
