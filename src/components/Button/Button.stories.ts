import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";
import type { ButtonPurpose, ButtonSize, ButtonVariant } from "./Button.vue";
import { iconNames } from "../Icon/icon-names";

const purposes: ButtonPurpose[] = [
  "intent",
  "primary",
  "secondary",
  "purple-accent",
  "blue-accent",
];
const variants: ButtonVariant[] = ["solid", "outline", "alternative"];
const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

const meta = {
  component: Button,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Playground</Button>`,
  }),
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
    purpose: {
      control: "select",
      options: purposes,
    },
    variant: {
      control: "select",
      options: variants,
    },
    iconLeft: {
      control: "select",
      options: iconNames,
    },
    iconRight: {
      control: "select",
      options: iconNames,
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    purpose: "primary",
    size: "lg",
    variant: "solid",
    disabled: false,
  },
};

export const Sizes: StoryObj<typeof meta> = {
  args: { purpose: "secondary", variant: "solid" },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args, sizes }),
    template: `
    <div class="flex items-center gap-4">
    <Button v-bind="args" v-for="size in sizes" :key="size" :size="size">Button {{ size }}</Button>
    </div>`,
  }),
};

export const Purposes: StoryObj<typeof meta> = {
  args: { size: "lg", variant: "solid" },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args, purposes }),
    template: `
    <div class="flex items-center gap-4">
    <Button v-bind="args" v-for="purpose in purposes" :key="purpose" :purpose="purpose">Button {{ purpose }}</Button>
    </div>`,
  }),
};

export const Variants: StoryObj<typeof meta> = {
  args: { size: "lg" },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args, purposes, variants }),
    template: `
    <div v-for="purpose in purposes" :key="purpose" class="flex items-center gap-4 mb-4">
    <Button v-bind="args" v-for="variant in variants" :key="variant" :purpose="purpose" :variant="variant">{{ purpose }} {{ variant }}</Button>
    </div>`,
  }),
};

const statesGrid: StoryObj<typeof meta> = {
  parameters: {
    pseudo: {
      hover: ".state-hover",
      active: ".state-active",
      focusVisible: ".state-focus",
    },
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args, purposes }),
    template: `
    <div v-for="purpose in purposes" :key="purpose" class="flex items-center gap-4 mb-4">
    <Button v-bind="args" :purpose="purpose"> Button default </Button>
    <Button v-bind="args" disabled :purpose="purpose"> Button disabled</Button>
    <Button v-bind="args" class="state-focus" :purpose="purpose"> Button focus</Button>
    <Button v-bind="args" class="state-active" :purpose="purpose"> Button active</Button>
    <Button v-bind="args" class="state-hover" :purpose="purpose"> Button hover</Button>
    </div>
    `,
  }),
};

export const WithIcons: StoryObj<typeof meta> = {
  args: {
    purpose: "secondary",
    variant: "solid",
    iconLeft: "circle",
    iconRight: "circle",
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args, sizes }),
    template: `
    <div v-for="size in sizes" :key="size" class="flex items-center gap-4 mb-4">
      <Button v-bind="args" :size="size">Button with Icons</Button>
    </div>
    `,
  }),
};

export const StatesSolid: StoryObj<typeof meta> = {
  ...statesGrid,
  args: { size: "lg", variant: "solid" },
};

export const StatesOutline: StoryObj<typeof meta> = {
  ...statesGrid,
  args: { size: "lg", variant: "outline" },
  decorators: [
    () => ({ template: `<div class="bg-surface-canvas p-4 w-max"><story /></div>` }),
  ],
};

export const StatesAlternative: StoryObj<typeof meta> = {
  ...statesGrid,
  args: { size: "lg", variant: "alternative" },
};
