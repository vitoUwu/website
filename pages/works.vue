<script setup lang="ts">
import works from "~/utils/works";

const months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

function plural(word: "ano" | "mês", amount: number) {
  const isPlural = amount !== 1;

  switch (word) {
    case "ano":
      return `${amount} ${isPlural ? "anos" : "ano"}`;
    case "mês":
      return `${amount} ${isPlural ? "meses" : "mês"}`;
  }
}

function toRelativeDate(date: Date) {
  const diff = (Date.now() - date.getTime()) / 1000;
  const years = Math.floor(diff / 31536000);
  const months = Math.floor((diff % 31536000) / 2628000);

  if (years > 0 && months > 0)
    return `há ${plural("ano", years)} e ${plural("mês", months)}`;
  if (years > 0) return `há ${plural("ano", years)}`;
  if (months > 0) return `há ${plural("mês", months)}`;
  return "Rescentemente";
}

function formatDate(date: Date) {
  return months[date.getMonth()] + " de " + date.getFullYear();
}

const title = "Works";
const description =
  "Uma lista de trabalhos que eu já fiz ao longo da minha carreira.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/working_cat.png",
  ogUrl: "https://vitoo.dev",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/working_cat.png",
  twitterCard: "summary",
});
</script>

<template>
  <div class="my-10 mx-10 min-h-dvh">
    <header class="mb-10">
      <nav class="flex justify-between items-center">
        <Anchor href="/" target="_self">
          <IconsArrowLeft :size="12" /> voltar
        </Anchor>
        <h1>Works</h1>
      </nav>
    </header>
    <div class="space-y-10">
      <div v-for="work of works" :key="work.name" class="group">
        <p class="flex items-center gap-3">
          <span
            class="shrink-0 [@media_(hover:_hover)]:text-zinc-400 [@media_(hover:_hover)]:group-hover:text-zinc-200 text-zinc-200 transition-all"
          >
            {{ work.name }}
          </span>
          <span class="flex flex-col shrink-0">
            <span
              class="text-emerald-600 [@media_(hover:_hover)]:text-zinc-600 [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all"
            >
              {{ work.role }}
            </span>
            <span
              class="sm:hidden text-emerald-600 [@media_(hover:_hover)]:text-zinc-600 [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all"
            >
              {{
                work.end
                  ? `${formatDate(work.start)} - ${formatDate(work.end)}`
                  : toRelativeDate(work.start)
              }}
            </span>
          </span>
          <span
            class="border-b border-dashed border-zinc-600 w-full [@media_(hover:_hover)]:group-hover:border-emerald-600 transition-all"
          />
          <span
            class="hidden sm:inline text-emerald-600 [@media_(hover:_hover)]:text-zinc-600 [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all shrink-0"
          >
            {{
              work.end
                ? `${formatDate(work.start)} - ${formatDate(work.end)}`
                : toRelativeDate(work.start)
            }}
          </span>
        </p>
        <p
          class="mt-3 [@media_(hover:_hover)]:text-zinc-400 text-zinc-200 transition-all [@media_(hover:_hover)]:group-hover:text-zinc-200"
        >
          {{ work.description }}
        </p>
      </div>
    </div>
  </div>
</template>
