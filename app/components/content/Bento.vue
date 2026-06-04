<script setup lang="ts">
const largeFeature1 = {
  title: '300+ color themes',
  desc: 'Apply one of our default schemes and generate more from wallpaper or Base16 color palettes with help from our theme machine.',
  img: '/landing03.webp'
}

const mediumFeature = {
  title: 'Applet groups',
  desc: 'Pair applets to groups and create unique and practical combinations.',
  img: '/landing02.webp'
}

const smallFeatures = [
  {
    title: 'Multi-monitor support',
    desc: 'Support for multiple screens and seperate bar configurations by default.'
  },
  {
    title: 'Powerful technologies',
    desc: 'Made with love, Fabric/GTK, Python and lots of coffee. Lightweight, fast and stable.'
  }
]

const largeFeature2 = {
  title: 'Drag & drop bar configuration',
  desc: 'Editing your bars and applets feels as intuitive as dragging a file into a folder. Be in control over your most favorite layouts.',
  img: '/landing01.webp'
}
</script>

<template>
  <section class="py-16 lg:py-24 dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800">
    <UContainer>
      <div class="mb-12">
        <h2 class="text-3xl lg:text-5xl mb-6 font-bold text-neutral-50">
          The <span class="text-primary">user</span> in mind
        </h2>
        <p class="text-lg text-muted mb-16">
          We are dedicated to deliver a seamless and delightful experience on all compatible platforms.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="flex flex-col gap-8">
          <div class="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-2/3 p-8 min-h-60 flex flex-col">
              <h4 class="text-xl lg:text-2xl font-bold text-white mb-2">
                {{ mediumFeature.title }}
              </h4>
              <p class="text-neutral-400 mb-6">
                {{ mediumFeature.desc }}
              </p>
            </div>
            <div class="w-full md:w-1/3 min-h-60">
              <img
                :src="mediumFeature.img"
                class="w-full h-full object-cover"
                alt="Feature"
              >
            </div>
          </div>

          <div class="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col">
            <div class="p-8 lg:p-10 min-h-60">
              <h3 class="text-xl lg:text-2xl font-bold text-white mb-4">
                {{ largeFeature2.title }}
              </h3>
              <p class="text-neutral-400 mb-8">
                {{ largeFeature2.desc }}
              </p>
            </div>
            <img
              :src="largeFeature2.img"
              class="w-full aspect-video object-cover object-bottom"
              alt="Feature"
            >
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <div class="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col">
            <div class="p-8 lg:p-10 min-h-60">
              <h3 class="text-xl lg:text-2xl font-bold text-white mb-4">
                {{ largeFeature1.title }}
              </h3>
              <p class="text-neutral-400 mb-8">
                {{ largeFeature1.desc }}
              </p>
            </div>
            <img
              :src="largeFeature1.img"
              class="w-full aspect-video object-cover object-bottom"
              alt="Feature"
            >
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="(item, index) in smallFeatures"
              :key="index"
              class="rounded-3xl min-h-60 bg-neutral-900 border border-neutral-800 p-8 flex flex-col"
            >
              <h4 class="text-xl lg:text-2xl font-bold text-white mb-4">
                {{ item.title }}
              </h4>
              <p class="text-neutral-400 mb-8">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
