import type { Meta, StoryObj } from "@storybook/vue3-vite";
import IconButton from "./IconButton.vue";
import type {
  IconButtonSize,
  IconButtonPurpose,
  IconButtonVariant,
} from "./IconButton.vue";
import { iconNames } from "../Icon/icon-names.js";

const sizes: IconButtonSize[] = ["lg", "md", "sm"];
const purposes: IconButtonPurpose[] = [
  "intent",
  "primary",
  "secondary",
  "blue-accent",
  "purple-accent",
];
const variants: IconButtonVariant[] = ["solid", "alternative"];

const meta = {
  component: IconButton,
  tags: ["autodocs"],
  render: (args) => ({
    components: { IconButton },
    setup: () => ({ args }),
    template: `
    <IconButton v-bind="args"></IconButton>
    `,
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
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "select",
      options: iconNames,
    },
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    size: "lg",
    purpose: "primary",
    variant: "solid",
    icon: "hexagon",
    disabled: false,
    label: "test",
  },
};

export const Sizes: StoryObj<typeof meta> = {
  args: { purpose: "primary", variant: "solid", icon: "hexagon", label: "test" },
  render: (args) => ({
    components: { IconButton },
    setup: () => ({ args, sizes }),
    template: `
    <div class="flex gap-4">
    <IconButton v-bind="args" v-for="size in sizes" :size="size" :key="size"></IconButton>
    </div>
    `,
  }),
};

export const Purposes: StoryObj<typeof meta> = {
  args: { size: "md", icon: "hexagon", label: "test" },
  render: (args) => ({
    components: { IconButton },
    setup: () => ({ args, purposes }),
    template: `
    <div class="flex gap-4">
      <IconButton v-bind="args" v-for="purpose in purposes" :purpose="purpose" :key="purpose"></IconButton>
    </div>
    `,
  }),
};

export const Variants: StoryObj<typeof meta> = {
  args: { size: "md", icon: "hexagon", label: "test" },
  render: (args) => ({
    components: { IconButton },
    setup: () => ({ args, purposes, variants }),
    template: `
    <div class="flex gap-4" v-for="variant in variants" :key="variant">
      <IconButton v-bind="args" v-for="purpose in purposes" :variant="variant" :purpose="purpose" :key="purpose" class="mb-4"></IconButton>
    </div>
    `,
  }),
};

const statesGrid: StoryObj<typeof meta> = {
  args: { icon: "hexagon", label: "test" },
  parameters: {
    pseudo: {
      hover: ".state-hover",
      active: ".state-active",
      focusVisible: ".state-focus",
    },
  },
  render: (args) => ({
    components: { IconButton },
    setup: () => ({ args, purposes }),
    template: `
    <div v-for="purpose in purposes" :key="purpose" class="flex items-center gap-4 mb-4">
    <IconButton v-bind="args" :purpose="purpose"></IconButton>
    <IconButton v-bind="args" disabled :purpose="purpose"></IconButton>
    <IconButton v-bind="args" class="state-focus" :purpose="purpose"></IconButton>
    <IconButton v-bind="args" class="state-active" :purpose="purpose"></IconButton>
    <IconButton v-bind="args" class="state-hover" :purpose="purpose"></IconButton>
    </div>
    `,
  }),
};

export const StatesSolid: StoryObj<typeof meta> = {
  ...statesGrid,
  args: { size: "md", variant: "solid", icon: "hexagon", label: "test" },
};

export const StatesAlternative: StoryObj<typeof meta> = {
  ...statesGrid,
  args: { size: "md", variant: "alternative", icon: "hexagon", label: "test" },
};
