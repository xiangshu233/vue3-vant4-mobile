<template>
  <div class="login-page">
    <div class="login-scroll px-8 pt-8">
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
.login-page {
  position: relative;
  height: 100dvh;
  overflow-y: auto;
}

.login-scroll {
  min-height: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 120px);
  -webkit-overflow-scrolling: touch;
}

:deep(.wave-wrapper) {
  pointer-events: none;
}

:deep(.van-field__left-icon) {
  display: flex;
}
:deep(.van-field__right-icon) {
  display: flex;
}
</style>
