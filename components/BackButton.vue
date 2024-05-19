<script setup lang="ts">
interface Props {
  href?: string;
}

withDefaults(defineProps<Props>(), {
  href: "/",
});
</script>

<template>
  <Anchor :href="href" target="_self">
    <IconsArrowLeft #left-icon :size="12" />
    {{ $t("common.back") }}
  </Anchor>
</template>
