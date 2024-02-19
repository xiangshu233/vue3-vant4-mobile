<template>
  <div>
    <div class="flex justify-center h-screen p-8">
      <div class="flex flex-col w-full">
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
  import LoginTitle from './LoginTitle.vue';
  import LoginForm from './LoginForm.vue';
  import ForgetPasswordForm from './ForgetPasswordForm.vue';
  import RegisterForm from './RegisterForm.vue';
  import LoginWave from './LoginWave.vue';
</script>

<style scoped lang="less">
  :deep(.van-field__left-icon) {
    display: flex;
  }
  :deep(.van-field__right-icon) {
    display: flex;
  }
</style>
