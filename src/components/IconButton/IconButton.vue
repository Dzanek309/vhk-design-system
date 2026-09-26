<template>
  <button
    type="button"
    :disabled="disabled"
    :aria-label="label"
    :class="[sizeClasses[size], colorClasses[variant][purpose]]"
    class="rounded-full inline-flex justify-center items-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-default disabled:pointer-events-none"
  >
    <Icon :name="icon" :size="iconSizes[size]" class="shrink-0"></Icon>
  </button>
</template>
<script lang="ts" setup>
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/icon-names.js";
import type { IconSize } from "../Icon/Icon.vue";
export type IconButtonSize = "lg" | "md" | "sm";
export type IconButtonPurpose =
  "intent" | "primary" | "secondary" | "blue-accent" | "purple-accent";
export type IconButtonVariant = "solid" | "alternative";

withDefaults(
  defineProps<{
    size?: IconButtonSize;
    purpose?: IconButtonPurpose;
    variant?: IconButtonVariant;
    disabled?: boolean;
    icon: IconName;
    label: string;
  }>(),
  {
    size: "md",
    purpose: "primary",
    variant: "solid",
    disabled: false,
  },
);

const sizeClasses: Record<IconButtonSize, string> = {
  lg: "size-10",
  md: "size-8",
  sm: "size-7",
};

const iconSizes: Record<IconButtonSize, IconSize> = {
  lg: "xl",
  md: "md",
  sm: "sm",
};

const colorClasses: Record<IconButtonVariant, Record<IconButtonPurpose, string>> = {
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
  alternative: {
    primary:
      "inset-ring-2 text-brand-border-default hover:text-brand-border-strong active:bg-brand-background-subtle-pressed active:text-brand-text-strong active:inset-ring-brand-border-strong disabled:text-text-disabled disabled:inset-ring-border-disabled",
    secondary:
      "inset-ring-2 text-border-default hover:text-border-strong active:bg-surface-raised-pressed active:text-text-primary active:inset-ring-border-strong disabled:text-text-disabled disabled:inset-ring-border-disabled",
    intent:
      "inset-ring-2 text-border-inverse hover:text-border-inverse-hover active:bg-surface-raised-pressed active:text-text-primary active:inset-ring-border-inverse disabled:text-text-disabled disabled:inset-ring-border-disabled",
    "blue-accent":
      "inset-ring-2 text-accent-blue-border-default hover:text-accent-blue-border-strong active:bg-accent-blue-background-subtle-pressed active:text-accent-blue-text-strong active:inset-ring-accent-blue-border-strong disabled:text-text-disabled disabled:inset-ring-border-disabled",
    "purple-accent":
      "inset-ring-2 text-accent-purple-border-default hover:text-accent-purple-border-strong active:bg-accent-purple-background-subtle-pressed active:text-accent-purple-text-strong active:inset-ring-accent-purple-border-strong disabled:text-text-disabled disabled:inset-ring-border-disabled",
  },
};
</script>
