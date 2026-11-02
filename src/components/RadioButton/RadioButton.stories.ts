import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RadioButton from "./RadioButton.vue";
import type { RadioButtonSize, RadioButtonPurpose } from "./RadioButton.vue";
import { reactive, ref } from "vue";

const sizes: RadioButtonSize[] = ["lg", "md", "sm"];
const purposes: RadioButtonPurpose[] = [
  "intent",
  "primary",
  "secondary",
  "blue-accent",
  "purple-accent",
];

const meta = {
  component: RadioButton,
  tags: ["autodocs"],
  render: (args) => ({
    components: { RadioButton },
    setup: () => {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
    <div class="flex flex-col gap-2xs">
      <RadioButton v-bind="args" v-model="selected" value="a">Opcja A</RadioButton>
      <RadioButton v-bind="args" v-model="selected" value="b">Opcja B</RadioButton>
      <RadioButton v-bind="args" v-model="selected" value="c">Opcja C</RadioButton>
    </div>
    `,
  }),
  argTypes: {
    name: {
      control: "text",
    },
    size: {
      control: "select",
      options: sizes,
    },
    purpose: {
      control: "select",
      options: purposes,
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof RadioButton>;
export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    name: "payment",
    value: "a",
    modelValue: "a",
    size: "md",
    purpose: "primary",
    disabled: false,
  },
};

const options = ["a", "b", "c"];

export const Sizes: StoryObj<typeof meta> = {
  args: { name: "sizes", value: "a", modelValue: "a", purpose: "primary" },
  render: (args) => ({
    components: { RadioButton },
    setup: () => {
      const selected = reactive({ lg: "a", md: "a", sm: "a" });
      return { args, selected, sizes, options };
    },
    template: `
    <div class="flex gap-xl">
      <div v-for="size in sizes" :key="size" class="flex flex-col gap-2xs">
        <span class="text-xs text-text-tertiary uppercase">{{ size }}</span>
        <RadioButton
          v-for="option in options"
          :key="option"
          v-bind="args"
          v-model="selected[size]"
          :name="\`size-\${size}\`"
          :size="size"
          :value="option"
        >
          Opcja {{ option.toUpperCase() }}
        </RadioButton>
      </div>
    </div>
    `,
  }),
};

export const Purposes: StoryObj<typeof meta> = {
  args: { name: "purposes", value: "a", modelValue: "a" },
  render: (args) => ({
    components: { RadioButton },
    setup: () => {
      const selected = reactive({
        intent: "a",
        primary: "a",
        secondary: "a",
        "blue-accent": "a",
        "purple-accent": "a",
      });
      return { args, selected, options, purposes };
    },
    template: `
    <div class="flex gap-xl">
      <div v-for="purpose in purposes" :key="purpose" class="flex flex-col gap-2xs">
        <span class="text-xs text-text-tertiary uppercase">{{ purpose }}</span>
        <RadioButton
          v-for="option in options"
          :key="option"
          v-bind="args"
          v-model="selected[purpose]"
          :name="\`purpose-\${purpose}\`"
          :purpose="purpose"
          :value="option"
        >
          Opcja {{ option.toUpperCase() }}
        </RadioButton>
      </div>
    </div>
    `,
  }),
};

const states = ["default", "hover", "focused", "disabled"] as const;
const stateClasses: Record<string, string> = {
  hover: "state-hover",
  focused: "state-focus",
};

export const States: StoryObj<typeof meta> = {
  args: {
    name: "states",
    value: "on",
    modelValue: "off",
    size: "md",
    purpose: "primary",
  },
  parameters: {
    pseudo: {
      hover: ".state-hover input",
      focusVisible: ".state-focus input",
    },
  },
  render: (args) => ({
    components: { RadioButton },
    setup: () => ({ args, states, stateClasses }),
    template: `
    <div class="flex gap-xl">
      <div v-for="state in states" :key="state" class="flex flex-col gap-2xs">
        <span class="text-xs text-text-tertiary uppercase">{{ state }}</span>
        <RadioButton
          v-for="checked in [false, true]"
          :key="String(checked)"
          :purpose="args.purpose"
          :size="args.size"
          value="on"
          :model-value="checked ? 'on' : 'off'"
          :name="\`states-\${state}-\${checked}\`"
          :disabled="state === 'disabled'"
          :class="stateClasses[state]"
        >
          {{ checked ? "Zaznaczony" : "Niezaznaczony" }}
        </RadioButton>
      </div>
    </div>
    `,
  }),
};

const columns = states.flatMap((state) =>
  [false, true].map((checked) => ({ state, checked })),
);

export const Grid: StoryObj<typeof meta> = {
  args: { name: "grid", value: "on", modelValue: "off" },
  parameters: {
    pseudo: {
      hover: ".state-hover input",
      focusVisible: ".state-focus input",
    },
  },
  decorators: [() => ({ template: `<div class="p-4 w-max"><story /></div>` })],
  render: () => ({
    components: { RadioButton },
    setup: () => ({ sizes, purposes, states, columns, stateClasses }),
    template: `
    <div class="grid grid-cols-[auto_auto_repeat(8,2.5rem)] gap-x-md gap-y-xs items-center text-xs text-text-tertiary uppercase">
      <span></span>
      <span></span>
      <span v-for="state in states" :key="state" class="col-span-2 text-center">{{ state }}</span>

      <template v-for="purpose in purposes" :key="purpose">
        <template v-for="size in sizes" :key="size">
          <span>{{ size === "md" ? purpose : "" }}</span>
          <span>{{ size }}</span>
          <div
            v-for="col in columns"
            :key="col.state + col.checked"
            class="flex justify-center"
          >
            <RadioButton
              :purpose="purpose"
              :size="size"
              value="on"
              :model-value="col.checked ? 'on' : 'off'"
              :name="\`\${purpose}-\${size}-\${col.state}-\${col.checked}\`"
              :disabled="col.state === 'disabled'"
              :class="stateClasses[col.state]"
            />
          </div>
        </template>
      </template>
    </div>
    `,
  }),
};
