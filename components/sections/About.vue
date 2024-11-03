<script setup lang="ts">
import Section from "~/components/Section.vue";
</script>

<template>
  <Section :title="$t('about.title')">
    <p>
      {{ $t("about.0") }}
    </p>
    <p>
      {{ $t("about.1") }}
    </p>
    <p>
      {{ $t("about.2") }}
    </p>
    <p>
      {{ $t("about.3") }}
    </p>
  </Section>
</template>
