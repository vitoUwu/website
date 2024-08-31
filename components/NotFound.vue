<script setup lang="ts">
const { text, href } = withDefaults(
  defineProps<{ text?: string; href?: string }>(),
  {
    text: "Page not found",
    href: "/projects",
  }
);
</script>

<template>
  <main class="flex flex-col items-center z-0">
    <div class="relative mb-10">
      <h1>{{ text }}</h1>
      <span
        class="absolute text-orange-300 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 text-7xl font-bold opacity-20 -z-[1]"
      >
        404
      </span>
    </div>
    <BackButton :href="href" />
  </main>
</template>
