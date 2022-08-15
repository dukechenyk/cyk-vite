<template>
  <a-button type="primary" @click="handleLogin">Primary Button</a-button>
</template>

<script setup lang="ts">
import router from '../../router';
  const handleLogin = () => {
    router.push({path: '/wel'})
  }
</script>

<style scoped>

</style>