import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Pill from "./Pill.vue";
import type { PillSize, PillShape, PillVariant, PillPurpose } from "./Pill.vue";
import { iconNames } from "../Icon/icon-names";

const sizes: PillSize[] = ["lg", "md", "sm"];
const shapes: PillShape[] = ["circle", "square"];
const variants: PillVariant[] = ["solid", "alternative"];
const purposes: PillPurpose[] = [
  "intent",
  "primary",
  "secondary",
  "blue-accent",
  "purple-accent",
];

const meta = {
  component: Pill,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Pill },
    setup: () => ({ args }),
    template: `
    <Pill v-bind="args">Pill</Pill>
    `,
  }),
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
    shape: {
      control: "select",
      options: shapes,
    },
    variant: {
      control: "select",
      options: variants,
    },
    purpose: {
      control: "select",
      options: purposes,
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
} satisfies Meta<typeof Pill>;
export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    size: "lg",
    shape: "circle",
    variant: "solid",
    purpose: "primary",
    iconLeft: undefined,
    iconRight: undefined,
  },
};

export const Sizes: StoryObj<typeof meta> = {
  args: { variant: "solid", purpose: "primary" },
  render: (args) => ({
    components: { Pill },
    setup: () => ({ args, sizes, shapes }),
    template: `
    <div v-for="shape in shapes" :key="shape" class="flex items-center gap-4 py-4">
    <Pill v-bind="args" v-for="size in sizes" :key="size" :size="size" :shape="shape">pill with {{shape}} shape</Pill>
    </div>
    `,
  }),
};

export const WithIcons: StoryObj<typeof meta> = {
  args: {
    size: "lg",
    variant: "solid",
    purpose: "primary",
    iconLeft: "circle",
    iconRight: "circle",
  },
  render: (args) => ({
    components: { Pill },
    setup: () => ({ args, shapes }),
    template: `
    <div v-for="shape in shapes" :key="shape" class="flex items-center gap-4 py-4">
    <Pill v-bind="args" :shape="shape">pill</Pill>
    </div>
    `,
  }),
};

export const Grid: StoryObj<typeof meta> = {
  args: { size: "md" },
  render: (args) => ({
    components: { Pill },
    setup: () => ({ args, shapes, variants, purposes }),
    template: `
    <div v-for="shape in shapes" :key="shape" class="flex gap-2 p-4">
      <div v-for="purpose in purposes" :key="purpose" class="flex flex-col items-start gap-3">
        <Pill v-bind="args" v-for="variant in variants" :key="variant" :shape="shape" :variant="variant" :purpose="purpose">{{shape}} {{purpose}} {{variant}} pill</Pill>
      </div>
    </div>
    `,
  }),
};
