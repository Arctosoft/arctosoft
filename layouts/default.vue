<template>
    <NuxtLoadingIndicator />
    <div class="flex flex-col min-h-screen justify-start">
        <Header />
        <slot />
        <Footer />
    </div>
</template>
<script setup>

</script>