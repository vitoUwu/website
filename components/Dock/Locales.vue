<script setup lang="ts">
const { availableLocales, locale: currentLocale } = useI18n();
const switchLocale = useSwitchLocalePath();
</script>

<template>
  <div
    class="transition-all ease-in-out duration-500 bg-zinc-900 rounded border-zinc-700 border flex gap-1 items-center p-1 text-zinc-300 text-sm shadow-lg shadow-black shrink-0"
  >
    <template :key="locale" v-for="locale of availableLocales">
      <NuxtLink
        :to="switchLocale(locale)"
        class="group flex gap-2 items-center justify-center px-3 py-1 rounded border"
        :class="{
          'text-zinc-400 bg-zinc-800/20 border-transparent':
            currentLocale !== locale,
          'text-emerald-500 bg-green-800/20 border-emerald-500/30':
            currentLocale === locale,
        }"
      >
        <img
          :src="flags[locale as keyof typeof flags]"
          :alt="$t(`locales.${locale}`)"
          loading="lazy"
          class="size-6"
          height="24"
          width="24"
        />
        {{ $t(`locales.${locale}`) }}
      </NuxtLink>
    </template>
  </div>
</template>
