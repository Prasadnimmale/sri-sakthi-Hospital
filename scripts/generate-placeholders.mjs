/**
 * Generates branded placeholder images at the exact paths the site expects for
 * the two supplied doctor photographs. Replace these files with the real
 * photographs (keeping the same filenames) once they are available:
 *
 *   public/images/dr-sakthi-hero.webp   <- Image 1: blue scrubs, at his desk (HERO right side)
 *   public/images/dr-sakthi-doctor.jpg  <- Image 2: white coat portrait (ABOUT right side)
 *
 * Usage: npm run placeholders
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/images");
await mkdir(outDir, { recursive: true });

const jobs = [
  {
    file: "dr-sakthi-hero.webp",
    w: 960,
    h: 1120,
    accent: "#E87524",
    soft: "#FFF3EA",
    title: "DR. SAKTHI NARASIMHA GARIKAPATI",
    sub: "HERO PHOTO PENDING — blue scrubs at hospital desk",
  },
  {
    file: "dr-sakthi-doctor.jpg",
    w: 880,
    h: 1060,
    accent: "#C95712",
    soft: "#FFF8F3",
    title: "DR. SAKTHI NARASIMHA GARIKAPATI",
    sub: "ABOUT PHOTO PENDING — white coat portrait",
  },
];

function svgImage({ w, h, accent, soft, title, sub }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${soft}"/>
      <stop offset="1" stop-color="#FFE8D6"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${Array.from({ length: Math.ceil(w / 44) })
    .map(
      (_, i) =>
        `<circle cx="${(i * 44 + 22).toFixed(0)}" cy="26" r="1.6" fill="${accent}" opacity="0.25"/>`
    )
    .join("")}
  <g transform="translate(${w / 2 - 56}, ${h / 2 - 120})">
    <rect width="112" height="112" rx="26" fill="${accent}" opacity="0.12"/>
    <path d="M44 24h24v20h20v24H68v20H44V68H24V44h20V24z" fill="${accent}"/>
  </g>
  <text x="${w / 2}" y="${h / 2 + 48}" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#1D2939">${title}</text>
  <text x="${w / 2}" y="${h / 2 + 84}" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" fill="#667085">${sub}</text>
  <text x="${w / 2}" y="${h / 2 + 116}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="${accent}">Replace: public/images/${"{file}"} . No stock or AI images.</text>
</svg>`;
}

for (const job of jobs) {
  const svg = svgImage(job).replaceAll("${file}", job.file);
  const sharp = (await import("sharp")).default;
  const buffer = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
  if (job.file.endsWith(".webp")) {
    await writeFile(
      path.join(outDir, job.file),
      await sharp(buffer).webp({ quality: 85 }).toBuffer()
    );
  } else {
    await writeFile(path.join(outDir, job.file), buffer);
  }
  console.log(`created public/images/${job.file}`);
}

console.log("Done. Drop in the two real photographs with the same filenames to finish.");
