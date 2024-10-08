<script setup lang="ts">
const { menuItems } = useMenuItems();
</script>

<template>
    <header
        class="aside-header sticky left-0 top-0 flex h-screen w-auto flex-col gap-8 border border-primary-light-3 px-6 py-8 dark:border-primary-dark-3"
    >
        <HeaderProfile
            :name="menuItems.name"
            :position="menuItems.position"
        />
        <HeaderRoutesList :routes="menuItems.routes" />
        <HeaderRoutesList
            :routes="menuItems.resources"
            title="resources"
        />
        <CV :cv="menuItems.CV" />
    </header>
</template>
