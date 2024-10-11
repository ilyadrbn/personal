<script setup lang="ts">
defineProps<{
    routes: Array<TMenuRoutes | TMenuResources>;
    title?: string;
}>();
</script>

<template>
    <nav>
        <h3
            v-if="title"
            class="mb-4 font-manrope text-lg font-medium"
        >
            {{ title.toUpperCase() }}
        </h3>
        <ul class="flex flex-col gap-4">
            <li
                v-for="route in routes"
                :key="route.href"
                class="rounded-xl border border-primary-light-3 transition-colors hover:bg-primary-light-3 dark:border-primary-dark-3 dark:hover:bg-primary-dark-3"
            >
                <PrimaryLink :route />
            </li>
        </ul>
    </nav>
</template>
