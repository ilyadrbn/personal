<script setup lang="ts">
const model = defineModel<boolean>();

const toggleMenu = () => {
    model.value = !model.value;
};
</script>

<template>
    <button
        class="fixed right-4 top-[19px] z-[2] hidden max-lg:block"
        @click.prevent="toggleMenu"
    >
        <Icon
            :name="model ? 'mdi:close' : 'mdi:menu'"
            size="32"
        />
    </button>
</template>

<style scoped></style>
