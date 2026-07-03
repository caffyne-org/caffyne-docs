<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: 'Start',
  description: 'Desktop shell for Wayland on Linux',
  ogTitle: 'Start',
  ogDescription: 'Desktop shell for Wayland on Linux'
})
</script>

<template>
  <div class="bg-neutral-950 overflow-hidden">
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div
        class="absolute inset-0"
        style="clip-path: inset(0)"
      >
        <div
          class="fixed inset-0 pointer-events-none bg-center bg-cover"
          style="background-image: url('/cat-waves.webp')"
        />
      </div>
      <HeroBackground />
      <UContainer class="relative z-10 px-4 flex flex-col items-center text-center">
        <Scramble />
        <p class="lg:text-lg text-muted max-w-2xl mb-8">
          This lightweight shell for Wayland on Linux is created to give you full control over
          a modern & easy-to-use interface that fits your needs.
        </p>
        <div class="flex gap-4 mb-12">
          <UButton
            to="/getting-started"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
          >
            Get started
          </UButton>
          <UButton
            to="https://github.com/caffyne-org/caffyne-shell"
            target="_blank"
            color="neutral"
            variant="subtle"
            size="xl"
            icon="i-simple-icons-github"
          >
            View on GitHub
          </UButton>
        </div>
        <div class="w-full max-w-6xl mt-6 lg:mt-12 px-4">
          <img
            src="/hero.gif"
            class="rounded-2xl w-full"
            style="filter: saturate(1.2) brightness(1.0) contrast(1.1);"
          />
        </div>
      </UContainer>
    </section>

    <Bento />

    <section
      class="relative py-16 lg:py-24 px-4 dark:bg-neutral-900 bg-fixed bg-center bg-cover border-t border-neutral-800"
    >
      <div class="max-w-6xl mx-auto text-center rounded-2xl">
        <h3 class="text-2xl lg:text-3xl font-bold mb-4">
          Quick Start
        </h3>
        <p class="text-gray-500 mb-8 max-w-xl mx-auto">
          Install caffyne via python script.
        </p>
        <CodeGroup />
        <div class="flex justify-center gap-4 mt-8">
          <UButton
            to="/getting-started/installation"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
          >
            Installation
          </UButton>
          <UButton
            to="https://github.com/caffyne-org/caffyne-shell"
            target="_blank"
            color="neutral"
            variant="subtle"
            size="lg"
            icon="i-simple-icons-github"
          >
            View on GitHub
          </UButton>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800">
      <UContainer>
        <h2 class="text-3xl lg:text-5xl mb-6 font-bold text-neutral-50">
          <span class="text-primary">15+ applets</span> preinstalled
        </h2>
        <p class="text-lg text-muted lg:mb-16">
          Enhance your workflow with drag & drop bar configuration and custom blends.
        </p>
      </UContainer>
      <div class="scale-50 lg:scale-100 h-64 lg:h-full">
        <Applets />
      </div>
    </section>

    <section
      class="relative py-16 lg:py-24 px-4 dark:bg-neutral-900 bg-fixed bg-center bg-cover border-t border-gray-200 dark:border-neutral-800"
    >
      <UContainer class="max-w-6xl text-center bg-gray-100 py-16 px-4 dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-800">
        <h3 class="text-2xl lg:text-3xl font-bold mb-4">
          Support our mission
        </h3>
        <p class="text-gray-500 mb-8 max-w-xl mx-auto">
          Help us making Linux a better place for everyone.
        </p>
        <div class="flex justify-center gap-4">
          <UButton
            to="https://discord.gg/df4TzXx8V"
            size="lg"
            icon="i-simple-icons-discord"
          >
            Join on Discord
          </UButton>
        </div>
      </UContainer>
    </section>

    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800">
      <div class="mb-12">
        <UContainer>
          <h2 class="text-3xl lg:text-5xl mb-6 font-bold text-neutral-50">
            Walls of <span class="text-primary">fame</span>
          </h2>
          <p class="text-lg text-muted mb-16">
            Show off your workspace in Discord or send to caffyne@proton.me
          </p>
        </UContainer>
      </div>
      <Carousel />
    </section>

    <section class="relative py-24 lg:py-32 px-4 border-t border-neutral-800">
      <div
        class="absolute inset-0 z-0"
        style="clip-path: inset(0)"
      >
        <div
          class="fixed inset-0 pointer-events-none bg-center bg-cover"
          style="background-image: url('/cat-waves.webp')"
        />
      </div>
      <UContainer class="max-w-6xl px-0 text-center relative z-10">
        <h2 class="text-3xl lg:text-5xl font-bold mb-4">
          Ready to <span class="text-primary">boost</span> your Linux?
        </h2>
        <p class="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Learn how to explore new horizons on your Wayland installation.
        </p>
        <div class="flex justify-center gap-4">
          <UButton
            to="/getting-started"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
          >
            Get started
          </UButton>
          <UButton
            to="https://github.com/caffyne-org/caffyne-shell"
            color="neutral"
            variant="subtle"
            size="xl"
            icon="i-simple-icons-github"
            target="_blank"
          >
            View on GitHub
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
