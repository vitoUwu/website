<script setup lang="ts">
import Section from "~/components/Section.vue";
import WorkItem from "~/components/work/Item.vue";
import works from "~/utils/content/works";
</script>

<template>
  <Section title="work" id="work">
    <ul class="space-y-5">
      <WorkItem v-for="work in works" :key="work.name" :work="work" />
    </ul>
  </Section>
</template>
