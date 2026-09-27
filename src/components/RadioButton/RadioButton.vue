<template>
  <label
    class="inline-flex items-start gap-2xs font-body text-text-primary has-disabled:text-text-disabled"
    :class="labelSizeClasses[size]"
  >
    <span class="relative inline-flex items-center justify-center">
      <input
        v-model="model"
        type="radio"
        :value="value"
        :name="name"
        :disabled="disabled"
        :class="[sizeClasses[size], purposeClasses[purpose]]"
        class="appearance-none rounded-full cursor-pointer disabled:cursor-not-allowed border-2 peer focus-visible:outline-none focus-visible:ring-2 disabled:border-border-disabled"
      />
      <span
        class="absolute pointer-events-none rounded-full hidden peer-checked:block peer-disabled:bg-icon-disabled"
        :class="[dotSizeClasses[size], dotColorClasses[purpose]]"
      ></span>
    </span>
    <slot></slot>
  </label>
</template>
<script lang="ts" setup>
export type RadioButtonSize = "lg" | "md" | "sm";
export type RadioButtonPurpose =
  "intent" | "primary" | "secondary" | "blue-accent" | "purple-accent";

withDefaults(
  defineProps<{
    value: string;
    name: string;
    size?: RadioButtonSize;
    purpose?: RadioButtonPurpose;
    disabled?: boolean;
  }>(),
  {
    size: "md",
    purpose: "primary",
    disabled: false,
  },
);
const model = defineModel<string>({ required: true });

const sizeClasses: Record<RadioButtonSize, string> = {
  lg: "size-6",
  md: "size-5",
  sm: "size-4",
};

const labelSizeClasses: Record<RadioButtonSize, string> = {
  lg: "text-md leading-sm",
  md: "text-sm leading-xs",
  sm: "text-xs leading-2xs",
};

const dotSizeClasses: Record<RadioButtonSize, string> = {
  lg: "size-2.5",
  md: "size-2",
  sm: "size-1.5",
};

const dotColorClasses: Record<RadioButtonPurpose, string> = {
  intent: "bg-icon-primary",
  primary: "bg-brand-icon-default",
  secondary: "bg-icon-primary",
  "blue-accent": "bg-accent-blue-icon-default",
  "purple-accent": "bg-accent-purple-icon-default",
};

const purposeClasses: Record<RadioButtonPurpose, string> = {
  intent:
    "border-border-inverse hover:border-border-inverse-hover focus-visible:ring-brand-ring-default",
  primary:
    "border-brand-border-subtle checked:border-brand-border-default hover:border-brand-background-strong-hover focus-visible:ring-ring-default",
  secondary:
    "border-border-default hover:border-border-strong focus-visible:ring-ring-default",
  "blue-accent":
    "border-accent-blue-border-subtle checked:border-accent-blue-border-default hover:border-accent-blue-border-strong focus-visible:ring-border-inverse",
  "purple-accent":
    "border-accent-purple-border-subtle checked:border-accent-purple-border-default hover:border-accent-purple-border-strong focus-visible:ring-border-inverse",
};
</script>
