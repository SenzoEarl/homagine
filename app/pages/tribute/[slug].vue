<script setup lang="ts">
import data from '~~/content/tribute.json'


const route = useRoute()
const tribute = data.tributes.find(t => t.slug === route.params.slug)


</script>

<template>
  <div class="min-h-screen w-full bg-[url('/assets/img/desert-planet.jpg')] bg-cover bg-no-repeat bg-fixed p-8">
    <NuxtLink to="/categories" class="text-blue-500 mb-4 inline-block">← Back</NuxtLink>

    <div class="p-4 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all backdrop-blur-sm border border-white/30">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <!-- Left Column -->
        <div class="bg-[url('/assets/img/textured-paper.png')] p-4 ">
          <h2 class="text-3xl font-bold mb-2 capitalize">
            {{ tribute.slug.replaceAll('-', ' ')}}
          </h2>
          <h3 class="text-2xl font-light mb-2 capitalize">
            {{ tribute.duration }}
          </h3>
          <p>
            {{  tribute.overview }}<br>
            *** <br>
            {{ tribute.tribute }}
          </p>
        </div>

        <!-- Right Column -->
        <div class="bg-[url('/assets/img/textured-paper.png')] p-6">
          <PhotoWall/>
        </div>
      </div>




    </div>
  </div>
</template>

<style scoped>

</style>