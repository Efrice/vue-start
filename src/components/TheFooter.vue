<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/efrice/vue-start"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
