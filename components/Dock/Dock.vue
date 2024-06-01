<script setup lang="ts">
const route = useRoute();

function removeTraillingSlash(path: string) {
  return path.replace(/\/$/, "");
}

const path = removeTraillingSlash(route.path);
const pathsToShowSpotify = ["/", "/en"];
const showSpotify = pathsToShowSpotify.includes(path);
</script>

<template>
  <div
    class="fixed gap-2 bottom-5 left-3 right-3 sm:left-5 sm:right-5 flex justify-between items-end"
  >
    <DockSpotify v-if="showSpotify" />
    <DockLocales />
  </div>
</template>
