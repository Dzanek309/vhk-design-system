import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Pill from "./Pill.vue";
import Icon from "../Icon/Icon.vue";

test("Render content forwarded in the slot", () => {
  const wrapper = mount(Pill, { slots: { default: "Pill" } });
  expect(wrapper.text()).toContain("Pill");
});

test("No icon", () => {
  const wrapper = mount(Pill, { slots: { default: "Pill" } });
  expect(wrapper.findComponent(Icon).exists()).toBe(false);
});

test("Show icon", () => {
  const wrapper = mount(Pill, {
    props: { iconLeft: "circle" },
    slots: { default: "Pill" },
  });
  expect(wrapper.findComponent(Icon).props("name")).toBe("circle");
});

test("Renders left and right icon in order", () => {
  const wrapper = mount(Pill, {
    props: { size: "lg", iconLeft: "circle", iconRight: "x" },
    slots: { default: "Pill" },
  });
  const icons = wrapper.findAllComponents(Icon);
  expect(icons).toHaveLength(2);
  expect(icons[0].props("name")).toBe("circle");
  expect(icons[1].props("name")).toBe("x");
});

test("Pill lg gets Icon md", () => {
  const wrapper = mount(Pill, {
    props: { size: "lg", iconLeft: "circle" },
    slots: { default: "Pill" },
  });
  expect(wrapper.findComponent(Icon).props("size")).toBe("md");
});
