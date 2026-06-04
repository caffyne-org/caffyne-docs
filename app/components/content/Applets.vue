<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const IMG_WIDTH = 2079
const STEP = 94.5
const INTERVAL_TIME = 2000

const offset = ref(0)
const isTransitioning = ref(true)

const topTransform = computed(() => {
  return `translateX(${-offset.value}px)`
})

const bottomTransform = computed(() => {
  return `translateX(${-IMG_WIDTH + offset.value}px)`
})

let timer: NodeJS.Timeout

const move = () => {
  if (offset.value >= IMG_WIDTH) {
    isTransitioning.value = false
    offset.value = 0

    setTimeout(() => {
      isTransitioning.value = true
      offset.value = STEP
    }, 20)
  } else {
    offset.value += STEP
  }
}

onMounted(() => {
  timer = setInterval(move, INTERVAL_TIME)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="carousel-container">
    <div
      class="image-row"
      :class="{ 'animate-ease': isTransitioning }"
      :style="{ transform: topTransform }"
    >
      <img
        src="/top.webp"
        alt="Top Layer"
        class="carousel-img"
      >
      <img
        src="/top.webp"
        alt="Top Layer Duplicate"
        class="carousel-img"
      >
      <img
        src="/top.webp"
        alt="Top Layer Duplicate"
        class="carousel-img"
      >
    </div>

    <div
      class="image-row"
      :class="{ 'animate-ease': isTransitioning }"
      :style="{ transform: bottomTransform }"
    >
      <img
        src="/bottom.webp"
        alt="Bottom Layer"
        class="carousel-img"
      >
      <img
        src="/bottom.webp"
        alt="Bottom Layer Duplicate"
        class="carousel-img"
      >
      <img
        src="/bottom.webp"
        alt="Bottom Layer Duplicate"
        class="carousel-img"
      >
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
  height: fit-content;
  overflow: visible;
  background-color: transparent;
}

.image-row {
  display: flex;
  width: max-content;
  will-change: transform;
}

.animate-ease {
  transition: transform 0.6s ease;
}

.carousel-img {
  width: 2079px;
  height: 180px;
  object-fit: cover;
  display: block;
}
</style>
