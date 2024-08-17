<template>
  <div :class="{ 'dark': darkModeCookie }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Arctosoft` : 'Arctosoft';
  }
})

const darkModeCookie = useDarkModeCookie()

if (darkModeCookie.value == null) {
  darkModeCookie.value = true
}

watch(darkModeCookie, (newVal, oldVal) => {
  if (newVal == null) { // weird hack
    darkModeCookie.value = !oldVal
  }
})

</script>