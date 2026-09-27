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
