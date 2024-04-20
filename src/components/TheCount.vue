<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  initial: number
}>()

const count = ref(props.initial)
</script>

<template>
  <div text-center mt-4>
    <button type="button" btn @click="count++">{{ count }}</button>
  </div>
</template>
