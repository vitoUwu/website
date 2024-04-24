<script setup lang="ts">
const { text, href } = withDefaults(
  defineProps<{ text?: string; href?: string }>(),
  {
    text: "Projeto não encontrado",
    href: "/projects",
  }
);
</script>

<template>
  <main class="flex flex-col items-center z-0">
    <div class="relative">
      <h1>{{ text }}</h1>
      <span
        class="absolute text-emerald-600 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 text-7xl font-bold opacity-20 -z-[1]"
      >
        404
      </span>
    </div>
    <Anchor :href="href" target="_self" class="mt-10">
      <IconsArrowLeft :size="12" /> voltar
    </Anchor>
  </main>
</template>
