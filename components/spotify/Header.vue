<script setup lang="ts">
const { songName, songArtist, trackId } = defineProps<{
  songName: string;
  songArtist: string;
  trackId: string;
}>();
</script>

<template>
  <a
    :href="`https://open.spotify.com/track/${trackId}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="font-newsreader underline">{{ songName }}</span>
    <span class="text-neutral-500 text-xs"> by </span>
    <span class="font-newsreader underline">{{ songArtist }}</span>
  </a>
</template>
