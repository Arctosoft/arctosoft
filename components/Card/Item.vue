<template>
    <div class="flex flex-col bg-white w-full rounded-xl p-4 lg:p-8 items-center justify-center border text-center"
        :class="classes" :style="{ borderColor: color }">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    large: {
        type: Boolean,
        default: false
    },
    shadow: {
        type: Boolean,
        default: false
    }
})

const classes = computed(()=> {
    let c = props.large ? "max-w-[72rem] " : "max-w-[42rem] ";
    if (props.shadow) {
        c = c + "shadow-lg"
    }
    return c;
})
</script>