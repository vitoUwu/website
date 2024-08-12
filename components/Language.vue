<script setup lang="ts">
interface Props {
  language: string;
  amount: number;
  percentage: number;
  index: number;
}

defineProps<Props>();
defineOptions({
  name: "Language",
});
</script>

<template>
  <li class="relative">
    <div
      class="flex items-center gap-3 group text-orange-100 hover:text-orange-50"
    >
      <h3 class="shrink-0 transition-all">
        <span class="text-orange-300">{{ index + 1 }}.</span>
        {{ language }}
      </h3>
      <p
        class="text-stone-400 group-hover:text-current text-xs transition-all shrink-0 lowercase"
      >
        {{ amount }} {{ $t("common.projects") }} - ({{
          percentage.toFixed(2)
        }}%)
      </p>
      <span
        class="border-b border-dashed border-stone-500 w-full group-hover:border-orange-100 transition-all"
      />
    </div>
  </li>
</template>
