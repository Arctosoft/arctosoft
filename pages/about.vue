<template>
    <div class="container flex flex-col items-center text-center">
        <PageTitle>About us</PageTitle>
        <div class="flex flex-col gap-y-4">
            <p>A small Swedish company creating Android apps and responsive Nuxt/Vue.js websites.</p>
            <br>
            <p>Interested in your own website or app? Send us an email!</p>
        </div>

        <PageTitle>Contact</PageTitle>
        <div class="flex flex-col gap-y-4">
            <p class="flex gap-x-1 items-center justify-center">Email: <TextLink to="mailto:contact@arctosoft.com">contact@arctosoft.com</TextLink></p>
            <p>Write in either Swedish or English :)</p>
        </div>

        <PageTitle>Company info</PageTitle>
        <div class="flex flex-col gap-y-4">
            <p>VAT nr: SE559217972401</p>
            <p>Company reg. nr: 559217-9724</p>
            <p class="flex items-center justify-center gap-x-2">
                <MapPinIcon class="w-6 h-6" /> Östersund, Sweden
            </p>
        </div>
    </div>
</template>
<script setup>
import { MapPinIcon } from '@heroicons/vue/24/outline';
const title = 'About & contact'
useSeoMeta({
    title,
    ogTitle: title,
    ogImage: '/logo/og.jpg',
    twitterCard: 'summary_large_image',
})
</script>