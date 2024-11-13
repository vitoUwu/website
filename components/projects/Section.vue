<script setup lang="ts">
import Section from "~/components/Section.vue";
import { projects } from "~/utils/content/projects";
import Project from "./Project.vue";
</script>

<template>
  <Section id="projects" :title="$t('projects.title')">
    <ul class="space-y-5">
      <Project
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </ul>
  </Section>
</template>
