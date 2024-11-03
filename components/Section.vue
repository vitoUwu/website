<script setup lang="ts">
defineProps<{ title: string }>();
defineOptions({ name: "Section" });
</script>

<template>
  <section
    id="about"
    class="text-neutral-400 space-y-3 scroll-mt-10 border-b border-neutral-800 py-10"
  >
    <h2 class="text-neutral-500 font-medium font-newsreader">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
