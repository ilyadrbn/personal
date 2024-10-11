<script setup lang="ts">
const props = defineProps<{ theme: string }>();

const emit = defineEmits<{
    (e: "toggleTheme"): void;
}>();

const iconMode: ComputedRef<string> = computed(() => {
    return props.theme === "dark"
        ? "meteocons:dust-day-fill"
        : "meteocons:dust-night-fill";
});

const toggleTheme = (): void => {
    emit("toggleTheme");
};
</script>

<template>
    <ColorScheme
        placeholder=""
        tag="button"
    >
        <button
            class="fixed bottom-0 right-0 z-50 m-4 rounded-full bg-primary-light-5 p-4 transition-colors hover:bg-primary-light-3 dark:bg-primary-dark-5 dark:hover:bg-primary-dark-3"
            aria-label="Toggle Theme"
            @click.prevent="toggleTheme"
        >
            <p class="sr-only">Toggle theme</p>
            <Icon
                :name="iconMode"
                size="48"
                mode="svg"
            />
        </button>
    </ColorScheme>
</template>
