<script setup lang="ts">
import TheCount from '~/components/TheCount.vue'
</script>

<template>    
  <p text-center mt-10>
    <a rel="noreferrer" href="https://github.com/efrice/vue-start" target="_blank">
      Vue Start
    </a>
  </p>
  <TheCount :initial="10" />
</template>

