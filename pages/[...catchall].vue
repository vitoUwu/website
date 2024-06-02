<script setup lang="ts">
const { t } = useI18n();

const title = "404 :P";
const description = t("pages.404.head.description");

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/404_not_found.png",
  ogUrl: "https://vitoo.dev",
  ogType: "website",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/404_not_found.png",
  twitterCard: "summary",
});
</script>

<template>
  <NotFound :text="description" href="/" />
</template>
