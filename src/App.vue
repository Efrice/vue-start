<template>
  <div text-center>
    <div i-carbon-harbor mt-8 inline-block text-4xl />
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
