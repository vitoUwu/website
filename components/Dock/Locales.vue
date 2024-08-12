<script setup lang="ts">
import flags from "~/utils/flags";

const { availableLocales, locale: currentLocale } = useI18n();
const switchLocale = useSwitchLocalePath();
</script>

<template>
  <div
    class="transition-all ease-in-out duration-500 bg-stone-950 rounded border-stone-800 border flex gap-1 items-center p-1 text-stone-300 text-sm shadow-lg shadow-coal-black shrink-0"
  >
    <template :key="locale" v-for="locale of availableLocales">
      <NuxtLink
        :to="switchLocale(locale)"
        class="group flex gap-2 items-center justify-center px-3 py-1 rounded border"
        :class="{
          'text-stone-400 bg-stone-800/40 border-transparent':
            currentLocale !== locale,
          'text-orange-300 bg-orange-300/10 border-orange-300/20':
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
