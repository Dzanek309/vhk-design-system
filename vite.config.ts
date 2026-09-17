import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

const plugins = [vue(), tailwindcss()];

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins,
      root: "playground",
      server: {
        port: 3000,
        strictPort: true,
        open: true,
      },
    };
  }

  return {
    plugins: [
      ...plugins,
      dts({ include: ["src"], exclude: ["**/*.stories.ts"], entryRoot: "src" }),
    ],
    build: {
      lib: {
        entry: "src/index.ts",
        formats: ["es"],
        fileName: "index",
      },
      rollupOptions: {
        external: ["vue"],
      },
    },
  };
});
