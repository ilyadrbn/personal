<script setup lang="ts">
const setColorScheme = (newTheme: TTheme) => {
    useColorMode().preference = newTheme;
};
</script>

<template>
    <div
        id="portfolio-layout"
        class="dark:bg-primary-dark-2 dark:text-primary-light-1 light:bg-primary-light-2 light:text-primary-dark-1 flex min-h-screen flex-row"
    >
        <HeaderAside />
        <slot />
        <ToggleTheme
            :theme="$colorMode.preference"
            @click.prevent="
                setColorScheme(
                    $colorMode.preference === 'dark' ? 'light' : 'dark',
                )
            "
        />
    </div>
</template>
