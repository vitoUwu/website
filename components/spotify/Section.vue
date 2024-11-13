<script setup lang="ts">
import Section from "~/components/Section.vue";
import Thumbnail from "./Thumbnail.vue";
import Header from "./Header.vue";
import Timeline from "./Timeline.vue";

const { connect, disconnect, data, state } = useLanyard("504717946124369937");

const spotify = computed(() => data.value?.spotify);
const start = ref(0);
const end = ref(0);
const interval = ref<ReturnType<typeof setTimeout> | null>(null);

watch(spotify, () => {
  if (interval.value) {
    clearInterval(interval.value);
  }

  if (!spotify.value) {
    start.value = 0;
    end.value = 0;
    return;
  }

  start.value = Math.floor(
    (Date.now() - spotify.value.timestamps.start) / 1000
  );
  end.value = Math.floor(
    (spotify.value.timestamps.end - spotify.value.timestamps.start) / 1000
  );

  interval.value = setInterval(() => {
    start.value = start.value + 1;
  }, 1000);
});

onMounted(() => {
  connect();
});

onBeforeUnmount(() => {
  disconnect();
});
</script>

<template>
  <Section id="spotify" title="listening to">
    <Transition name="bottom-to-top" mode="out-in">
      <template v-if="state === 'disconnected'">
        <p>disconnected</p>
      </template>
      <template v-else-if="state === 'connecting'">
        <p>loading...</p>
      </template>
      <template v-else-if="spotify">
        <div
          :id="spotify.track_id"
          :key="spotify.track_id"
          class="flex items-center gap-3 w-full"
        >
          <Thumbnail :thumbnailURL="spotify.album_art_url" />
          <div class="w-full">
            <Header
              :songName="spotify.song"
              :songArtist="spotify.artist"
              :trackId="spotify.track_id"
            />
            <Timeline :start="start" :end="end" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center gap-3 w-full">
          <div class="w-full">
            <p class="font-newsreader underline">nothing</p>
            <Timeline :start="start" :end="end" />
          </div>
        </div>
      </template>
    </Transition>
  </Section>
</template>

<style scoped>
/* during entering and leaving : */
.bottom-to-top-leave-active {
  transition: all 0.2s ease-in-out;
}
.bottom-to-top-leave-to {
  transform: translateY(-32px);
  opacity: 0;
}

.bottom-to-top-enter-active {
  transition: all 0.2s ease-in-out;
}
.bottom-to-top-enter-from {
  transform: translateY(32px);
  opacity: 0;
}
</style>
