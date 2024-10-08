<script setup lang="ts">
const props = defineProps<{ theme: string }>();

const iconMode = computed(() => {
    return props.theme === "dark"
        ? "meteocons:dust-day-fill"
        : "meteocons:dust-night-fill";
});
</script>

<template>
    <button class="fixed bottom-0 right-0 m-4 rounded-full p-4">
        <Icon
            :name="iconMode"
            size="48"
            mode="svg"
        />
    </button>
</template>
