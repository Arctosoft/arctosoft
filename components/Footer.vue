<template>
  <div class="h-8"></div>
  <footer class="border-t z-20 mt-8 sm:mt-auto bg-background/85 backdrop-blur">
    <div class="container flex justify-between flex-col sm:flex-row">
      <div class="p-4 flex flex-col space-y-1">
        <Logo class="w-12" />
        <p class="text-sm text-gray-600 dark:text-gray-300">Android & web development</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">2024 © Arctosoft AB</p>
      </div>
      <div class="p-4 flex flex-col space-y-1">
        <TextFooterHeader>Contact & legal</TextFooterHeader>
        <TextFooterLink to="/about">About & contact</TextFooterLink>
        <TextFooterLink to="/privacy-policy">Privacy policy</TextFooterLink>
        <TextFooterLink to="/donate">Donate</TextFooterLink>
      </div>
      <div class="p-4 flex flex-col space-y-1">
        <TextFooterHeader>Hemsidan</TextFooterHeader>
        <TextFooterLink to="https://inleed.se/r/1507757884" target="_blank">
          Hemsidan hostas hos Inleed (affiliate länk)
          <img src="/inleed.webp" height="48" width="388" alt="Webbhotell med personlig support från 19kr/mån hos Inleed" />
        </TextFooterLink>
      </div>
      <div class="p-4 flex flex-col space-y-1">
      </div>
    </div>
  </footer>
</template>
<script setup>

</script>