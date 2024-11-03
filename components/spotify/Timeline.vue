<script setup lang="ts">
const { start, end } = defineProps<{
  start: number;
  end: number;
}>();
</script>

<template>
  <div class="px-1 pb-1">
    <div class="mt-2 flex justify-between w-full">
      <span class="text-xs text-neutral-500">
        {{ Math.floor(start / 60) }}:{{
          `${Math.floor(start) % 60}`.padStart(2, "0")
        }}
      </span>
      <span class="text-xs text-neutral-500">
        {{ Math.floor(end / 60) }}:{{
          `${Math.floor(end) % 60}`.padStart(2, "0")
        }}
      </span>
    </div>
    <div
      class="mt-2 flex w-full h-1 ring-1 ring-offset-neutral-900 ring-offset-2 ring-neutral-500"
    >
      <div
        class="bg-neutral-500 h-full transition-[width] duration-1000 ease-linear"
        :style="{
          width: `${(start / end) * 100}%`,
        }"
      />
    </div>
  </div>
</template>
