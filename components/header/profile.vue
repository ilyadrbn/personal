<script setup lang="ts">
defineProps<{
    name: string;
    position: string;
}>();
</script>

<template>
    <div
        class="aside-header__profile mb-6 flex w-max gap-4 max-lg:sticky max-lg:top-0 max-lg:z-[1] max-lg:h-auto max-lg:bg-primary-light-1 max-lg:w-auto"
    >
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
