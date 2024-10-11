<script setup lang="ts">
const { menuItems } = getMenuItems();

const isMenuOpened = ref<boolean>(false);
</script>

<template>
    <header
        class="aside-header sticky left-0 top-0 h-screen min-w-fit overflow-auto border border-primary-light-3 px-6 py-8 transition-all duration-300 ease-in-out dark:border-primary-dark-3 max-lg:relative max-lg:h-20 max-lg:overflow-hidden max-lg:py-2"
        :class="{
            'max-lg:h-screen max-lg:!overflow-auto max-lg:pb-8': isMenuOpened,
        }"
    >
        <HeaderProfile
            :name="menuItems.name"
            :position="menuItems.position"
        />
        <ToggleMenuBtn v-model="isMenuOpened" />
        <div class="aside-header__wrapper flex flex-col gap-8">
            <HeaderRoutesList :routes="menuItems.routes" />
            <HeaderRoutesList
                :routes="menuItems.resources"
                title="resources"
            />
            <CV :cv="menuItems.CV" />
        </div>
    </header>
</template>

<style scoped>
header.aside-header::-webkit-scrollbar {
    display: none;
}
</style>
