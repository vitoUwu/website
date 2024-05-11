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

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://vitoo.dev/projects",
    },
  ],
});

const reposValues = Object.values(repos);
const reposLength = reposValues.length;

interface FullLanguage {
  language: string;
  amount: number;
  percentage: number;
}

const languagesPercentage = [
  ...new Set(reposValues.map((repo) => repo.language)),
]
  .map((language) => {
    const amount = reposValues.filter(
      (repo) => repo.language === language
    ).length;
    return {
      language,
      amount,
      percentage: (amount / reposLength) * 100,
    };
  })
  .filter((repo): repo is FullLanguage => !!repo.language)
  .sort((a, b) => b.amount - a.amount);
</script>

<template>
  <div class="min-h-dvh py-10 mx-3 sm:mx-10">
    <header class="mb-10">
      <nav class="flex justify-between items-center">
        <Anchor href="/" target="_self">
          <IconsArrowLeft #left-icon :size="12" />
          voltar
        </Anchor>
        <h1>{{ reposLength }} Projetos</h1>
      </nav>
    </header>
    <main>
      <h2 class="mb-3 text-lg">Linguagens mais utilizadas</h2>
      <ol class="mb-10 select-none space-y-3">
        <Language
          v-for="[index, language] in languagesPercentage.slice(0, 5).entries()"
          v-bind="language"
          :key="language.language"
          :index="index"
        />
      </ol>
      <h2 class="mb-3 text-lg">Meus repositórios</h2>
      <ol class="space-y-3 overflow-x-clip">
        <Repository :key="repo.href" v-for="repo of repos" v-bind="repo" />
      </ol>
    </main>
  </div>
</template>
