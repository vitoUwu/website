<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed<string[]>(() => {
  return locales.value
    .filter((i) =>
      typeof i === "string" ? i !== locale.value : i.code !== locale.value
    )
    .map((i) => (typeof i === "string" ? i : i.code));
});
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale"
    :to="switchLocalePath(locale)"
  >
    > {{ $t("toggleLanguage") }}
  </NuxtLink>
</template>
