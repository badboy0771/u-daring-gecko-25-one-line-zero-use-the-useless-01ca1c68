import { mkdirSync, writeFileSync } from "node:fs";

const line = "I can teleport anywhere on Earth \u2014 but only three inches to the left, so my daring prison break ended at the gift shop, buying a snow globe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`chars: ${line.length}`);
