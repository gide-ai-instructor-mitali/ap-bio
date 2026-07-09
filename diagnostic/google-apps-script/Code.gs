/**
 * AP Biology Diagnostic — Google Apps Script Backend
 * =====================================================
 * Deploy as a Web App:
 *   Extensions → Apps Script → Deploy → New deployment
 *   Type: Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Copy the Web App URL into:
 *   1. index.html     → const SHEET_URL = "YOUR_URL_HERE";
 *   2. dashboard.html → paste when connecting
 */

// ── Sheet config ──────────────────────────────────────────
const RESPONSES_SHEET = "Responses";
const UNITS = ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5','Unit 6','Unit 7','Unit 8'];
const BIG_IDEAS = ['ENE', 'EVO', 'IST', 'SYI'];
const DIFFICULTIES = ['1', '2', '3'];

const HEADERS = [
  "Timestamp",
  "Student Name",
  "Student ID",
  "Month",
  "Start Time",
  "Submit Time",
  "Time Taken (min)",
  "Total Score",
  "Total Possible",
  "Score %",
  // Unit scores
  ...UNITS.flatMap(u => [`${u} Correct`, `${u} %`]),
  // Big Ideas
  ...BIG_IDEAS.map(bi => `${bi} %`),
  // Difficulty
  "Easy %", "Medium %", "Hard %",
  // Meta
  "Wrong Q IDs",
  "Skipped Q IDs",
  "Raw Answers (JSON)"
];

// ── doPost — receives exam submissions ────────────────────
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Missing request body");
    }
    const data = JSON.parse(e.postData.contents);
    if (!data.studentName || !String(data.studentName).trim()) {
      throw new Error("studentName is required");
    }
    writeResponse(data);
    return jsonOutput({ status: "ok" });
  } catch (err) {
    return jsonOutput({ status: "error", message: err.message });
  }
}

// ── doGet — serves data to dashboard ─────────────────────
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "getAll";
  try {
    if (action === "getAll") {
      return jsonOutput({ status: "ok", data: getAllResponses() });
    }
    return jsonOutput({ status: "error", message: `Unknown action: ${action}` });
  } catch (err) {
    return jsonOutput({ status: "error", message: err.message });
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Write a single student response ──────────────────────
function writeResponse(data) {
  const sheet = getOrCreateResponsesSheet();

  const unitScore = unit => Number(data[`unit_${unit.replace(/\s+/g, '_')}_correct`]) || 0;
  const unitTotal = unit => Number(data[`unit_${unit.replace(/\s+/g, '_')}_total`]) || 5;
  const biPct = bi => pctOf(data[`bi_${bi}_correct`], data[`bi_${bi}_total`]);
  const diffPct = d => pctOf(data[`diff_${d}_correct`], data[`diff_${d}_total`]);

  const totalPossible = Number(data.totalPossible) || 40;
  const totalScore = Number(data.totalScore) || 0;
  const pctScore = Number.isFinite(Number(data.pctScore))
    ? Number(data.pctScore)
    : pctOf(totalScore, totalPossible);

  const row = [
    new Date().toISOString(),
    String(data.studentName || "").trim(),
    String(data.studentId || "").trim(),
    String(data.period || "").trim(),
    data.startTime || "",
    data.submitTime || "",
    Number(data.timeTaken) || 0,
    totalScore,
    totalPossible,
    pctScore,
    ...UNITS.flatMap(u => {
      const c = unitScore(u), t = unitTotal(u);
      return [c, t > 0 ? Math.round(c / t * 100) : 0];
    }),
    ...BIG_IDEAS.map(biPct),
    ...DIFFICULTIES.map(diffPct),
    sanitizeIdList(data.wrongQs),
    sanitizeIdList(data.skippedQs),
    typeof data.rawAnswers === 'string' ? data.rawAnswers : JSON.stringify(data.rawAnswers || {})
  ];

  sheet.appendRow(row);

  // Color-code the Score % cell for at-a-glance grading
  const lastRow = sheet.getLastRow();
  const scoreCol = HEADERS.indexOf("Score %") + 1;
  const scoreCell = sheet.getRange(lastRow, scoreCol);
  scoreCell.setBackground(pctScore >= 70 ? "#E8F5E9" : pctScore >= 45 ? "#FFF3E0" : "#FFEBEE");
}

function pctOf(correct, total) {
  const c = Number(correct) || 0;
  const t = Number(total) || 0;
  return t > 0 ? Math.round(c / t * 100) : 0;
}

function sanitizeIdList(v) {
  return (v === undefined || v === null) ? "" : String(v);
}

// ── Read all responses ────────────────────────────────────
function getAllResponses() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];

  const raw = sheet.getDataRange().getValues();
  const headers = raw[0];
  const rows = raw.slice(1);

  return rows
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = row[i]; });

      const unitScores = {};
      UNITS.forEach(u => {
        const key = `${u} Correct`;
        if (obj[key] !== undefined) unitScores[u] = obj[key];
      });

      return {
        studentName: obj["Student Name"] || "",
        studentId: obj["Student ID"] || "",
        period: obj["Month"] || "",
        startTime: obj["Start Time"] || "",
        submitTime: obj["Submit Time"] || "",
        timeTaken: obj["Time Taken (min)"] || 0,
        totalScore: obj["Total Score"] || 0,
        totalPossible: obj["Total Possible"] || 40,
        pctScore: obj["Score %"] || 0,
        wrongCount: countIds(obj["Wrong Q IDs"]),
        skippedCount: countIds(obj["Skipped Q IDs"]),
        unitScores,
        bi_ENE_pct: obj["ENE %"] || 0,
        bi_EVO_pct: obj["EVO %"] || 0,
        bi_IST_pct: obj["IST %"] || 0,
        bi_SYI_pct: obj["SYI %"] || 0,
        rawAnswers: obj["Raw Answers (JSON)"] || ""
      };
    })
    .filter(r => r.studentName);
}

function countIds(str) {
  if (!str) return 0;
  return String(str).split(',').filter(Boolean).length;
}

// ── Setup / migration helpers ─────────────────────────────
function getOrCreateResponsesSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(RESPONSES_SHEET);
    formatHeaderRow(sheet);
  }
  return sheet;
}

function formatHeaderRow(sheet) {
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length)
    .setBackground("#8B0D22")
    .setFontColor("#FFFFFF")
    .setFontWeight("bold")
    .setFontFamily("Arial");
  sheet.setFrozenRows(1);
}

/** Run once manually from the Apps Script editor to initialize the spreadsheet. */
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.rename("AP Biology Diagnostic Results");

  const sheet = getOrCreateResponsesSheet();
  sheet.setColumnWidth(1, 180); // Timestamp
  sheet.setColumnWidth(2, 160); // Student Name
  sheet.setColumnWidth(3, 120); // Student ID
}
