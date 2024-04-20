<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  initial: number
}>()

const count = ref(props.initial)
</script>

<template>
  <button type="button" @click="count++">{{ count }}</button>
</template>
