<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white text-center">
    <div class="h-screen snap-start flex flex-col justify-center items-center">
      <h1 class="text-5xl font-bold mb-4">{{ error.statusCode }}</h1>
      <h2 class="text-2xl font-bold mb-4">{{ error.message }}</h2>

      <NuxtLink to="/" class="bg-red-500 text-black px-6 py-2 rounded">Go back home</NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>