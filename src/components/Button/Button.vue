<template>
  <button
    type="button"
    :disabled="disabled"
    class="rounded-sm inline-flex whitespace-nowrap items-center justify-center font-body cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-default disabled:pointer-events-none"
    :class="[sizeClasses[size], colorClasses[variant][purpose]]"
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
    ></Icon>
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/icon-names";
import type { IconSize } from "../Icon/Icon.vue";
export type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";
export type ButtonPurpose =
  "intent" | "primary" | "secondary" | "purple-accent" | "blue-accent";
export type ButtonVariant = "solid" | "outline" | "alternative";

withDefaults(
  defineProps<{
    size?: ButtonSize;
    purpose?: ButtonPurpose;
    variant?: ButtonVariant;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
  }>(),
  {
    size: "md",
    purpose: "primary",
    variant: "solid",
    disabled: false,
    iconLeft: undefined,
    iconRight: undefined,
  },
);

const sizeClasses: Record<ButtonSize, string> = {
  xl: "h-12 px-sm gap-2xs text-xl",
  lg: "h-10 px-2xs gap-2xs text-lg",
  md: "h-8 px-2xs gap-3xs text-sm",
  sm: "h-7 px-2xs gap-3xs text-sm",
  xs: "h-5 px-3xs gap-3xs text-xs",
};

const iconSizes: Record<ButtonSize, IconSize> = {
  xl: "xl",
  lg: "md",
  md: "md",
  sm: "sm",
  xs: "xs",
};

const colorClasses: Record<ButtonVariant, Record<ButtonPurpose, string>> = {
  solid: {
    primary:
      "bg-brand-background-default text-brand-text-on-default hover:bg-brand-background-default-hover active:bg-brand-background-default-pressed disabled:bg-brand-background-subtle-disabled disabled:text-text-disabled",
    secondary:
      "bg-surface-raised text-text-primary hover:bg-surface-raised-hover active:bg-surface-raised-pressed disabled:bg-surface-base-disabled disabled:text-text-disabled",
    intent:
      "bg-surface-inverse text-text-inverse hover:bg-surface-inverse-hover active:bg-surface-inverse-pressed disabled:bg-surface-base-disabled disabled:text-text-disabled",
    "blue-accent":
      "bg-accent-blue-background-default text-accent-blue-text-on-default hover:bg-accent-blue-background-default-hover active:bg-accent-blue-background-default-pressed disabled:bg-accent-blue-background-subtle-disabled disabled:text-text-disabled",
    "purple-accent":
      "bg-accent-purple-background-default text-accent-purple-text-on-default hover:bg-accent-purple-background-default-hover active:bg-accent-purple-background-default-pressed disabled:bg-accent-purple-background-subtle-disabled disabled:text-text-disabled",
  },
  outline: {
    primary:
      "border-2 border-brand-border-default text-brand-text-on-default hover:border-brand-border-strong active:bg-brand-background-subtle-pressed active:border-brand-border-strong disabled:border-border-disabled disabled:text-text-disabled",
    secondary:
      "border-2 border-border-default text-text-primary hover:border-border-strong active:bg-surface-raised-pressed active:border-border-strong disabled:border-border-disabled disabled:text-text-disabled",
    intent:
      "border-2 border-border-inverse text-border-inverse hover:border-border-inverse-hover active:bg-surface-raised-pressed active:text-text-primary disabled:border-border-disabled disabled:text-text-disabled",
    "blue-accent":
      "border-2 border-accent-blue-border-default text-accent-blue-text-on-default hover:border-accent-blue-border-strong active:bg-accent-blue-background-subtle-pressed active:border-accent-blue-border-strong active:text-accent-blue-text-on-subtle disabled:border-border-disabled disabled:text-text-disabled",
    "purple-accent":
      "border-2 border-accent-purple-border-default text-accent-purple-text-on-default hover:border-accent-purple-border-strong active:bg-accent-purple-background-subtle-pressed active:border-accent-purple-border-strong active:text-accent-purple-text-on-subtle disabled:border-border-disabled disabled:text-text-disabled",
  },
  alternative: {
    primary:
      "border-2 border-brand-border-default text-brand-border-default hover:border-brand-border-strong hover:text-brand-border-strong active:bg-brand-background-subtle-pressed active:border-brand-border-strong active:text-brand-text-strong disabled:border-border-disabled disabled:text-text-disabled",
    secondary:
      "border-2 border-border-default text-border-default hover:border-border-strong hover:text-border-strong active:bg-surface-raised-pressed active:border-border-strong active:text-text-primary disabled:border-border-disabled disabled:text-text-disabled",
    intent:
      "border-2 border-border-inverse text-border-inverse hover:border-border-inverse-hover hover:text-border-inverse-hover active:bg-surface-raised-pressed active:text-text-primary disabled:border-border-disabled disabled:text-text-disabled",
    "blue-accent":
      "border-2 border-accent-blue-border-default text-accent-blue-border-default hover:border-accent-blue-border-strong hover:text-accent-blue-border-strong active:bg-accent-blue-background-subtle-pressed active:border-accent-blue-border-strong active:text-accent-blue-text-strong disabled:border-border-disabled disabled:text-text-disabled",
    "purple-accent":
      "border-2 border-accent-purple-border-default text-accent-purple-border-default hover:border-accent-purple-border-strong hover:text-accent-purple-border-strong active:bg-accent-purple-background-subtle-pressed active:border-accent-purple-border-strong active:text-accent-purple-text-strong disabled:border-border-disabled disabled:text-text-disabled",
  },
};
</script>
