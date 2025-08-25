<script setup lang="ts">
import data from '~~/content/tribute.json'
const config = useRuntimeConfig()

const route = useRoute()
const tribute = data.tributes.find(t => t.slug === route.params.slug)


// Rotation pool
const rotations = ["rotate-10", "-rotate-10", "rotate-12", "-rotate-12"];

// Pick random rotation
const getRandomRotation = () =>
    rotations[Math.floor(Math.random() * rotations.length)];
</script>

<template>

  <div class="flex flex-col md:flex-row md:justify-around items-center gap-4 mt-6">
    <!-- Loop through tribute images -->
    <div v-for="(image, index) in tribute.images" :key="index"
         class="flex flex-col md:flex-row md:justify-around items-center gap-4 mt-6"
         :class="['polaroid', getRandomRotation(), 'flex flex-col items-center']">
      <figure>
        <img :src="config.app.baseURL + image.src" :alt="image.alt" class="object-contain "/>
        <figcaption class="caption lg:caption md:caption sm:caption">{{ image.alt }}</figcaption>
      </figure>


    </div>
  </div>

</template>

<style scoped>
.polaroid {
  @apply bg-white p-3 pt-5 pb-8 text-center shadow-lg rounded-sm;
}

.caption {
  @apply font-bold text-center;
  font-family: 'Shadows Into Light', cursive; /* Handwriting font */
}

</style>