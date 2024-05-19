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
          class="shrink-0 text-zinc-300 group-hover:text-emerald-500 transition-all flex items-center gap-3"
        >
          <template v-if="isFork">
            <IconsForkFill :size="16" />
          </template>
          {{ name }}
        </span>
        <span
          v-if="language"
          class="text-[#A2A2A9] group-hover:text-emerald-600 text-xs transition-all shrink-0"
        >
          {{ ` ${language}` }}
        </span>
        <span
          class="border-b border-dashed border-zinc-500 w-full group-hover:border-emerald-600 transition-all"
        />
      </a>
    </h3>
  </li>
</template>
