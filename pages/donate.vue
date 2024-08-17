<template>
    <div class="container flex flex-col items-center text-center">
        <PageTitle>Donate</PageTitle>
        <div class="flex flex-col items-center justify-center gap-y-4">
            <p>Like what we do?</p>
            <p class="flex gap-x-1">PayPal: <TextLink to="https://paypal.me/swecookie" new-tab>https://paypal.me/swecookie</TextLink></p>
            <p class="flex gap-x-1">Liberapay: <TextLink to="https://liberapay.com/hej2010/" new-tab>https://liberapay.com/hej2010/</TextLink></p>
            <p class="flex gap-x-1">Ko-fi: <TextLink to="https://ko-fi.com/hej2010" new-tab>https://ko-fi.com/hej2010</TextLink></p>
        </div>

    </div>
</template>
<script setup>
const title = 'Donate'
useSeoMeta({
    title,
    ogTitle: title,
    ogImage: '/logo/og.jpg',
    twitterCard: 'summary_large_image',
})
</script>