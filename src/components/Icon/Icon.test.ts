import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Icon from "./Icon.vue";
import { iconNames } from "./icon-names";

test.each(iconNames)("renders svg for %s", (name) => {
  const wrapper = mount(Icon, { props: { name } });
  expect(wrapper.find("svg").exists()).toBe(true);
});
