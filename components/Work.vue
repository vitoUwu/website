<script setup lang="ts">
interface Props {
  name: string;
  description: string;
  role: string;
  start: Date;
  end?: Date;
}

defineProps<Props>();
const { locale } = useI18n();
const { toRelativeData } = formatter.useRelativeData(locale.value);
const { t } = useI18n();

function formatRelativeData(date: Date) {
  const diff = (Date.now() - date.getTime()) / 1000;
  const years = Math.floor(diff / 31536000);
  const months = Math.floor((diff % 31536000) / 2628000);

  if (years > 0) return toRelativeData(-years, "years");
  if (months > 0) return toRelativeData(-months, "months");
  return t("common.recently");
}

function formatDate(date: Date) {
  return formatter.date(date, locale.value);
}
</script>

<template>
  <li class="group">
    <h2 class="flex items-center gap-3">
      <span
        class="shrink-0 [@media_(hover:_hover)]:text-zinc-400 [@media_(hover:_hover)]:group-hover:text-zinc-200 text-zinc-200 transition-all"
      >
        {{ name }}
      </span>
      <span class="flex flex-col shrink-0">
        <span
          class="text-emerald-600 [@media_(hover:_hover)]:text-[#A2A2A9] [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all"
        >
          {{ $t(`roles.${role}`) }}
        </span>
        <span
          class="lowercase sm:hidden text-emerald-600 [@media_(hover:_hover)]:text-[#A2A2A9] [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all"
        >
          {{
            end
              ? `${formatDate(start)} - ${formatDate(end)}`
              : formatRelativeData(start)
          }}
        </span>
      </span>
      <span
        class="border-b border-dashed border-zinc-600 w-full [@media_(hover:_hover)]:group-hover:border-emerald-600 transition-all"
      />
      <span
        class="lowercase hidden sm:inline text-emerald-600 [@media_(hover:_hover)]:text-[#A2A2A9] [@media_(hover:_hover)]:group-hover:text-emerald-600 text-xs transition-all shrink-0"
      >
        {{
          end
            ? `${formatDate(start)} - ${formatDate(end)}`
            : formatRelativeData(start)
        }}
      </span>
    </h2>
    <p
      class="mt-3 [@media_(hover:_hover)]:text-zinc-400 text-zinc-200 transition-all [@media_(hover:_hover)]:group-hover:text-zinc-200"
    >
      {{ $t(description) }}
    </p>
  </li>
</template>
