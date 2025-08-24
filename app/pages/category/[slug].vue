<script setup lang="ts">
import data from '~~/content/tribute.json'
const route = useRoute()
const tributes = data.tributes.filter(t => t.category === route.params.slug)
</script>

<template>
  <div class="min-h-screen w-full bg-[url('/assets/img/desrtblender.jpg')] bg-cover bg-no-repeat bg-fixed p-8">
    <h2 class="text-3xl font-bold text-white mb-6">Tributes in {{ route.params.slug.replaceAll('-', ' ') }}</h2>


    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


      <NuxtLink v-for="t in tributes" v-if="tributes.length > 0"
          :key="t.slug"
          :to="`/tribute/${t.slug}`"
          class="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all backdrop-blur-sm border border-white/30">
        <h3 class="text-xl font-bold capitalize">{{ t.slug.replaceAll('-', ' ') }}</h3>
        <p>{{ t.overview }}</p>
      </NuxtLink>
      <div v-else class="flex justify-center items-center col-span-full">
        <div
            class="p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all backdrop-blur-sm border border-white/30 text-center w-full sm:w-2/3 lg:w-1/2 text-pretty font-bold">
          <p class="p-2">
            No tributes yet... more are
          </p>
          <a href="/categories" class="bg-blue-400 text-black px-6 py-2 rounded">Back</a>
        </div>
      </div>


    </div>



  </div>
</template>

<style scoped>

</style>