<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('arch')
const copied = ref(false)

const tabs = [
  {
    id: 'arch',
    label: 'arch',
    icon: 'i-simple-icons-archlinux',
    command: 'curl -fsSL https://raw.githubusercontent.com/caffyne-org/caffyne-shell/main/install.sh | bash'
  }
]

const currentCommand = computed(() => {
  return tabs.find(t => t.id === activeTab.value)?.command || ''
})

const copyCommand = () => {
  navigator.clipboard.writeText(currentCommand.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="rounded-xl border border-neutral-700 bg-neutral-800 overflow-hidden">
    <div class="flex items-center justify-between px-2 py-2 bg-neutral-900 border-b border-neutral-700">
      <div class="flex items-center gap-1">
        <UButton
          v-for="tab in tabs"
          :key="tab.id"
          variant="ghost"
          color="neutral"
          :icon="tab.icon"
          size="md"
          class="capitalize transition-all duration-200"
          :class="{ 'bg-neutral-800 text-neutral-50': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </UButton>
      </div>
      <UButton
        :color="copied ? 'primary' : 'neutral'"
        variant="outline"
        :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
        size="md"
        class="transition-all duration-200"
        @click="copyCommand"
      />
    </div>

    <div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto select-all whitespace-nowrap text-left">
      <div v-if="activeTab === 'arch'">
        <span class="text-blue-400">curl </span>
        <span class="text-green-400">-fsSL https://raw.githubusercontent.com/caffyne-org/caffyne-shell/main/install.sh | </span>
        <span class="text-blue-400">bash</span>
      </div>
    </div>
  </div>
</template>
