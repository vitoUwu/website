<script setup lang="ts">
const { t } = useI18n();

const title = "vitoo";
const description = t("pages.home.head.description");

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/cat.png",
  ogUrl: "https://vitoo.dev",
  ogType: "website",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/cat.png",
  twitterCard: "summary",
});
</script>

<template>
  <main class="mx-3 sm:mx-10 my-10">
    <h1 class="text-xl font-bold">Victor "vitoo" Hugo M. Del Grandi</h1>
    <div class="">
      <h2 class="inline items-center justify-between w-full text-orange-200">
        {{ $t("roles.fullstack") }}
        <span
          class="inline-block align-middle size-1 bg-orange-200 rounded-full"
        />
        {{ $t("common.brazilian") }}
      </h2>
    </div>
    <p class="my-10 text-pretty" v-html="$t('pages.home.description')"></p>
    <Anchor target="_self" href="/projects">
      {{ $t("common.projects") }}
    </Anchor>
    <Anchor target="_self" href="/works">
      {{ $t("common.works") }}
    </Anchor>
    <hr
      class="w-full h-px bg-gradient-to-r border-none from-stone-800 via-stone-700 to-stone-800 my-3"
    />
    <Anchor href="/curriculum.pdf">
      Curriculum Vitae <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor rel="noopener noreferrer" href="https://github.com/vitoUwu">
      Github <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor rel="noopener noreferrer" href="https://linkedin.com/in/vitoo">
      LinkedIn <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor
      rel="noopener noreferrer"
      href="mailto:victorhugomeurerdelgrandi@gmail.com"
    >
      Email <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
  </main>
</template>
