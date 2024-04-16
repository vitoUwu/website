<script setup lang="ts">
import works from "~/utils/works";
const date = new Date();
</script>

<template>
  <div class="my-10 mx-10 min-h-dvh">
    <header class="mb-10">
      <nav class="flex justify-between ic">
        <Anchor href="/" target="_self">
          <IconsArrowLeft :size="12" /> voltar
        </Anchor>
        <h1>Works</h1>
      </nav>
    </header>
    <div class="space-y-10">
      <div v-for="work of works" :key="work.name" class="group">
        <div class="flex items-center gap-3">
          <span
            class="shrink-0 [@media_(hover:_hover)]:text-zinc-400 [@media_(hover:_hover)]:group-hover:text-zinc-200 text-zinc-200 transition-all"
          >
            {{ work.name }}
          </span>
          <span
            class="text-emerald-600 [@media_(hover:_hover)]:text-zinc-600 [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all shrink-0"
          >
            {{ work.role }}
          </span>
          <span
            class="border-b border-dashed border-zinc-600 w-full [@media_(hover:_hover)]:group-hover:border-emerald-600 transition-all"
          />
        </div>
        <p
          class="mt-3 [@media_(hover:_hover)]:text-zinc-400 text-zinc-200 transition-all [@media_(hover:_hover)]:group-hover:text-zinc-200"
        >
          {{ work.description }}
        </p>
      </div>
    </div>
  </div>
</template>
