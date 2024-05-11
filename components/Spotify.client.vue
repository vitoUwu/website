<script setup lang="ts">
const { connect, disconnect, data } = useLanyard("504717946124369937"); // TODO: Save discord id in somewhere else
const expanded = ref(false);

function setExpanded(value: boolean) {
  expanded.value = value;
  if (value) {
    setTimeout(() => {
      expanded.value = false;
    }, 5000);
  }
}

onMounted(() => {
  connect();
  setExpanded(true);
});

onBeforeUnmount(() => {
  disconnect();
});

watch(data, (newData) => {
  if (newData?.spotify && !expanded.value) {
    setExpanded(true);
  }
});

function onClick(e: MouseEvent) {
  if (!window.matchMedia("(hover: none)").matches || expanded.value) {
    return;
  }

  e.preventDefault();
  setExpanded(true);
}
</script>

<template>
  <a
    :class="{
      'bottom-5': data?.spotify,
      '-bottom-64': !data?.spotify,
      'max-w-[74px] w-fit': expanded === false,
      'max-w-full right-5 md:right-[unset]': expanded === true,
    }"
    :href="
      data?.spotify?.track_id
        ? `https://open.spotify.com/track/${data.spotify.track_id}`
        : '#'
    "
    @click="onClick"
    rel="nofollow"
    class="transition-all ease-in-out duration-500 fixed overflow-hidden hover:max-w-full left-5 bg-zinc-900 rounded border-zinc-700 border flex gap-3 items-center p-1 text-zinc-300 text-sm group shadow-lg shadow-black"
  >
    <div class="relative size-16 shrink-0">
      <div
        :class="{
          'opacity-0': expanded === true,
        }"
        class="absolute inset-0 duration-500 transition-all group-hover:opacity-0 flex justify-center items-center bg-black/80"
      >
        <IconsSpotify :size="32" class="animate-pulse text-zinc-700" />
      </div>
      <img
        v-if="data?.spotify?.album_art_url"
        :src="data?.spotify?.album_art_url"
        :alt="data?.spotify?.album"
        class="rounded border border-zinc-700"
        width="64"
        height="64"
      />
    </div>
    <div class="flex flex-col shrink-0 pr-3 mask" v-if="data?.spotify">
      <p class="text-marquee relative">
        <span>
          Listening to
          <span class="text-emerald-500">{{ data?.spotify?.song }}</span>
        </span>
        <span class="absolute left-[calc(100%+12px)] shrink-0 w-full md:hidden">
          Listening to
          <span class="text-emerald-500">{{ data?.spotify?.song }}</span>
        </span>
      </p>
      <p class="text-xs text-marquee relative">
        <span>
          by <span class="text-emerald-500">{{ data?.spotify?.artist }}</span>
        </span>
        <span class="absolute left-[calc(100%+12px)] shrink-0 w-full md:hidden">
          by
          <span class="text-emerald-500">{{ data?.spotify?.artist }}</span>
        </span>
      </p>
    </div>
  </a>
</template>

<style scoped>
@media screen and (max-width: 640px) {
  .mask {
    mask-image: linear-gradient(
      to right,
      transparent 1%,
      white 10%,
      white 90%,
      transparent
    );
  }
}

@media screen and (max-width: 640px) {
  .text-marquee {
    animation: marquee 10s linear infinite;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    /* 12px = gap between the original text and the copy */
    transform: translateX(calc(-100% - 12px));
  }
}
</style>
