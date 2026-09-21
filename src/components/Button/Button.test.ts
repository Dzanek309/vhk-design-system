import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

test("Render content forwarded in the slot", () => {
  const wrapper = mount(Button, { slots: { default: "press" } });
  expect(wrapper.text()).toContain("press");
});
