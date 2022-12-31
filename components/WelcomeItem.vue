<template>
  <div class="flex p-3">
    <div class="flex items-center justify-center h-[32px] w-[32px]">
      <i :class="`fa ${icon} fa-xl`"></i>
    </div>
    <div class="ml-5 leading-7">
      <h3 class="text-2xl mb-2 font-bold">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title'],
}
</script>

<style scoped>
::v-deep p {
  @apply leading-7 mb-4;
}
</style>
