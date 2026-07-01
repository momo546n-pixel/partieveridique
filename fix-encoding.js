const fs = require("fs");
const path = require("path");

const extensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".css",
  ".scss",
  ".html",
  ".md"
]);

const ignored = new Set([
  "node_modules",
  ".git",
  ".next",
  "dist",
  "build"
]);

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    if (ignored.has(file)) continue;

    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }

    if (!extensions.has(path.extname(full))) continue;

    let text = fs.readFileSync(full, "utf8");

    const repaired = Buffer.from(text, "latin1").toString("utf8");

    if (repaired !== text) {
      fs.writeFileSync(full, repaired, "utf8");
      console.log(" Corrig� :", full);
    }
  }
}

walk(".");
console.log("Termin� !");