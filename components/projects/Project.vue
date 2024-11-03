<script setup lang="ts">
import type { Project } from "~/utils/content/projects";

const { project } = defineProps<{ project: Project }>();
const { name, description, url, repository } = project;
</script>

<template>
  <li>
    <h3 class="text-neutral-300 text-base font-newsreader">
      {{ name }}
    </h3>
    <p>{{ $t(description) }}</p>
    <div
      v-if="url || repository"
      class="flex gap-3 underline text-neutral-300 text-xs mt-1"
    >
      <a v-if="url" target="_blank" rel="noopener noreferrer" :href="url">
        {{ $t("projects.view") }}
      </a>
      <a
        v-if="repository"
        target="_blank"
        rel="noopener noreferrer"
        :href="repository"
      >
        {{ $t("projects.repository") }}
      </a>
    </div>
  </li>
</template>
