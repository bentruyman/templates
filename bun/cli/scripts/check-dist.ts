import { statSync } from "node:fs";
import { readFile } from "node:fs/promises";

type PackageManifest = {
  dependencies?: Record<string, string>;
};

const DIST_PATH = new URL("../dist/index.js", import.meta.url);
const PACKAGE_PATH = new URL("../package.json", import.meta.url);
const MAX_DIST_BYTES = 200 * 1024;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function main(): Promise<void> {
  const packageJson = JSON.parse(
    await readFile(PACKAGE_PATH, "utf8"),
  ) as PackageManifest;
  const distSource = await readFile(DIST_PATH, "utf8");
  const distSize = statSync(DIST_PATH).size;

  if (distSize > MAX_DIST_BYTES) {
    throw new Error(
      `dist/index.js is ${distSize} bytes, expected <= ${MAX_DIST_BYTES}. ` +
        "Published npm packages should externalize runtime dependencies by default.",
    );
  }

  for (const dependency of Object.keys(packageJson.dependencies ?? {})) {
    const externalImportPattern = new RegExp(
      `["'\`]${escapeRegExp(dependency)}["'\`]`,
      "u",
    );

    if (!externalImportPattern.test(distSource)) {
      throw new Error(
        `dist/index.js does not reference ${dependency} as an external package. ` +
          "If the dependency stays in package.json, keep it external in the published artifact.",
      );
    }
  }

  console.log(
    `dist/index.js passed artifact checks (${distSize} bytes, runtime dependencies externalized).`,
  );
}

await main();
