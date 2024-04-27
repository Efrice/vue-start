<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const count = ref(props.initial)
const increased = ref(false)

function increase() {
  count.value++
  increased.value = true
  setTimeout(() => {
    increased.value = false
  }, 2000)
}
</script>

<template>
  <button type="button" btn @click="increase">
    {{ count }}
  </button>

  <Message :show="increased">
    <i i-carbon-checkmark mr-2 inline-block align-middle text-xl />
    <span align-middle>Increased</span>
  </Message>
</template>
