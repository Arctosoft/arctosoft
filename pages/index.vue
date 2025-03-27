<template>
    <div class="flex flex-col">
        <div class="flex h-[calc(100vh-14rem)]">
            <TransitionFade>
                <div v-show="darkModeCookie" class="-z-50 absolute top-0 w-full h-full overflow-hidden"
                    style="background: url('/logo/bg.webp') fixed 100%; background-size: cover; background-repeat: no-repeat;">
                </div>
            </TransitionFade>
            <TransitionFade>
                <div v-show="!darkModeCookie" class="-z-50 absolute top-0 w-full h-full overflow-hidden"
                    style="background: url('/logo/bg2.webp') fixed 100%; background-size: cover; background-repeat: no-repeat;">
                </div>
            </TransitionFade>

            <div class="w-full flex flex-col p-4 gap-8 justify-center items-center">
                <img src="/logo/256.png" class="w-28 md:w-36"/>
                <h1 class="text-7xl lg:text-8xl text-center text-white font-title tracking-wider">Arctosoft</h1>
                <div class="flex flex-wrap items-center justify-center text-center gap-2">
                    <p class="text-2xl text-white tracking-wider font-light">Android & web development made in </p>
                    <img class="h-5" src="/se.svg" title="Sweden" alt="Swedish flag" />
                </div>
            </div>
        </div>
        <PageContent id="apps" class="mt-36 mb-14 flex flex-col space-y-4">
            <PageTitle>Android apps</PageTitle>
            <div class="space-y-1 text-lg flex flex-wrap gap-x-12 gap-y-6 items-start justify-center xl:justify-start">
                <AppItem name="Valv - Encrypted gallery vault" description="An encrypted gallery secured by ChaCha20."
                    icon="/apps/valv.webp" id="app-valv">
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Encrypt images, GIFs, videos and text files</li>
                        <li>Organise using folders</li>
                        <li>The app requires no permissions</li>
                        <li>Encrypted files are stored on-disk allowing for easy backups and transfers between devices</li>
                        <li>Supports multiple vaults by the use of different passwords</li>
                        <li>Day/night modes</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.arctosoft.vault" new-tab>Google Play</TextLink>
                        <TextLink to="https://f-droid.org/packages/se.arctosoft.vault/" new-tab>F-Droid</TextLink>
                        <TextLink to="https://github.com/Arctosoft/Valv-Android" new-tab>Source code on GitHub</TextLink>
                        <TextLink to="/apps/valv/privacy-policy/">Privacy policy</TextLink>
                    </div>
                </AppItem>
                <AppItem name="Utdelningsdag för Postnord" description="En app för att hålla koll på Postnords varannandagsutdelning."
                    icon="/apps/utdelningsdag.webp" id="app-utdelningsdag" swedish>
                    <h4 class="text-lg font-semibold">Funktioner</h4>
                    <ul class="list-disc list-inside ">
                        <li>Sök efter ett postnummer och se vilka dagar posten delas ut</li>
                        <li>Lägg till en widget på hemskärmen för att slippa öppna appen</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.arctosoft.utdelningsdag" new-tab>Google Play
                        </TextLink>
                        <TextLink to="/apps/utdelningsdag/integritetspolicy/">Integritetspolicy</TextLink>
                    </div>
                </AppItem>
                <AppItem name="Pledge Watcher for Kickstarter"
                    description="Get notified for new/lost backers, pledges and comments on Kickstarter projects."
                    icon="/apps/pledgewatch.webp" id="app-pledge-watch">
                    <p class="italic">When you really want that limited reward.</p>
                    <br>
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Get notified up to once every five seconds for new and lost backers, pledges and comments on Kickstarter
                            projects</li>
                        <li>Keep it running with the screen on to see the pledged amount and backer count go up and down and get notified
                            based on your preferences</li>
                        <li>Enable the background service to get notifications even when the app is closed</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.arctosoft.pledgewatch.pro" new-tab>Google Play (full
                            version)</TextLink>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.arctosoft.pledgewatch.free" new-tab>Google Play (free
                            version)</TextLink>
                        <TextLink to="/apps/pledge-watcher/privacy-policy/">Privacy policy</TextLink>
                    </div>
                </AppItem>
                <AppItem name="VAT Calculator" description="Add or remove VAT to a price easily." icon="/apps/vat.webp"
                    id="app-vat-calculator">
                    <p>This is a simple app that lets you input a price excluding VAT, add a VAT rate and get the final price including
                        VAT. Or the opposite way - remove VAT from a price.</p>
                    <br>
                    <p>The app also includes a list of all the VAT rates and reduced VAT rates for each European country.</p>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.arctosoft.vatcalculator" new-tab>Google Play
                        </TextLink>
                        <TextLink to="/apps/pledge-watcher/privacy-policy/">Privacy policy</TextLink>
                    </div>
                </AppItem>
                <AppItem name="How Secure Is My Password?"
                    description="Test your password's strength and get tips on how to make it more secure." icon="/apps/hsimp.webp"
                    id="app-hsimp">
                    <p>Have you ever wondered how secure your password is, or how long it would take for a computer to crack it? Now you can
                        find out!</p>
                    <p>How secure is my password will let you enter a password and give you response on how long it would take for a
                        computer to crack it.</p>
                    <br>
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Test your password's strength</li>
                        <li>Get tips on how to make your password more secure</li>
                        <li>Create strong passwords with a password generator</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.passwordstrength.pro" new-tab>Google Play
                            (ad-free
                            version)</TextLink>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.passwordstrength" new-tab>Google Play (free
                            version)</TextLink>
                        <TextLink to="/apps/how-secure-is-my-password/privacy-policy-pro/">Privacy policy (ad-free)</TextLink>
                        <TextLink to="/apps/how-secure-is-my-password/privacy-policy/">Privacy policy (free)</TextLink>
                    </div>
                </AppItem>
                <AppItem name="Random Country Selector" description="Randomly select one of the world's 240+ countries and islands."
                    icon="/apps/randomcountry.webp" id="app-randomcountry">
                    <p>With the tap of a button, select a random country from anywhere in the world. View its flag and show its location on
                        a world map.</p>
                    <br>
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Randomly select one of the world's 190+ countries and 50+ islands and regions</li>
                        <li>Select a continent to only generate countries from there</li>
                        <li>View the flag of the selected country</li>
                        <li>Tap a button to view it on a world map</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.randomcountrygenerator.pro" new-tab>Google
                            Play (ad-free version)</TextLink>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.randomcountrygenerator" new-tab>Google Play
                            (free version)</TextLink>
                        <TextLink to="/apps/random-country-selector/privacy-policy-pro/">Privacy policy (ad-free)</TextLink>
                        <TextLink to="/apps/random-country-selector/privacy-policy/">Privacy policy (free)</TextLink>
                    </div>
                </AppItem>
                <AppItem name="Val Thorens Webcams"
                    description="Stay up to date with the latest images from 11 webcams located in Val Thorens."
                    icon="/apps/valthorens.webp" id="app-val-thorens">
                    <h4 class="text-lg font-semibold">View the latest alp images taken from 11 different locations in Val Thorens:</h4>
                    <ul class="list-disc list-inside ">
                        <li>Funitel 3 Vallées</li>
                        <li>La Maison</li>
                        <li>Les 2 Lacs</li>
                        <li>Funitel De Thorens</li>
                        <li>Stade</li>
                        <li>Boismint</li>
                        <li>La Tyrolienne</li>
                        <li>Plan Bouchet</li>
                        <li>Livecam 360°</li>
                        <li>Plein Sud</li>
                        <li>Cime Caron</li>
                    </ul>
                    <br>
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Easy to use</li>
                        <li>Always updated with the latest webcam images</li>
                        <li>Don't know where a webcam is located? Pick a location from the map</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.valthorens" new-tab>Google Play
                        </TextLink>
                        <TextLink to="/apps/val-thorens-webcams/privacy-policy/">Privacy policy</TextLink>
                    </div>
                </AppItem>
                <AppItem name="Cervinia Webcams"
                    description="Stay up to date with the latest alp images from five webcams located in Cervinia."
                    icon="/apps/cervinia.webp" id="app-cervinia">
                    <h4 class="text-lg font-semibold">View the latest alp images taken from five different locations in Breuil-Cervinia:
                    </h4>
                    <ul class="list-disc list-inside ">
                        <li>Plan Maison</li>
                        <li>Plateau Rosa</li>
                        <li>Valtournenche Bec Carré</li>
                        <li>Chamois Colle Fontana Fredda</li>
                        <li>Torgnon Chantorne Skiarea</li>
                        <li>Cime Caron</li>
                    </ul>
                    <br>
                    <h4 class="text-lg font-semibold">Features</h4>
                    <ul class="list-disc list-inside ">
                        <li>Easy to use</li>
                        <li>Always updated with the latest webcam images</li>
                    </ul>
                    <br>
                    <div class="flex flex-col gap-1">
                        <h4 class="text-lg font-semibold">Links</h4>
                        <TextLink to="https://play.google.com/store/apps/details?id=se.swecookie.cervinia2" new-tab>Google Play
                        </TextLink>
                        <TextLink to="/apps/cervinia-webcams/privacy-policy/">Privacy policy</TextLink>
                    </div>
                </AppItem>
            </div>
            <NuxtLink to="https://play.google.com/store/apps/dev?id=5055892917356573211" class="hover:underline w-min text-nowrap"
                target="_blank">Find them on Google Play</NuxtLink>
        </PageContent>
        <div
            :style="{ background: `url(${darkModeCookie ? '/logo/bg.webp' : '/logo/bg2.webp'}) fixed 100%`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
            <div class="w-full pb-14 text-gray-50 relative backdrop-blur-sm">
                <PageContent id="websites" class="flex flex-col space-y-4">
                    <PageTitle>Websites</PageTitle>
                    <div class="space-y-1 text-lg flex flex-wrap gap-y-6">
                        <SiteItem name="Hanti.se" description="Marknadsplatsen för hantverk"
                            url="https://hanti.se/" icon="/websites/hanti.webp" swedish dark>
                        </SiteItem>
                        <SiteItem name="UV-prognos.se" description="UV-index och prognoser för 2017 svenska städer"
                            url="https://uvprognos.se/" icon="/websites/uvprognos.webp" swedish dark>
                        </SiteItem>
                    </div>
                </PageContent>
            </div>
        </div>
        <div class="w-full mb-14">
            <PageContent id="shop" class="flex flex-col space-y-4">
                <PageTitle>Shop</PageTitle>
                <p>Discover our shops where we sell our products.</p>
                <div class="space-y-1 text-lg flex flex-wrap gap-y-6">
                    <SiteItem name="Malmhund.se" description="Svensktillverkade hundkoppel." url="https://malmhund.se/"
                        icon="/websites/malmhund.webp" swedish>
                    </SiteItem>
                    <SiteItem name="Malmhund.com" description="Swedish made dog leashes." url="https://malmhund.com/"
                        icon="/websites/malmhund.webp">
                    </SiteItem>
                    <SiteItem name="Arcto3D" description="FDM 3D-printing services and products. Need something 3D-printed? Contact us for more information." url="/about"
                        icon="/websites/arcto3d.webp" stay>
                    </SiteItem>
                </div>
            </PageContent>
        </div>
    </div>

</template>

<script setup>
const title = 'Homepage'
const description = 'A Swedish Android and Nuxt/Vue.js web development company.'
useSeoMeta({
    title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    ogImage: '/logo/og.jpg',
    twitterCard: 'summary_large_image',
})
const darkModeCookie = useDarkModeCookie()

</script>