import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const www = join(root, "www");

await rm(www, { recursive: true, force: true });
await mkdir(www, { recursive: true });

for (const entry of ["index.html", "styles.css", "app.js", "manifest.json", "supabase-config.js", "supabase-client.js", "assets"]) {
  await cp(join(root, entry), join(www, entry), { recursive: true });
}
