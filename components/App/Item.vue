<template>
    <div class="flex flex-col justify-between gap-y-4 w-full max-w-[36rem] shadow rounded-xl p-8 border
     border-white hover:border-blue-300 cursor-pointer relative overflow-hidden" @click="expanded = !expanded"
        @mouseenter="hovering = true" @mouseleave="hovering = false">
        <img v-if="swedish" class="absolute top-0 right-0 h-6" src="/se.svg" title="Sweden" alt="Swedish flag" />
        <div class="flex flex-row items-center gap-8">
            <img class="w-24 h-24 rounded-lg" :src="icon" loading="lazy" />
            <div class="flex flex-col gap-y-3">
                <h3 class="text-xl font-semibold">{{ name }}</h3>
                <p class="">{{ description }}</p>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex gap-4 items-center justify-center">
                <p v-if="swedish">Läs mer</p>
                <p v-else>Read more</p>
                <ChevronDownIcon class="w-6 h-6 transition" :class="classes" />
            </div>
            <TransitionExpand>
                <div v-show="expanded" class="mt-2">
                    <slot />
                </div>
            </TransitionExpand>
        </div>
    </div>
</template>
<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
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
    swedish: {
        type: Boolean,
        default: false
    }
})

const hovering = ref(false)
const expanded = ref(false)

const classes = computed(() => {
    let c = expanded.value ? "rotate-180 " : "rotate-0 "
    c += hovering.value ? "scale-110" : ""
    return c
})

</script>