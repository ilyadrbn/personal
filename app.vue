<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: "overflow-hidden",
    },
});
</script>

<template>
    <NuxtLayout name="portfolio">
        <NuxtPage class="h-screen grow overflow-auto max-lg:h-0" />
    </NuxtLayout>
</template>
