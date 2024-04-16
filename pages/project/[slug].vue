<script setup lang="ts">
import repos from "~/utils/repos";

const route = useRoute();
const repositoryName = route.params.slug as string;
const repo = repos[repositoryName as keyof typeof repos];

const { data: readme } = await useAsyncData(repositoryName, () =>
  queryContent(`/projects/${repositoryName.toLowerCase()}`).findOne()
);

const title = repo ? repo.name : "404 :P";
const description = repo?.description;

useSeoMeta({
  title,
  description,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary",
  ogTitle: title,
  ogDescription: description,
  ogUrl: `https://vitoo.dev/project/${repositoryName}`,
});
</script>

<template>
  <template v-if="repo">
    <div class="my-10 mx-10 min-h-dvh">
      <header class="mb-10">
        <nav class="flex justify-between items-center gap-3 text-center">
          <Anchor href="/projects" target="_self">
            <IconsArrowLeft :size="12" /> voltar</Anchor
          >
          <h1>
            {{ repo.name }}
          </h1>
          <Anchor :href="repo.href">
            Github <IconsArrowSquareOut :size="14" />
          </Anchor>
        </nav>
      </header>
      <ContentRenderer
        class="prose prose-zinc prose-invert *:break-words h-full"
        :value="readme"
      />
    </div>
  </template>
  <template v-else>
    <NotFound />
  </template>
</template>
