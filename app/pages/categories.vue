<script setup lang="ts">
import data from '~~/content/tribute.json'
const categories = data.categories
</script>

<template>
  <div class="h-screen bg-[url(/assets/img/desrtblender.jpg)] p-8">
    <h2 class="text-3xl mb-6 font-bold text-white">Categories</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/category/${cat.slug}`"
          class="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all backdrop-blur-sm border border-white/30"
      >
        <h3 class="text-xl font-bold">{{ cat.title }}</h3>
        <p>{{ cat.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>