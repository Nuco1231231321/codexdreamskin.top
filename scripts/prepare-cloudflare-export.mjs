import { copyFile } from "node:fs/promises";

const outputDirectory = new URL("../out/", import.meta.url);

await copyFile(
  new URL("zh.html", outputDirectory),
  new URL("zh/index.html", outputDirectory),
);
