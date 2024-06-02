<script setup lang="ts">
import works from "~/utils/works";

const title = "Works";
const description =
  "Uma lista de trabalhos que eu já fiz ao longo da minha carreira.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/working_cat.png",
  ogUrl: "https://vitoo.dev",
  ogType: "website",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/working_cat.png",
  twitterCard: "summary",
});
</script>

<template>
  <div class="my-10 mx-3 sm:mx-10 min-h-dvh">
    <header class="mb-10">
      <nav class="flex justify-between items-center">
        <BackButton />
        <h1>{{ $t("pages.works.title") }}</h1>
      </nav>
    </header>
    <main>
      <ul class="space-y-10">
        <Work v-bind="work" v-for="work of works" :key="work.name" />
      </ul>
    </main>
  </div>
</template>
