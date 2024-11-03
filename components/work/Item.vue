<script setup lang="ts">
import type { Work } from "~/utils/content/works";
const { t } = useI18n();

const { work } = defineProps<{
  work: Work;
}>();

const start = work.start.toLocaleDateString(t("head.lang"), {
  year: "numeric",
  month: "long",
});
const end = work.end
  ? work.end.toLocaleDateString(t("head.lang"), {
      year: "numeric",
      month: "long",
    })
  : t("works.now");

const workEnd = work.end || new Date();
const diff = Math.floor((workEnd.getTime() - work.start.getTime()) / 86400000);
const durationUnit = diff > 365 ? "years" : diff > 30 ? "months" : "days";
const durationQuantity = Math.floor(
  durationUnit === "years"
    ? diff / 365
    : durationUnit === "months"
    ? diff / 30
    : diff
);

const duration = `${durationQuantity} ${t(`works.${durationUnit}`)}`;
</script>

<template>
  <li>
    <div class="flex justify-between items-center">
      <h3 class="text-neutral-300 text-base font-newsreader">
        {{ work.name }}
      </h3>
      <Transition name="bottom-to-top" mode="out-in">
        <p
          :key="duration || new Date().toString()"
          class="text-xs text-neutral-500"
        >
          {{ start }} - {{ end }} ({{ duration }})
        </p>
      </Transition>
    </div>
    <p>
      {{ $t(work.description) }}
    </p>
  </li>
</template>
