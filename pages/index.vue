<script setup lang="ts">
import Header from "~/components/Header.vue";
import Library from "~/components/library/Section.vue";
import Projects from "~/components/projects/Section.vue";
import About from "~/components/sections/About.vue";
import Spotify from "~/components/spotify/Section.vue";
import Work from "~/components/work/Section.vue";

const { t } = useI18n();

const title = "vitoo";
const description = t("head.description");

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: "https://vitoo.dev",
  ogType: "website",
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary",
});
</script>

<template>
  <main>
    <Header />
    <About />
    <Work />
    <Projects />
    <Library />
    <Spotify />
  </main>
</template>
