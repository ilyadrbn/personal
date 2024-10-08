<script setup lang="ts">
const props = defineProps<{
    route: TMenuRoutes | TMenuResources;
}>();

const blank: ComputedRef<boolean> = computed(() => {
    return "blank" in props.route ? true : false;
});
</script>

<template>
    <NuxtLink
        :to="route.href"
        class="flex items-center gap-4 p-3"
        :target="blank ? '_blank' : '_self'"
    >
        <Icon
            :name="route.icon"
            size="22"
        />
        <p class="font-manrope text-lg font-medium">
            {{ route.title }}
        </p>
    </NuxtLink>
</template>
