<template>
  <div>
    <p class="text-30px mb-50px"> vue3 v-model 的变化</p>
    input: <input v-model="name" />
    <p> {{ name }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const name = ref('Alice');
</script>

<style scoped></style>
