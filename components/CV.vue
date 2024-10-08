<script setup lang="ts">
defineProps<{
    cv: TMenuCV;
}>();
</script>

<template>
    <button
        class="mt-auto flex flex-row items-center gap-4 rounded-xl border border-primary-light-3 p-3 transition-colors hover:bg-primary-light-3 dark:border-primary-dark-3 dark:hover:bg-primary-dark-3"
    >
        <Icon
            :name="cv.icon"
            size="22"
        />
        <p class="font-manrope text-lg font-medium">
            {{ cv.title }}
        </p>
    </button>
</template>

<style scoped></style>
