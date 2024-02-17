<template>
  <div class="flex flex-col items-center justify-center">
    <div class="logo enter-y my-35px">
      <SvgIcon class="!h-250px !w-250px" name="logo" />
    </div>
    <div class="text-darkBlue dark:text-garyWhite enter-y mb-80px text-45px font-black">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobSetting } from '@/hooks/setting'

const globSetting = useGlobSetting()

const { title } = globSetting
</script>

<style scoped lang="less"></style>
