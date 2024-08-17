<template>
  <header class="sticky top-0 z-20 py-4 backdrop-blur" :class="scrolledWindow && 'bg-white/80'"
    :style="{ backgroundImage: `url(${route.path === '/' ? '' : (darkModeCookie ? '/logo/bg.webp' : '/logo/bg2.webp')})` }">
    <div class="container flex justify-between items-center">
      <ul class="flex gap-4 sm:gap-8 md:gap-12 items-center text-lg flex-wrap">
        <li>
          <NuxtLink class="text-xl font-bold flex items-center" to="/" title="Home">
            <Logo class="hover:scale-125 transition-all duration-300" :class="showFullNav ? 'w-14' : 'w-10'" />
          </NuxtLink>
        </li>
        <li v-for="(item, index) in menuItems" class="font-semibold tracking-wider hover:underline" :class="scrolledWindow ? 'text-gray-800' : 'text-white hover:text-white/95'">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
      </ul>
      <div class="cursor-pointer hover:scale-110 transition" :class="scrolledWindow ? 'text-gray-800' : 'text-white'" title="Toggle dark mode" @click="toggleDarkMode">
        <MoonIcon v-if="darkModeCookie === true" class="w-6 h-6" />
        <SunIcon v-else class="w-6 h-6" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
const menuItems = [
  { name: "Apps", to: "/#apps" },
  { name: "Websites", to: "/#websites" },
  { name: "Shop", to: "/#shop" },
  { name: "Contact", to: "/about" },
]
const darkModeCookie = useDarkModeCookie()
const route = useRoute()
const scrollPos = ref(0)
const showFullNav = ref(true)
const scrolledWindow = ref(false)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function handleScroll() {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
  scrolledWindow.value = route.path === '/' && currentScrollPosition + 30 >= (window.innerHeight || document.documentElement.clientHeight)
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - scrollPos.value) < 60) {
    return
  }
  showFullNav.value = currentScrollPosition < scrollPos.value
  scrollPos.value = currentScrollPosition
}

function toggleDarkMode() {
  darkModeCookie.value = !darkModeCookie.value
}

</script>