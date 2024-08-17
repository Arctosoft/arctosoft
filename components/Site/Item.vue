<template>
    <NuxtLink :to="url" :target="stay ? '_self' : '_blank'"
        class="flex flex-col lg:flex-row flex-wrap justify-between gap-y-4 w-full shadow rounded-xl p-8 border cursor-pointer relative overflow-hidden"
        @mouseenter="hovering = true" @mouseleave="hovering = false"
        :class="dark ? 'border-slate-600 hover:border-sky-500/60 backdrop-blur-lg' : 'border-white hover:border-blue-300'">
        <img v-if="swedish" class="absolute top-0 right-0 h-6" src="/se.svg" title="Swedish" alt="Swedish flag" />
        <div class="flex flex-row items-center gap-8">
            <img class="w-24 h-24 rounded-lg object-contain" :src="icon" loading="lazy" />
            <div class="flex flex-col gap-y-3">
                <h3 class="text-xl font-semibold">{{ name }}</h3>
                <p class="max-w-[40rem]">{{ description }}</p>
            </div>
        </div>
        <div v-if="url" class="flex flex-col justify-center">
            <div class="flex gap-4 items-center justify-center transition-all duration-300" :class="hovering ? 'mr-4' : ''">
                <p v-if="swedish">Besök</p>
                <p v-else>Visit</p>
                <ArrowRightIcon class="w-6 h-6 transition" />
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    swedish: {
        type: Boolean,
        default: false
    },
    dark: {
        type: Boolean,
        default: false
    },
    stay: {
        type: Boolean,
        default: false
    }
})

const hovering = ref(false)

</script>