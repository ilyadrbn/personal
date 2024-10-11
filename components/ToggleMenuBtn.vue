<script setup lang="ts">
const model = defineModel<boolean>();

const toggleMenu = () => {
    model.value = !model.value;
};
</script>

<template>
    <button
        class="absolute right-2 top-2"
        @click.prevent="toggleMenu"
    >
        <Icon
            :name="model ? 'mdi:close' : 'mdi:menu'"
            size="32"
        />
    </button>
</template>

<style scoped></style>
