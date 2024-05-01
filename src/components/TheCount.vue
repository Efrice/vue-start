<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const count = ref(props.initial)

function increase() {
  count.value++
  $message({ message: 'Increased.', type: 'success' })
}
</script>

<template>
  <button type="button" btn @click="increase">
    {{ count }}
  </button>
</template>
