import fs from "node:fs/promises";
import path from "node:path";

const buildDir = path.resolve("build");
const indexPath = path.join(buildDir, "index.html");
const routes = ["key", "privacy", "tos", "milenium-preview"];

async function main() {
  const indexHtml = await fs.readFile(indexPath, "utf8");

  await Promise.all(
    routes.map(async (route) => {
      const routeDir = path.join(buildDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      await fs.writeFile(path.join(routeDir, "index.html"), indexHtml);
    })
  );
}

main().catch((error) => {
  console.error("Failed to generate static route entry points.");
  console.error(error);
  process.exitCode = 1;
});