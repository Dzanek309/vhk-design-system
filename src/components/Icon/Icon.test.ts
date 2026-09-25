import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Icon from "./Icon.vue";
import { iconNames } from "./icon-names";

test.each(iconNames)("renders svg for %s", (name) => {
  const wrapper = mount(Icon, { props: { name } });
  expect(wrapper.find("svg").exists()).toBe(true);
});

test("check a11y (label undefined)", () => {
  const wrapper = mount(Icon, { props: { name: iconNames[0], label: undefined } });
  expect(wrapper.attributes("aria-hidden")).toBe("true");
  expect(wrapper.attributes("role")).toBeUndefined();
  expect(wrapper.attributes("aria-label")).toBeUndefined();
});

test("check a11y (label exists)", () => {
  const wrapper = mount(Icon, { props: { name: iconNames[0], label: "test" } });
  expect(wrapper.attributes("aria-hidden")).toBeUndefined();
  expect(wrapper.attributes("role")).toBe("img");
  expect(wrapper.attributes("aria-label")).toBe("test");
});
