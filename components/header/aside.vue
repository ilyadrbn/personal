<script setup lang="ts">
const { menuItems } = useMenuItems();

const isMenuOpened = ref<boolean>(false);
</script>

<template>
    <header
        class="aside-header sticky left-0 top-0 h-screen flex-col border border-primary-light-3 px-6 py-8 transition-all duration-300 ease-in-out dark:border-primary-dark-3 max-lg:h-20 max-lg:overflow-hidden max-lg:py-2"
        :class="{
            'overflow-hidden max-lg:h-screen': isMenuOpened,
        }"
    >
        <HeaderProfile
            :name="menuItems.name"
            :position="menuItems.position"
        />
        <ToggleMenuBtn
            v-model="isMenuOpened"
            class="hidden max-lg:block"
        />
        <div class="aside-header__wrapper flex h-full flex-col gap-8">
            <HeaderRoutesList :routes="menuItems.routes" />
            <HeaderRoutesList
                :routes="menuItems.resources"
                title="resources"
            />
            <CV :cv="menuItems.CV" />
        </div>
    </header>
</template>
