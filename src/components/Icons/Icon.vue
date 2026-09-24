<template>
  <span v-html="svg"></span>
</template>
<script lang="ts" setup>
import { computed } from "vue";
export type IconSize = "xl" | "lg" | "md" | "sm" | "xs";
export type IconName =
  | "check"
  | "chevron-compact-down"
  | "chevron-compact-up"
  | "circle"
  | "exclamation-mark"
  | "hexagon"
  | "horizontal-dots"
  | "info-small"
  | "maximize"
  | "minimize"
  | "minus"
  | "plus"
  | "vertical-dots"
  | "x";

const props = withDefaults(
  defineProps<{
    size?: IconSize;
    name: IconName;
  }>(),
  {
    size: "md",
  },
);

const icons = import.meta.glob<string>("../../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const svg = computed(() => {
  return icons[`../../assets/icons/icon-${props.name}.svg`];
});
</script>
