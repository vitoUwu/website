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
        class="shrink-0 [@media_(hover:_hover)]:text-orange-100 [@media_(hover:_hover)]:group-hover:text-orange-50 text-orange-100 transition-all"
      >
        {{ name }}
      </span>
      <span class="flex flex-col shrink-0">
        <span
          class="text-orange-100 [@media_(hover:_hover)]:text-stone-400 [@media_(hover:_hover)]:group-hover:text-orange-200 text-xs transition-all"
        >
          {{ $t(`roles.${role}`) }}
        </span>
        <span
          class="lowercase sm:hidden text-orange-200 [@media_(hover:_hover)]:text-stone-400 [@media_(hover:_hover)]:group-hover:text-orange-200 text-xs transition-all"
        >
          {{
            end
              ? `${formatDate(start)} - ${formatDate(end)}`
              : formatRelativeData(start)
          }}
        </span>
      </span>
      <span
        class="border-b border-dashed border-stone-400 w-full [@media_(hover:_hover)]:group-hover:border-orange-300 transition-all"
      />
      <span
        class="lowercase hidden sm:inline text-orange-200 [@media_(hover:_hover)]:text-stone-400 [@media_(hover:_hover)]:group-hover:text-orange-200 text-xs transition-all shrink-0"
      >
        {{
          end
            ? `${formatDate(start)} - ${formatDate(end)}`
            : formatRelativeData(start)
        }}
      </span>
    </h2>
    <p
      class="mt-3 [@media_(hover:_hover)]:text-stone-400 text-stone-200 transition-all [@media_(hover:_hover)]:group-hover:text-stone-200"
    >
      {{ $t(description) }}
    </p>
  </li>
</template>
