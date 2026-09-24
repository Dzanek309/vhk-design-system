import { readdirSync, writeFileSync } from "node:fs";

const files = readdirSync("src/assets/icon");
const iconNames = files
  .filter((file) => {
    return file.endsWith(".svg");
  })
  .map((file) => {
    return file.replace(".svg", "").replace("icon-", "");
  });

const fileContent =
  "export type IconName = " + iconNames.map((name) => `"${name}"`).join(" | ") + ";\n";

writeFileSync("src/components/Icon/icon-names.ts", fileContent, "utf8");
console.log(fileContent);
