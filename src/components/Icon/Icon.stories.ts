import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Icon from "./Icon.vue";
import type { IconSize } from "./Icon.vue";
import { iconNames } from "./icon-names";

const sizes: IconSize[] = ["xs", "sm", "md", "lg", "xl"];

const meta = {
  component: Icon,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Icon },
    setup: () => ({ args }),
    template: `<Icon v-bind="args"></Icon>`,
  }),
  args: {
    name: "check",
  },
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
    name: {
      control: "select",
      options: iconNames,
    },
  },
} satisfies Meta<typeof Icon>;
export default meta;

export const Playground: StoryObj<typeof meta> = {
  args: {
    size: "xl",
    name: "plus",
  },
};

export const AllIcons: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Icon },
    setup: () => ({ args, sizes, iconNames }),
    template: `
    <div v-for="name in iconNames" :key="name" class="mb-4 flex items-center gap-4">
    <Icon v-bind="args" v-for="size in sizes" :key="size" :name="name" :size="size"></Icon>
    </div>`,
  }),
};
