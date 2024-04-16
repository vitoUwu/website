<script lang="ts" setup>
import repos from "~/utils/repos";

const title = "Projetos";
const description = "Aqui estão alguns dos meus projetos.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/cat.png",
  ogUrl: "https://vitoo.dev",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/cat.png",
  twitterCard: "summary",
});

const reposLength = Object.keys(repos).length;
</script>

<template>
  <div class="min-h-dvh py-10 mx-10">
    <header class="mb-10">
      <nav class="flex justify-between items-center">
        <Anchor href="/" target="_self">
          <IconsArrowLeft #left-icon :size="12" />
          voltar
        </Anchor>
        <h1>{{ reposLength }} Projetos</h1>
      </nav>
    </header>
    <div class="space-y-3">
      <a
        v-for="repo of repos"
        :href="`/project/${repo.href.split('/').pop()}`"
        :key="repo.href"
        class="flex items-center gap-3 group"
      >
        <span
          class="shrink-0 text-zinc-400 group-hover:text-zinc-200 transition-all"
        >
          {{ repo.name }}
        </span>
        <span
          v-if="repo.language"
          class="text-zinc-600 group-hover:text-emerald-600 text-xs transition-all shrink-0"
        >
          {{ repo.language }}
        </span>
        <span
          class="border-b border-dashed border-zinc-600 w-full group-hover:border-emerald-600 transition-all"
        />
      </a>
    </div>
  </div>
</template>
