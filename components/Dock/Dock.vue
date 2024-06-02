<script setup lang="ts">
import { removeTrailingSlash } from "~/utils/url";

const route = useRoute();

const path = removeTrailingSlash(route.path);
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
