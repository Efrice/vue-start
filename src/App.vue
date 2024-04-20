<script setup lang="ts">
import TheCount from '~/components/TheCount.vue'
</script>

<template>
  <div text-center>
    <div i-carbon-harbor  inline-block text-4xl mt-8 />
    <p mt-2>
      <a rel="noreferrer" href="https://github.com/efrice/vue-start" target="_blank">
        Vue Start
      </a>
    </p>
  </div>
  <TheCount :initial="10" />
</template>

