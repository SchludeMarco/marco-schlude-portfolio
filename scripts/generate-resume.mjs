// Generates the downloadable PDF resume from the site's CV data (profile, experience,
// skills, certificates) so the PDF stays in sync with what the portfolio displays.
// Run with: npm run generate:resume

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const toUrl = (p) => pathToFileURL(path.join(root, p)).href;

const { profile } = await import(toUrl("src/data/profile.ts"));
const { experiences } = await import(toUrl("src/data/experience.ts"));
const { getSkillsByCategory } = await import(toUrl("src/data/skills.ts"));
const { certificates } = await import(toUrl("src/data/certificates.ts"));

const outDir = path.join(root, "public");
const outPath = path.join(outDir, "marco-schlude-lebenslauf.pdf");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 56, right: 56 },
  info: {
    Title: `Lebenslauf – ${profile.name}`,
    Author: profile.name,
    Subject: "Lebenslauf",
  },
});
doc.pipe(fs.createWriteStream(outPath));

const colors = {
  heading: "#111827",
  text: "#374151",
  muted: "#6b7280",
  accent: "#2563eb",
  rule: "#e5e7eb",
};

const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function formatPeriod(period) {
  const fmt = (value) => {
    if (value === "present") return "heute";
    const [year, month] = value.split("-");
    const months = [
      "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
      "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
    ];
    const idx = Number(month) - 1;
    return `${months[idx] ?? month} ${year}`;
  };
  return `${fmt(period.start)} – ${fmt(period.end)}`;
}

function rule(y) {
  doc.moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .strokeColor(colors.rule)
    .lineWidth(1)
    .stroke();
}

function sectionTitle(title) {
  doc.moveDown(0.8);
  doc.fillColor(colors.accent)
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.3);
  rule(doc.y);
  doc.moveDown(0.5);
}

// Header
doc.fillColor(colors.heading).font("Helvetica-Bold").fontSize(24).text(profile.name);
doc.fillColor(colors.accent).font("Helvetica").fontSize(13).text(profile.title);
doc.moveDown(0.6);

const contactParts = [
  profile.contact.email,
  profile.contact.phone,
  profile.contact.location,
  profile.contact.linkedin?.replace(/^https?:\/\//, ""),
  profile.contact.github?.replace(/^https?:\/\//, ""),
].filter(Boolean);

doc.fillColor(colors.muted).font("Helvetica").fontSize(9.5).text(contactParts.join("   ·   "));
doc.moveDown(0.6);
rule(doc.y);

// Profile / summary
sectionTitle("Profil");
doc.fillColor(colors.text).font("Helvetica").fontSize(10.5).text(profile.bio, {
  width: contentWidth,
  lineGap: 3,
});

// Focus areas
doc.moveDown(0.6);
doc.fillColor(colors.heading).font("Helvetica-Bold").fontSize(10).text("Schwerpunkte: ", {
  continued: true,
});
doc.fillColor(colors.text).font("Helvetica").fontSize(10).text(profile.focusAreas.join(" · "));

// Experience
sectionTitle("Berufserfahrung");
experiences.forEach((exp, i) => {
  doc.fillColor(colors.heading).font("Helvetica-Bold").fontSize(11).text(exp.role, {
    continued: true,
  });
  doc.font("Helvetica").fillColor(colors.text).text(`  ·  ${exp.company}`);

  doc.fillColor(colors.muted).font("Helvetica").fontSize(9.5).text(
    `${formatPeriod(exp.period)}${exp.location ? `  ·  ${exp.location}` : ""}`
  );
  doc.moveDown(0.3);

  doc.fillColor(colors.text).font("Helvetica").fontSize(10).text(exp.summary, {
    width: contentWidth,
    lineGap: 2,
  });
  doc.moveDown(0.25);

  exp.tasks.forEach((task) => {
    doc.fillColor(colors.text).font("Helvetica").fontSize(10).text(`•  ${task}`, {
      width: contentWidth,
      indent: 0,
      lineGap: 1,
    });
  });

  if (exp.technologies?.length) {
    doc.moveDown(0.25);
    doc.fillColor(colors.muted).font("Helvetica-Oblique").fontSize(9.5).text(
      exp.technologies.join(" · "),
      { width: contentWidth }
    );
  }

  if (i < experiences.length - 1) doc.moveDown(0.7);
});

// Skills
sectionTitle("Kenntnisse");
const grouped = getSkillsByCategory();
const categories = Object.keys(grouped);
categories.forEach((category, i) => {
  doc.fillColor(colors.heading).font("Helvetica-Bold").fontSize(10.5).text(category);
  doc.moveDown(0.2);
  const line = grouped[category]
    .map((skill) => `${skill.name} (${skill.level})`)
    .join("  ·  ");
  doc.fillColor(colors.text).font("Helvetica").fontSize(9.5).text(line, {
    width: contentWidth,
    lineGap: 2,
  });
  if (i < categories.length - 1) doc.moveDown(0.45);
});

// Certificates
sectionTitle("Zertifikate");
certificates.forEach((cert, i) => {
  doc.fillColor(colors.heading).font("Helvetica-Bold").fontSize(10.5).text(cert.title, {
    continued: true,
  });
  doc.font("Helvetica").fillColor(colors.muted).fontSize(9.5).text(`   ·   ${cert.issuer}`);
  if (cert.description) {
    doc.fillColor(colors.text).font("Helvetica").fontSize(9.5).text(cert.description, {
      width: contentWidth,
      lineGap: 1,
    });
  }
  if (i < certificates.length - 1) doc.moveDown(0.4);
});

// Availability
sectionTitle("Verfügbarkeit");
doc.fillColor(colors.text).font("Helvetica").fontSize(10).text(profile.availability.label);
if (profile.availability.note) {
  doc.moveDown(0.15);
  doc.fillColor(colors.muted).font("Helvetica").fontSize(9.5).text(profile.availability.note, {
    width: contentWidth,
  });
}

doc.end();

doc.on("end", () => {
  console.log(`Lebenslauf erzeugt: ${path.relative(root, outPath)}`);
});
