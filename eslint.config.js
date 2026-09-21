import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default defineConfigWithVueTs([
  globalIgnores(["dist", "storybook-static"]),
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  prettier,
  { rules: { "vue/multi-word-component-names": "off" } },
]);
