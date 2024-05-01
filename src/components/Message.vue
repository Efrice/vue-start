<script setup lang='ts'>
type messageType = 'info' | 'success' | 'warning' | 'error'
const props = withDefaults(
  defineProps<{ message?: string, type?: messageType, duration?: number }>(),
  { type: 'info', duration: 3000 },
)

const show = ref(true)
if (props.duration !== 0) {
  setTimeout(() => {
    show.value = false
  }, props.duration)
}

const TYPE_ICONS = {
  info: 'i-carbon-information',
  success: 'i-carbon-checkmark-outline',
  warning: 'i-carbon-warning',
  error: 'i-carbon-close-outline',
}
const icon = TYPE_ICONS[props.type]
</script>

<template>
  <div
    fixed left-0 right-0 top-0 z-50
    text-center
    class="message"
    :class="show ? '' : 'pointer-events-none overflow-hidden'"
  >
    <div
      m-3 inline-block border rounded bg-white px-4 py-1 transition-all duration-300 dark:border-dark-300 dark:bg-dark-100
      :style="show ? {} : { transform: 'translateY(-150%)' }"
      :class="show ? 'shadow' : 'shadow-none'"
    >
      <slot>
        <i :class="icon" mr-2 inline-block align-middle text-xl />
        <span align-middle>{{ message }}</span>
      </slot>
    </div>
  </div>
</template>
