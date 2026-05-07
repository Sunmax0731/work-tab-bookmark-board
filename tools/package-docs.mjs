import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const repo = "work-tab-bookmark-board";
const distDir = "dist";
fs.mkdirSync(distDir, { recursive: true });
const zipPath = path.join(distDir, `${repo}-docs.zip`);
if (fs.existsSync(zipPath)) {
  fs.rmSync(zipPath);
}

const command = [
  "$ErrorActionPreference = 'Stop'",
  "$paths = @('README.md','AGENTS.md','SKILL.md','docs')",
  `Compress-Archive -Path $paths -DestinationPath '${zipPath.replace(/\\/g, "\\\\")}' -Force`,
].join("; ");

execFileSync("powershell", ["-NoProfile", "-Command", command], { stdio: "inherit" });
const stat = fs.statSync(zipPath);
if (stat.size < 1024) {
  throw new Error(`Docs ZIP is too small: ${stat.size}`);
}
console.log(`created ${zipPath} (${stat.size} bytes)`);
