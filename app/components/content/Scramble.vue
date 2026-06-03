<script setup lang="ts">
import { ref, onMounted } from 'vue'

const words = ['Modular', 'Performant', 'Intuitive']
const currentWordIndex = ref(0)
const displayText = ref(words[0])
const glyphs = '!<>-_\\/()[]{}~#;—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const scrambleText = async (targetWord: string) => {
  const duration = 600 // animation duration
  const start = performance.now()

  const animate = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)

    const fixedCount = Math.floor(progress * targetWord.length)

    displayText.value = targetWord
      .split('')
      .map((char, index) => {
        if (index < fixedCount) {
          return char
        }
        return glyphs[Math.floor(Math.random() * glyphs.length)]
      })
      .join('')

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayText.value = targetWord
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length
    scrambleText(words[currentWordIndex.value] ?? '')
  }, 2000) // time until next word
})
</script>

<template>
  <h2 class="text-5xl sm:text-7xl text-neutral-50 font-bold mb-6">
    <span class="text-primary">
      {{ displayText }}
    </span>
    <br class="block md:hidden">
    by design
  </h2>
</template>
