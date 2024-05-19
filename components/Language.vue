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
      class="flex items-center gap-3 group text-zinc-300 hover:text-emerald-500"
    >
      <h3 class="shrink-0 transition-all">
        <span class="text-emerald-600">{{ index + 1 }}.</span>
        {{ language }}
      </h3>
      <p
        class="text-[#A2A2A9] group-hover:text-current text-xs transition-all shrink-0 lowercase"
      >
        {{ amount }} {{ $t("common.projects") }} - ({{
          percentage.toFixed(2)
        }}%)
      </p>
      <span
        class="border-b border-dashed border-zinc-500 w-full group-hover:border-emerald-600 transition-all"
      />
    </div>
  </li>
</template>
