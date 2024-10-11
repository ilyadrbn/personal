<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: "overflow-hidden",
    },
});
</script>

<template>
    <NuxtLayout name="portfolio">
        <NuxtPage class="h-0 grow overflow-auto" />
    </NuxtLayout>
</template>
