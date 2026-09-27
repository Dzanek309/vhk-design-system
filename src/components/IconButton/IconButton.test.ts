import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IconButton from "./IconButton.vue";
import Icon from "../Icon/Icon.vue";

test("Renders the given icon", () => {
  const wrapper = mount(IconButton, {
    props: { icon: "hexagon", label: "Add" },
  });
  expect(wrapper.findComponent(Icon).props("name")).toBe("hexagon");
});

test("Exposes label as aria-label", () => {
  const wrapper = mount(IconButton, {
    props: { icon: "hexagon", label: "Add" },
  });
  expect(wrapper.attributes("aria-label")).toBe("Add");
});

test("Is disabled when disabled prop is set", () => {
  const wrapper = mount(IconButton, {
    props: { icon: "hexagon", label: "Add", disabled: true },
  });
  expect(wrapper.attributes("disabled")).toBeDefined();
});

test("Is not disabled by default", () => {
  const wrapper = mount(IconButton, {
    props: { icon: "hexagon", label: "Add" },
  });
  expect(wrapper.attributes("disabled")).toBeUndefined();
});

test("Has type button", () => {
  const wrapper = mount(IconButton, {
    props: { icon: "hexagon", label: "Add" },
  });
  expect(wrapper.attributes("type")).toBe("button");
});

test("IconButton lg gets Icon xl", () => {
  const wrapper = mount(IconButton, {
    props: { size: "lg", icon: "hexagon", label: "Add" },
  });
  expect(wrapper.findComponent(Icon).props("size")).toBe("xl");
});
