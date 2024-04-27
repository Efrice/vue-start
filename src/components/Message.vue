<script setup lang='ts'>
withDefaults(
  defineProps<{ show?: boolean }>(),
  { show: false },
)
</script>

<template>
  <div
    fixed left-0 right-0 top-0 z-50 text-center
    :class="show ? '' : 'pointer-events-none overflow-hidden'"
  >
    <div
      m-3 inline-block border rounded bg-white px-4 py-1 transition-all duration-300 dark:border-dark-300 dark:bg-dark-100
      :style="show ? {} : { transform: 'translateY(-150%)' }"
      :class="show ? 'shadow' : 'shadow-none'"
    >
      <slot />
    </div>
  </div>
</template>
