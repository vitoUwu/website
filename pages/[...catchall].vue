<script setup lang="ts">
const title = "404 :P";
const description = "Página não encontrada";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/404_not_found.png",
  ogUrl: "https://vitoo.dev",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/404_not_found.png",
  twitterCard: "summary",
});
</script>

<template>
  <NotFound text="Página não encontrada" href="/" />
</template>
