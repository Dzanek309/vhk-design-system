import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

const plugins = [vue()];

export default defineConfig({
  plugins,
  test: {
    environment: "jsdom",
  },
});
