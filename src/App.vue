<script setup lang="ts">
import TheCount from '~/components/TheCount.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <div text-center>
    <div i-carbon-harbor  inline-block text-4xl mt-8 />
    <p mt-2>
      <a rel="noreferrer" href="https://github.com/efrice/vue-start" target="_blank">
        Vue Start
      </a>
    </p>
    <div mt-2>
      <TheCount :initial="10" />
    </div>
    <TheFooter />
  </div>
</template>

