<script setup lang="ts">
const { path } = useRoute();
</script>

<template>
  <div
    class="fixed gap-2 bottom-5 left-3 right-3 sm:left-5 sm:right-5 flex justify-between items-end"
  >
    <DockSpotify v-if="path === '/'" />
    <DockLocales />
  </div>
</template>
