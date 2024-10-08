<script setup lang="ts">
const menuItems = ref<TMenu>({
    name: "Illia Horbul",
    position: "Middle Frontend Developer",
    routes: [
        {
            href: "/",
            title: "Home",
            icon: "solar:home-2-outline",
        },
        {
            href: "/certificates",
            title: "Certificates",
            icon: "solar:ticker-star-broken",
        },
        {
            href: "/services",
            title: "Services",
            icon: "solar:keyboard-broken",
        },
        {
            href: "/contact",
            title: "Contact",
            icon: "solar:chat-round-broken",
        },
    ],
    resources: [
        {
            href: "/bookmarks",
            title: "Bookmarks",
            icon: "solar:book-bookmark-minimalistic-broken",
        },
        {
            href: "/stack",
            title: "Stack",
            icon: "mingcute:vue-line",
        },
        {
            href: "https://t.me/ilyadrbn",
            title: "Telegram",
            icon: "ph:telegram-logo-light",
            blank: true,
        },
        {
            href: "https://github.com/ilyadrbn",
            title: "Github",
            icon: "mdi:github",
            blank: true,
        },
        {
            href: "https://gitlab.com/ilyadrbn",
            title: "Gitlab",
            icon: "ph:gitlab-logo-simple",
            blank: true,
        },
    ],
    CV: {
        title: "Download CV",
        icon: "solar:download-outline",
    },
});
</script>

<template>
    <header
        class="aside-header sticky left-0 top-0 flex h-screen w-64 flex-col"
    >
        <div class="aside-header__profile">
            <picture class="aside-header__profile-picture">
                <source srcset="" />
                <img
                    src=""
                    alt="My photo"
                />
            </picture>
            <div class="aside-header__profile-info">
                <p>{{ menuItems.name }}</p>
                <p>{{ menuItems.position }}</p>
            </div>
        </div>
        <nav class="aside-header__route-nav">
            <ul class="aside-header__route-nav-list">
                <li
                    v-for="route in menuItems.routes"
                    :key="route.href"
                    class="aside-header__route-nav-item"
                >
                    <NuxtLink :to="route.href">
                        <Icon :name="route.icon" />
                        {{ route.title }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <nav class="aside-header__resources-nav">
            <h3>RESOURCES</h3>
            <ul class="aside-header__resources-nav-list">
                <li
                    v-for="resource in menuItems.resources"
                    :key="resource.href"
                    class="aside-header__resources-nav-item"
                >
                    <NuxtLink
                        :to="resource.href"
                        :target="resource.blank ? '_blank' : ''"
                    >
                        <Icon :name="resource.icon" />
                        {{ resource.title }}</NuxtLink
                    >
                </li>
            </ul>
        </nav>
        <div class="aside-header__cv-loader">
            <button>
                <Icon :name="menuItems.CV.icon" />
                {{ menuItems.CV.title }}
            </button>
        </div>
        <div class="aside-header__footer mt-auto">
            <p>© 2023 Illia Horbul</p>
        </div>
    </header>
</template>
