<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue";

const localePath = useLocalePath();

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {
  href: string;
}

defineProps<Props>();
defineOptions({
  name: "Anchor",
  inheritAttrs: false,
});
</script>

<template>
  <a
    target="_blank"
    v-bind="$attrs"
    :href="localePath(href)"
    class="flex items-center gap-3 w-fit text-orange-100 hover:text-orange-50 transition-colors px-1 -mx-1 rounded"
    rel="noopener noreferrer"
  >
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </a>
</template>
