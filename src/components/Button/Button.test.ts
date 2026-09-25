import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import Icon from "../Icon/Icon.vue";

test("Render content forwarded in the slot", () => {
  const wrapper = mount(Button, { slots: { default: "press" } });
  expect(wrapper.text()).toContain("press");
});

test("No icon", () => {
  const wrapper = mount(Button, { slots: { default: "press" } });
  expect(wrapper.findComponent(Icon).exists()).toBe(false);
});

test("Show icon", () => {
  const wrapper = mount(Button, {
    props: { iconLeft: "circle" },
    slots: { default: "press" },
  });
  expect(wrapper.findComponent(Icon).props("name")).toBe("circle");
});

test("Button lg gets Icon md", () => {
  const wrapper = mount(Button, {
    props: { size: "lg", iconLeft: "circle" },
    slots: { default: "press" },
  });
  expect(wrapper.findComponent(Icon).props("size")).toBe("md");
});
