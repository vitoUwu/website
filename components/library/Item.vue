<script setup lang="ts">
import type { Book } from "~/utils/content/library";

defineProps<{ book: Book }>();
defineOptions({
  name: "BookItem",
});
</script>

<template>
  <li
    class="border transition-all border-transparent hover:border-neutral-700 -mt-px -mr-px text-center flex justify-start items-center flex-col"
  >
    <a :href="book.url" target="_blank" class="p-2 sm:p-5">
      <img
        :src="book.cover"
        :alt="book.title"
        loading="lazy"
        class="aspect-[128/156] object-cover"
      />
      <span class="mt-3 line-clamp-3">{{ book.title }}</span>
      <span class="mt-1 line-clamp-3 text-xs text-neutral-500">
        {{ book.author }}
      </span>
    </a>
  </li>
</template>
