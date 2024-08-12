<script setup lang="ts">
const localePath = useLocalePath();

interface Props {
  href: string;
  isFork: boolean;
  name: string;
  language: string | null;
}

defineProps<Props>();
defineOptions({
  name: "Repository",
});
</script>

<template>
  <li>
    <h3>
      <a
        :href="localePath(`/project/${href.split('/').pop()}`)"
        :key="href"
        class="flex items-center gap-3 group"
      >
        <span
          class="shrink-0 text-orange-100 hover:text-orange-50 transition-all flex items-center gap-3"
        >
          <template v-if="isFork">
            <IconsForkFill :size="16" class="text-orange-300" />
          </template>
          {{ name }}
        </span>
        <span
          v-if="language"
          class="text-stone-400 group-hover:text-orange-300 text-xs transition-all shrink-0"
        >
          {{ ` ${language}` }}
        </span>
        <span
          class="border-b border-dashed border-stone-500 w-full group-hover:border-orange-300 transition-all"
        />
      </a>
    </h3>
  </li>
</template>
