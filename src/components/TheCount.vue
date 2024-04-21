<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const count = ref(props.initial)
</script>

<template>
  <button type="button" btn @click="count++">{{ count }}</button>
</template>
