<template>
  <router-view />
</template>
<script setup lang="ts">
import { useRecaptchaProvider } from 'vue-recaptcha'
defineOptions({
  name: 'App',
})

useRecaptchaProvider()
</script>
