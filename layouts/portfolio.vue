<script setup lang="ts">
const setColorScheme = (newTheme: TTheme) => {
    useColorMode().preference = newTheme;
};
</script>

<template>
    <div
        id="portfolio-layout"
        class="flex min-h-screen flex-row dark:bg-primary-dark-2 dark:text-primary-light-1 max-lg:flex-col" 
    >
        <HeaderAside />
        <slot />
        <ToggleThemeBtn
            :theme="$colorMode.preference"
            @toggle-theme="
                setColorScheme(
                    $colorMode.preference === 'dark' ? 'light' : 'dark',
                )
            "
        />
    </div>
</template>
