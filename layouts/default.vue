<script setup lang="ts">
const { t } = useI18n();

useHead({
  htmlAttrs: {
    lang: t("head.lang"),
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/cat.png",
    },
  ],
});
</script>

<template>
  <Dock />
  <div class="bg-coal-black text-fog-gray pb-20">
    <div
      class="min-h-dvh flex flex-col justify-center max-w-2xl mx-auto w-full"
    >
      <slot />
    </div>
  </div>
</template>

<style>
body {
  font-family: "JetBrains Mono", monospace;
}

::selection {
  background-color: theme("colors.emerald.500");
  color: #000;
}
</style>
