<script setup lang="ts">
import BookItem from "~/components/library/Item.vue";
import Section from "~/components/Section.vue";
import { books } from "~/utils/content/library";
</script>

<template>
  <Section title="library" id="library">
    <ul class="grid grid-cols-3 sm:grid-cols-4">
      <BookItem v-for="book in books" :key="book.title" :book="book" />
    </ul>
  </Section>
</template>
