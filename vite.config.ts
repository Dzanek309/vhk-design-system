import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  root: "playground",
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
});
