<template>
  <NuxtLink :to="props.to" class="text-sm text-gray-800 dark:text-gray-300 hover:underline">
    <slot />
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>