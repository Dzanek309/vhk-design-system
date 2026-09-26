<template>
  <span
    :class="[sizeClasses[size], shapeClasses[shape], colorClasses[variant][purpose]]"
    class="inline-flex items-center whitespace-nowrap gap-3xs font-medium font-body justify-center"
  >
    <Icon
      v-if="iconLeft"
      :name="iconLeft"
      :size="iconSizes[size]"
      class="shrink-0"
    ></Icon>
    <slot></slot>
    <Icon
      v-if="iconRight"
      :name="iconRight"
      :size="iconSizes[size]"
      class="shrink-0"
    ></Icon
  ></span>
</template>
<script lang="ts" setup>
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/icon-names.js";
import type { IconSize } from "../Icon/Icon.vue";
export type PillSize = "lg" | "md" | "sm";
export type PillShape = "circle" | "square";
export type PillPurpose =
  "intent" | "primary" | "secondary" | "blue-accent" | "purple-accent";
export type PillVariant = "solid" | "alternative";

withDefaults(
  defineProps<{
    size?: PillSize;
    shape?: PillShape;
    purpose?: PillPurpose;
    variant?: PillVariant;
    iconLeft?: IconName;
    iconRight?: IconName;
  }>(),
  {
    size: "md",
    shape: "circle",
    purpose: "primary",
    variant: "solid",
    iconLeft: undefined,
    iconRight: undefined,
  },
);

const sizeClasses: Record<PillSize, string> = {
  lg: "h-7 py-3xs px-xs text-sm",
  md: "h-6 py-3xs px-2xs text-xs",
  sm: "h-4.5 px-2xs text-xs",
};

const iconSizes: Record<PillSize, IconSize> = {
  lg: "md",
  md: "md",
  sm: "sm",
};

const shapeClasses: Record<PillShape, string> = {
  circle: "rounded-full",
  square: "rounded-sm",
};

const colorClasses: Record<PillVariant, Record<PillPurpose, string>> = {
  solid: {
    primary: "bg-brand-background-default text-brand-text-on-default",
    secondary: "bg-surface-raised text-text-primary",
    intent: "bg-surface-inverse text-text-inverse",
    "blue-accent": "bg-accent-blue-background-default text-accent-blue-text-on-default",
    "purple-accent":
      "bg-accent-purple-background-default text-accent-purple-text-on-default",
  },
  alternative: {
    primary: "inset-ring inset-ring-brand-border-default text-brand-border-default",
    secondary: "inset-ring inset-ring-border-default text-border-default",
    intent: "inset-ring inset-ring-border-inverse text-border-inverse",
    "blue-accent":
      "inset-ring inset-ring-accent-blue-border-default text-accent-blue-border-default",
    "purple-accent":
      "inset-ring inset-ring-accent-purple-border-default text-accent-purple-border-default",
  },
};
</script>
