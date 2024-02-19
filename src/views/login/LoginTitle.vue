<template>
  <div class="flex flex-col items-center justify-center">
    <div class="logo my-35px enter-y">
      <SvgIcon class="!h-250px !w-250px" name="logo" />
    </div>
    <div class="mb-80px text-darkBlue dark:text-garyWhite text-45px font-black enter-y">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGlobSetting } from '@/hooks/setting';

  const globSetting = useGlobSetting();

  const { title } = globSetting;
</script>

<style scoped lang="less"></style>
