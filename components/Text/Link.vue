<template>
  <NuxtLink :to="props.to" class="hover:underline flex items-center gap-x-1 text-blue-900" :target="newTab ? '_blank' : '_self'">
    <ArrowTopRightOnSquareIcon v-if="newTab" class="w-4 h-4" />
    <slot />
  </NuxtLink>
</template>
<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  newTab: {
    type: Boolean,
    default: false
  },
})
</script>