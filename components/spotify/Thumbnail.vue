<script setup lang="ts">
const { thumbnailURL } = defineProps<{ thumbnailURL: string }>();
</script>

<template>
  <div class="size-16 relative shrink-0">
    <img
      class="aspect-square size-full absolute inset-0 object-cover blur-md -z-[1]"
      :src="thumbnailURL"
      alt="album art"
      loading="lazy"
    />
    <img
      class="aspect-square size-full"
      :src="thumbnailURL"
      alt="album art"
      loading="lazy"
    />
  </div>
</template>
