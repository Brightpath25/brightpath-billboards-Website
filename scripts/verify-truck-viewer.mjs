import { readFileSync, existsSync } from "node:fs";

const viewerPath = "src/components/Campaign360Viewer.tsx";
if (!existsSync(viewerPath)) throw new Error("Missing protected viewer: " + viewerPath);
const source = readFileSync(viewerPath, "utf8");

const required = [
  "Brightpath_LED_Truck_WebReady.glb",
  "brightpathbillboards-laquinta.jpeg",
  "id=\"campaign-truck\"",
  "id=\"upload-left\"",
  "id=\"upload-back\"",
  "Screen_Left",
  "Screen_Right",
  "Screen_Back",
  "setWebglFallback(true)",
  "model-viewer",
  "createTexture(leftImage.url)",
  "createTexture(backImage.url)",
];

const missing = required.filter((value) => !source.includes(value));
if (missing.length) {
  console.error("Protected truck viewer invariants missing:");
  for (const value of missing) console.error("- " + value);
  process.exit(1);
}

if (!source.includes("Guaranteed static base layer")) {
  throw new Error("The browser-safe static base layer is missing.");
}

console.log("Truck viewer protection check passed.");
