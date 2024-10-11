<script setup lang="ts">
defineProps<{
    name: string;
    position: string;
}>();
</script>

<template>
    <div class="aside-header__profile mb-6 flex gap-4 max-lg:h-auto">
        <NuxtImg
            format="webp"
            src="/IAM.webp"
            class="h-full rounded-lg border-4 dark:border-primary-dark-5"
            alt="profile"
            sizes="lg:56px xs:46px"
        />
        <div
            class="aside-header__profile-info flex flex-col justify-between font-manrope"
        >
            <p class="text-xl">{{ name }}</p>
            <p class="text-base dark:text-primary-light-3">
                {{ position }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
