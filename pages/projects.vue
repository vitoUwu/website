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

const reposValues = Object.values(repos);
const reposLength = reposValues.length;

const languagesPercentage = [
  ...new Set(reposValues.map((repo) => repo.language ?? "Unknown")),
]
  .map((language) => {
    const amount = reposValues.filter(
      (repo) =>
        (language === "Unknown" && !repo.language) || repo.language === language
    ).length;
    return {
      language,
      amount,
      percentage: (amount / reposLength) * 100,
    };
  })
  .sort((a, b) => b.amount - a.amount);
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
    <p class="mb-3">Linguagens mais usadas</p>
    <ul class="mb-10 select-none space-y-3">
      <li
        class="relative"
        v-for="(language, index) of languagesPercentage.slice(0, 5)"
        :key="language.language"
      >
        <div class="flex items-center gap-3">
          <span
            class="shrink-0 text-zinc-400 group-hover:text-zinc-200 transition-all"
          >
            <span class="text-emerald-600">{{ index + 1 }}.</span>
            {{ language.language }}
          </span>
          <span
            class="text-zinc-500 group-hover:text-emerald-600 text-xs transition-all shrink-0"
          >
            {{ language.amount }} projetos - ({{
              language.percentage.toFixed(2)
            }}%)
          </span>
          <span
            class="border-b border-dashed border-zinc-500 w-full group-hover:border-emerald-600 transition-all"
          />
        </div>
      </li>
    </ul>
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
          class="text-zinc-500 group-hover:text-emerald-600 text-xs transition-all shrink-0"
        >
          {{ repo.language }}
        </span>
        <span
          class="border-b border-dashed border-zinc-500 w-full group-hover:border-emerald-600 transition-all"
        />
      </a>
    </div>
  </div>
</template>
