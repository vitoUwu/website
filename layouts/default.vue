<script setup lang="ts">
import { removeTrailingSlash } from "~/utils/url";

const { t } = useI18n();
const route = useRoute();

useHead(() => ({
  htmlAttrs: {
    lang: t("head.lang"),
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/cat.png",
    },
    {
      rel: "canonical",
      href: removeTrailingSlash(`https://vitoo.dev${route.path}`),
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&family=Newsreader:opsz@6..72&display=swap",
      rel: "stylesheet",
    },
  ],
  bodyAttrs: {
    class: "bg-neutral-900 text-neutral-200 font-inter",
  },
}));
</script>

<template>
  <div class="m-3 flex flex-col py-10 px-3 text-sm lowercase">
    <main class="max-w-2xl mx-auto w-full">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: "Lora", monospace;
}

::selection {
  background-color: theme("colors.neutral.100");
  color: theme("colors.neutral.900");
}
</style>
