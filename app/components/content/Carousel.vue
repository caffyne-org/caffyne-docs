<script setup lang="ts">
const items = [
  '/screen02.webp',
  '/screen04.webp',
  '/screen05.webp',
  '/screen01.webp',
  '/screen02.webp',
  '/screen04.webp',
  '/screen05.webp',
  '/screen01.webp'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    class-names
    :autoplay="{ delay: 2000 }"
    arrows
    :items="items"
    :ui="{
      item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-10'
    }"
    class="mx-auto max-w-5xl"
  >
    <img
      :src="item"
      width="960"
      height="600"
      class="rounded-lg"
    >
  </UCarousel>
</template>
