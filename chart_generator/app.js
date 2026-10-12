/**
 * 3D Analytics Chart Studio
 * Recreates high-fidelity 3D isometric column charts with logarithmic scale
 */

// Preset datasets
const PRESETS = {
  august_2026: {
    title: "Metadata of forum (August 2026)",
    filename: "Metadata_of_forum.csv",
    scaleType: "log",
    legendLabel: "value",
    data: [
      { metric: "Total posts", value: 100385, color: "#4285F4" },
      { metric: "Total active users", value: 4185, color: "#EA4335" },
      { metric: "Total new registrations", value: 2878, color: "#FBBC05" },
      { metric: "Merit sent", value: 22161, color: "#34A853" },
      { metric: "Merit TXNs", value: 11495, color: "#9C27B0" },
      { metric: "Merit senders", value: 914, color: "#00BCD4" },
      { metric: "Merit receivers", value: 1263, color: "#E91E63" },
      { metric: "Total sigbans", value: 77, color: "#8BC34A" },
      { metric: "Total wakeups", value: 2366, color: "#3F51B5" },
      { metric: "Password changes", value: 94, color: "#FF5722" },
      { metric: "2FA added", value: 37, color: "#673AB7" },
      { metric: "Avg posts/day", value: 3238.23, color: "#009688" },
      { metric: "Avg merit/TXNs", value: 1.93, color: "#CDDC39" }
    ]
  },
  top_users_august: {
    title: "Top active users",
    filename: "Top_active_users.csv",
    scaleType: "linear",
    legendLabel: "post count",
    data: [
      { metric: "ChartBuddy", value: 738, color: "#4285F4" },
      { metric: "KTChampions", value: 337, color: "#EA4335" },
      { metric: "Hispo", value: 311, color: "#FBBC05" },
      { metric: "philipma1957", value: 280, color: "#34A853" },
      { metric: "Oluwa-btc", value: 276, color: "#9C27B0" },
      { metric: "Agbe", value: 270, color: "#00BCD4" },
      { metric: "joker_josue", value: 267, color: "#E91E63" },
      { metric: "OgNasty", value: 254, color: "#8BC34A" },
      { metric: "LoyceV", value: 249, color: "#3F51B5" },
      { metric: "julerz12", value: 238, color: "#FF5722" },
      { metric: "Dunamisx", value: 233, color: "#673AB7" },
      { metric: "Charles-Tim", value: 231, color: "#009688" },
      { metric: "Pmalek", value: 227, color: "#CDDC39" },
      { metric: "Cointxz", value: 218, color: "#FF9800" },
      { metric: "GiftedMAN", value: 207, color: "#795548" },
      { metric: "Findingnemo", value: 197, color: "#607D8B" },
      { metric: "Agbamoni", value: 197, color: "#9E9E9E" },
      { metric: "Odusko", value: 197, color: "#3F51B5" },
      { metric: "Frankolala", value: 195, color: "#00BCD4" },
      { metric: "Sexylizzy2813", value: 192, color: "#E91E63" }
    ]
  },
  top_boards_august: {
    title: "Top board by post counts",
    filename: "Top_board_by_post_counts.csv",
    scaleType: "linear",
    legendLabel: "post count",
    data: [
      { metric: "Gambling discussion", value: 30812, color: "#4285F4" },
      { metric: "Bitcoin Discussion", value: 8633, color: "#EA4335" },
      { metric: "Altcoin Discussion", value: 7291, color: "#FBBC05" },
      { metric: "Speculation", value: 7120, color: "#34A853" },
      { metric: "Economics", value: 5012, color: "#9C27B0" },
      { metric: "Trading Discussion", value: 4890, color: "#00BCD4" },
      { metric: "Meta", value: 3950, color: "#E91E63" },
      { metric: "Beginners & Help", value: 3620, color: "#8BC34A" },
      { metric: "Mining", value: 2810, color: "#3F51B5" },
      { metric: "Marketplace", value: 2450, color: "#FF5722" }
    ]
  },
  top_words_august: {
    title: "Top words",
    filename: "Top_words.csv",
    scaleType: "linear",
    legendLabel: "count",
    data: [
      { metric: "bitcoin", value: 58734, color: "#4285F4" },
      { metric: "money", value: 28532, color: "#EA4335" },
      { metric: "people", value: 26140, color: "#FBBC05" },
      { metric: "crypto", value: 24920, color: "#34A853" },
      { metric: "market", value: 21300, color: "#9C27B0" },
      { metric: "time", value: 20110, color: "#00BCD4" },
      { metric: "price", value: 18950, color: "#E91E63" },
      { metric: "wallet", value: 16800, color: "#8BC34A" },
      { metric: "good", value: 15420, color: "#3F51B5" },
      { metric: "make", value: 14780, color: "#FF5722" },
      { metric: "think", value: 14210, color: "#673AB7" },
      { metric: "years", value: 13900, color: "#009688" },
      { metric: "project", value: 12850, color: "#CDDC39" },
      { metric: "transactions", value: 12100, color: "#FF9800" },
      { metric: "world", value: 11450, color: "#795548" }
    ]
  },
  september_2026: {
    title: "Metadata of forum (September 2026)",
    filename: "Metadata_of_forum_Sep.csv",
    data: [
      { metric: "Total posts", value: 96073, color: "#4285F4" },
      { metric: "Total active users", value: 3994, color: "#EA4335" },
      { metric: "Merit sent", value: 12955, color: "#34A853" },
      { metric: "Merit TXNs", value: 6946, color: "#9C27B0" },
      { metric: "Merit senders", value: 747, color: "#00BCD4" },
      { metric: "Merit receivers", value: 1052, color: "#E91E63" },
      { metric: "Total sigbans", value: 31, color: "#8BC34A" },
      { metric: "Total wakeups", value: 3049, color: "#3F51B5" },
      { metric: "Password changes", value: 181, color: "#FF5722" },
      { metric: "2FA added", value: 32, color: "#673AB7" },
      { metric: "Avg posts/day", value: 3202.43, color: "#009688" },
      { metric: "Avg merit/TXNs", value: 1.87, color: "#CDDC39" }
    ]
  },
  july_2026: {
    title: "Metadata of forum (July 2026)",
    filename: "Metadata_of_forum_Jul.csv",
    data: [
      { metric: "Total posts", value: 105068, color: "#4285F4" },
      { metric: "Total active users", value: 4118, color: "#EA4335" },
      { metric: "Merit sent", value: 19575, color: "#34A853" },
      { metric: "Merit TXNs", value: 9984, color: "#9C27B0" },
      { metric: "Merit senders", value: 866, color: "#00BCD4" },
      { metric: "Merit receivers", value: 1247, color: "#E91E63" },
      { metric: "Total sigbans", value: 106, color: "#8BC34A" },
      { metric: "Total wakeups", value: 1564, color: "#3F51B5" },
      { metric: "Password changes", value: 111, color: "#FF5722" },
      { metric: "2FA added", value: 38, color: "#673AB7" },
      { metric: "Avg posts/day", value: 3389.29, color: "#009688" },
      { metric: "Avg merit/TXNs", value: 1.96, color: "#CDDC39" }
    ]
  }
};

const DEFAULT_PALETTE = [
  "#4285F4", "#EA4335", "#FBBC05", "#34A853", "#9C27B0",
  "#00BCD4", "#E91E63", "#8BC34A", "#3F51B5", "#FF5722",
  "#673AB7", "#009688", "#CDDC39", "#FF9800", "#795548",
  "#0288D1", "#7B1FA2", "#388E3C", "#F57C00", "#5D4037"
];

// Application state
const state = {
  title: "Metadata of forum (August 2026)",
  titleSize: 30,
  titleBold: true,
  titleItalic: true,
  scaleType: "log", // 'log' or 'linear'
  items: JSON.parse(JSON.stringify(PRESETS.august_2026.data)),
  depth: 26,
  barWidthRatio: 0.68,
  showFloor: true,
  showLegend: true,
  legendLabel: "value",
  showLabels: true,
  showMinorTicks: true,
  showGridlines: true,
  showMinorGridlines: false,
  hAxisSize: 18,
  labelSize: 18,
  labelAngle: "auto", // 'auto', 'horizontal', 'slanted', 'vertical'
  filename: "Metadata_of_forum.csv",
  rowLimit: "20",
  rawHeaders: [],
  rawRows: [],
  currentLabelCol: 0,
  currentValueCol: 1
};

// Color shading helpers
function adjustBrightness(hex, percent) {
  let num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + Math.round(255 * (percent / 100));
  let g = ((num >> 8) & 0x00ff) + Math.round(255 * (percent / 100));
  let b = (num & 0x0000ff) + Math.round(255 * (percent / 100));
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// "Nice numbers" algorithm for clean linear axis scale & step ticks
function getNiceScale(maxVal, targetSteps = 5) {
  if (maxVal <= 0) return { max: 10, step: 2 };
  const rawStep = maxVal / targetSteps;
  const power = Math.floor(Math.log10(rawStep));
  const magnitude = Math.pow(10, power);
  const fraction = rawStep / magnitude;
  let niceFraction;
  if (fraction <= 1) niceFraction = 1;
  else if (fraction <= 2) niceFraction = 2;
  else if (fraction <= 2.5) niceFraction = 2.5;
  else if (fraction <= 5) niceFraction = 5;
  else niceFraction = 10;
  const step = niceFraction * magnitude;
  const max = Math.ceil(maxVal / step) * step;
  return { max, step };
}

// Canvas and DOM Elements
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");
const csvFileInput = document.getElementById("csvFileInput");
const sampleSelect = document.getElementById("sampleSelect");
const fileInfoBadge = document.getElementById("fileInfoBadge");
const dropZone = document.getElementById("dropZone");
const dropOverlay = document.getElementById("dropOverlay");

// Drawers & controls
const dataDrawer = document.getElementById("dataDrawer");
const settingsDrawer = document.getElementById("settingsDrawer");
const btnToggleEditor = document.getElementById("btnToggleEditor");
const btnToggleSettings = document.getElementById("btnToggleSettings");
const btnCloseDrawer = document.getElementById("btnCloseDrawer");
const btnCloseSettings = document.getElementById("btnCloseSettings");

const btnScaleLog = document.getElementById("btnScaleLog");
const btnScaleLinear = document.getElementById("btnScaleLinear");

const columnSelectGroup = document.getElementById("columnSelectGroup");
const selectMetricCol = document.getElementById("selectMetricCol");
const selectValueCol = document.getElementById("selectValueCol");
const selectRowLimit = document.getElementById("selectRowLimit");

const tableBody = document.getElementById("tableBody");
const btnAddRow = document.getElementById("btnAddRow");
const btnResetData = document.getElementById("btnResetData");
const btnShuffleColors = document.getElementById("btnShuffleColors");
const btnDrawerShuffleColors = document.getElementById("btnDrawerShuffleColors");
const btnSettingsShuffleColors = document.getElementById("btnSettingsShuffleColors");
const rawCsvText = document.getElementById("rawCsvText");
const btnApplyRawCsv = document.getElementById("btnApplyRawCsv");

const settingTitle = document.getElementById("settingTitle");
const settingTitleSize = document.getElementById("settingTitleSize");
const settingTitleBold = document.getElementById("settingTitleBold");
const settingTitleItalic = document.getElementById("settingTitleItalic");
const setting3dDepth = document.getElementById("setting3dDepth");
const depthVal = document.getElementById("depthVal");
const settingBarWidth = document.getElementById("settingBarWidth");
const widthVal = document.getElementById("widthVal");
const settingShowFloor = document.getElementById("settingShowFloor");
const settingShowLegend = document.getElementById("settingShowLegend");
const settingShowLabels = document.getElementById("settingShowLabels");
const settingShowMinorTicks = document.getElementById("settingShowMinorTicks");
const settingShowGridlines = document.getElementById("settingShowGridlines");
const settingShowMinorGridlines = document.getElementById("settingShowMinorGridlines");
const settingHAxisSize = document.getElementById("settingHAxisSize");
const settingLabelSize = document.getElementById("settingLabelSize");

const btnExportPng = document.getElementById("btnExportPng");
const btnExportSvg = document.getElementById("btnExportSvg");
const btnCopyImage = document.getElementById("btnCopyImage");

// High-DPI Canvas Rendering Engine
function renderChart() {
  const width = 2200;
  const height = 960;
  
  canvas.width = width;
  canvas.height = height;

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const plotX = 140;
  const plotY = 120;
  const plotW = width - plotX - 80;
  const plotH = height - plotY - 170;
  const baselineY = plotY + plotH;

  const dx = state.depth;
  const dy = Math.round(state.depth * 0.72);

  // Dynamic Scale Calculations
  const posVals = state.items.map(it => it.value).filter(v => v > 0);
  const minVal = posVals.length > 0 ? Math.min(...posVals) : 1;
  const maxVal = Math.max(...state.items.map(it => it.value), 1);

  // Linear nice scale
  const { max: maxLinearVal, step: linearStep } = getNiceScale(maxVal, 5);

  // Log scale dynamic powers
  let logMin = Math.max(0, Math.floor(Math.log10(minVal)));
  let logMax = Math.ceil(Math.log10(maxVal));
  if (logMax <= logMin) logMax = logMin + 1;
  if (Math.log10(maxVal) > logMax - 0.05) {
    logMax += 0.2;
  }

  function getY(val) {
    if (state.scaleType === "log") {
      const clampedVal = Math.max(val, 1);
      const logVal = Math.log10(clampedVal);
      const ratio = (logVal - logMin) / (logMax - logMin);
      return baselineY - ratio * plotH;
    } else {
      const ratio = Math.max(0, val) / maxLinearVal;
      return baselineY - ratio * plotH;
    }
  }

  // Draw 3D Ground Platform (Floor)
  if (state.showFloor) {
    ctx.fillStyle = "#f1f1f1";
    ctx.beginPath();
    ctx.moveTo(plotX, baselineY);
    ctx.lineTo(plotX + dx, baselineY - dy);
    ctx.lineTo(plotX + plotW + dx, baselineY - dy);
    ctx.lineTo(plotX + plotW, baselineY);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#dcdcdc";
    ctx.fillRect(plotX, baselineY, plotW, 12);
  }

  // Draw Gridlines & Y-Axis
  ctx.font = "italic 16px Roboto, sans-serif";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  if (state.scaleType === "log") {
    const minPower = Math.max(1, logMin);
    const maxPower = Math.floor(logMax);
    for (let p = minPower; p <= maxPower; p++) {
      const val = Math.pow(10, p);
      const y = getY(val);

      if (state.showGridlines) {
        ctx.strokeStyle = "#e8e8e8";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(plotX, y);
        ctx.lineTo(plotX + plotW + dx, y);
        ctx.stroke();
      }

      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(plotX - 8, y);
      ctx.lineTo(plotX, y);
      ctx.stroke();

      ctx.font = "italic 16px Roboto, sans-serif";
      ctx.fillStyle = "#000000";
      ctx.fillText(val.toLocaleString(), plotX - 12, y);
    }

    if (state.showMinorTicks) {
      for (let p = 0; p < Math.ceil(logMax); p++) {
        const base = Math.pow(10, p);
        const subSteps = [2, 3, 4, 5, 6, 7, 8, 9];
        subSteps.forEach(s => {
          const val = base * s;
          const y = getY(val);
          if (y >= plotY && y <= baselineY) {
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(plotX - 4, y);
            ctx.lineTo(plotX, y);
            ctx.stroke();

            if (state.showMinorGridlines) {
              ctx.strokeStyle = "#f3f3f3";
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(plotX, y);
              ctx.lineTo(plotX + plotW + dx, y);
              ctx.stroke();
            }
          }
        });
      }
    }
  } else {
    // Dynamic Linear Scale ticks & gridlines
    for (let val = linearStep; val <= maxLinearVal + (linearStep * 0.001); val += linearStep) {
      const y = getY(val);
      if (state.showGridlines) {
        ctx.strokeStyle = "#e8e8e8";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(plotX, y);
        ctx.lineTo(plotX + plotW + dx, y);
        ctx.stroke();
      }
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(plotX - 8, y);
      ctx.lineTo(plotX, y);
      ctx.stroke();

      ctx.font = "italic 16px Roboto, sans-serif";
      ctx.fillStyle = "#000000";
      const valText = Number.isInteger(val) ? val.toLocaleString() : (val >= 10 ? val.toFixed(1) : val.toFixed(2));
      ctx.fillText(valText, plotX - 12, y);
    }
  }

  // Vertical Left Axis Line
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(plotX, plotY - 10);
  ctx.lineTo(plotX, baselineY + 12);
  ctx.stroke();

  // Horizontal Bottom Axis Line
  ctx.beginPath();
  ctx.moveTo(plotX, baselineY);
  ctx.lineTo(plotX + plotW, baselineY);
  ctx.stroke();

  // Category labels angle calculation
  const count = state.items.length;
  let labelAngle = 0;
  if (state.labelAngle === "slanted") {
    labelAngle = -Math.PI / 5; // -36 deg
  } else if (state.labelAngle === "vertical") {
    labelAngle = -Math.PI / 2; // -90 deg
  } else if (state.labelAngle === "auto") {
    const maxLen = Math.max(...state.items.map(it => (it.metric || "").length), 0);
    const avgSlotWidth = plotW / Math.max(1, count);
    if (count > 12 || avgSlotWidth < 120 || (maxLen > 9 && avgSlotWidth < 160)) {
      labelAngle = -Math.PI / 5;
    }
  }

  // Draw Columns, Category Ticks, and Data Labels
  if (count > 0) {
    const slotWidth = plotW / count;
    const barWidth = Math.max(8, slotWidth * state.barWidthRatio);
    const offset = (slotWidth - barWidth) / 2;

    state.items.forEach((item, i) => {
      const bx = plotX + i * slotWidth + offset;
      const by = getY(item.value);
      const h = Math.max(0, baselineY - by);

      // 1. Front face
      ctx.fillStyle = item.color;
      ctx.fillRect(bx, by, barWidth, h);

      // 2. Top face (lighter tint)
      ctx.fillStyle = adjustBrightness(item.color, 25);
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + dx, by - dy);
      ctx.lineTo(bx + barWidth + dx, by - dy);
      ctx.lineTo(bx + barWidth, by);
      ctx.closePath();
      ctx.fill();

      // 3. Right face (darker shade)
      ctx.fillStyle = adjustBrightness(item.color, -25);
      ctx.beginPath();
      ctx.moveTo(bx + barWidth, by);
      ctx.lineTo(bx + barWidth + dx, by - dy);
      ctx.lineTo(bx + barWidth + dx, baselineY - dy);
      ctx.lineTo(bx + barWidth, baselineY);
      ctx.closePath();
      ctx.fill();

      // Bottom Category Tick Mark
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(bx + barWidth / 2, baselineY - 4);
      ctx.lineTo(bx + barWidth / 2, baselineY + 8);
      ctx.stroke();

      // Category Label (X-Axis)
      ctx.font = `${state.hAxisSize}px Roboto, sans-serif`;
      ctx.fillStyle = "#000000";
      if (labelAngle === 0) {
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(item.metric, bx + barWidth / 2, baselineY + 16);
      } else {
        ctx.save();
        ctx.translate(bx + barWidth / 2, baselineY + 14);
        ctx.rotate(labelAngle);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(item.metric, 0, 0);
        ctx.restore();
      }

      // Data Label (above top face)
      if (state.showLabels) {
        ctx.font = `italic ${state.labelSize}px Roboto, sans-serif`;
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        const valStr = Number.isInteger(item.value) ? item.value.toLocaleString() : item.value.toFixed(2);
        ctx.fillText(valStr, bx + barWidth / 2 + dx / 2, by - dy - 6);
      }
    });
  }

  // Chart Title
  const titleStyle = `${state.titleItalic ? "italic " : ""}${state.titleBold ? "bold " : ""}${state.titleSize}px Roboto, sans-serif`;
  ctx.font = titleStyle;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(state.title, plotX + plotW / 2, 55);

  // Legend at bottom
  if (state.showLegend) {
    const legendY = height - 42;
    const legendCenterX = plotX + plotW / 2;
    ctx.fillStyle = "#4285F4";
    ctx.fillRect(legendCenterX - 35, legendY - 6, 16, 12);
    ctx.font = "14px Roboto, sans-serif";
    ctx.fillStyle = "#333333";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(state.legendLabel || "value", legendCenterX - 12, legendY);
  }
}


// Clean title helper (strips .csv, replaces _ with spaces)
function cleanTitle(filename) {
  return filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
}

// RFC 4180 compliant CSV line tokenizer
function parseCSVLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

// Intelligent Column Auto-Detector
function detectColumns(headers, rows) {
  const labelKeywords = ['username', 'user', 'thread_name', 'topic_name', 'thread', 'board_name', 'board', 'word', 'term', 'metric', 'category', 'name', 'title'];
  const valueKeywords = ['post_count', 'reply_count', 'merit_received', 'merit_sent', 'merit_transactions', 'merit_per_post', 'total_posts', 'total_merit', 'count', 'value', 'posts', 'replies', 'merits', 'merit'];
  const idKeywords = ['_id', 'id', 'rank', 'url', 'link'];

  let labelIdx = -1;
  let valueIdx = -1;

  // 1. Detect Label Column
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i].toLowerCase();
    if (idKeywords.some(k => h === k || h.endsWith('_id'))) continue;
    if (labelKeywords.some(k => h.includes(k))) {
      labelIdx = i;
      break;
    }
  }
  if (labelIdx === -1) {
    for (let i = 0; i < headers.length; i++) {
      const h = headers[i].toLowerCase();
      if (idKeywords.some(k => h === k || h.endsWith('_id'))) continue;
      labelIdx = i;
      break;
    }
  }
  if (labelIdx === -1) labelIdx = 0;

  // 2. Detect Value Column
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i].toLowerCase();
    if (i === labelIdx) continue;
    if (idKeywords.some(k => h === k || h.endsWith('_id'))) continue;
    if (valueKeywords.some(k => h.includes(k))) {
      valueIdx = i;
      break;
    }
  }
  if (valueIdx === -1) {
    for (let i = 0; i < headers.length; i++) {
      if (i === labelIdx) continue;
      const h = headers[i].toLowerCase();
      if (idKeywords.some(k => h === k || h.endsWith('_id'))) continue;
      const numericCount = rows.filter(r => r[i] !== undefined && !isNaN(parseFloat(r[i]))).length;
      if (numericCount > rows.length / 2) {
        valueIdx = i;
        break;
      }
    }
  }
  if (valueIdx === -1) {
    valueIdx = headers.length > 1 ? (labelIdx === 0 ? 1 : 0) : 0;
  }

  return { labelIdx, valueIdx };
}

// HTML Entity decoder
function decodeHtmlEntities(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

// Extract items from raw parsed data based on column choices and limit
function extractItemsFromRawData(labelIdx, valueIdx, limit) {
  const newItems = [];
  const maxRows = limit === "all" ? state.rawRows.length : parseInt(limit, 10) || 20;
  const sliceRows = state.rawRows.slice(0, maxRows);

  sliceRows.forEach((row, i) => {
    if (row.length > Math.max(labelIdx, valueIdx)) {
      const metric = decodeHtmlEntities(row[labelIdx] || `Item ${i + 1}`);
      const val = parseFloat(row[valueIdx]);
      if (!isNaN(val)) {
        const color = DEFAULT_PALETTE[i % DEFAULT_PALETTE.length];
        newItems.push({ metric, value: val, color });
      }
    }
  });

  if (newItems.length > 0) {
    state.items = newItems;
    state.currentLabelCol = labelIdx;
    state.currentValueCol = valueIdx;
    state.rowLimit = limit;
    
    if (state.rawHeaders[valueIdx]) {
      state.legendLabel = state.rawHeaders[valueIdx].replace(/_/g, " ");
    } else {
      state.legendLabel = "value";
    }

    // Auto-detect optimal scale
    const posValues = newItems.map(it => it.value).filter(v => v > 0);
    if (posValues.length > 0) {
      const minV = Math.min(...posValues);
      const maxV = Math.max(...posValues);
      if (maxV / minV > 50 && minV > 0) {
        state.scaleType = "log";
        btnScaleLog.classList.add("active");
        btnScaleLinear.classList.remove("active");
      } else {
        state.scaleType = "linear";
        btnScaleLinear.classList.add("active");
        btnScaleLog.classList.remove("active");
      }
    }

    fileInfoBadge.textContent = `${state.filename} (${newItems.length} metrics)`;
    updateTableUI();
    renderChart();
  }
}

// Update Column Selectors UI
function updateColumnSelectors(headers, selectedLabelIdx, selectedValueIdx) {
  if (!columnSelectGroup || !selectMetricCol || !selectValueCol) return;

  if (headers.length > 2) {
    columnSelectGroup.style.display = "flex";
    selectMetricCol.innerHTML = "";
    selectValueCol.innerHTML = "";

    headers.forEach((h, idx) => {
      const optM = document.createElement("option");
      optM.value = idx;
      optM.textContent = h;
      if (idx === selectedLabelIdx) optM.selected = true;
      selectMetricCol.appendChild(optM);

      const optV = document.createElement("option");
      optV.value = idx;
      optV.textContent = h;
      if (idx === selectedValueIdx) optV.selected = true;
      selectValueCol.appendChild(optV);
    });
  } else {
    columnSelectGroup.style.display = "none";
  }
}

// Robust CSV Parser
function parseCSV(text, filename = "Custom_data.csv") {
  const lines = text.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return;

  const rawHeaders = parseCSVLine(lines[0]).map(h => h.replace(/^["']|["']$/g, "").trim());
  const rawRows = lines.slice(1).map(l => parseCSVLine(l).map(c => c.replace(/^["']|["']$/g, "").trim()));

  state.rawHeaders = rawHeaders;
  state.rawRows = rawRows;
  state.filename = filename;
  state.title = cleanTitle(filename);
  settingTitle.value = state.title;

  const { labelIdx, valueIdx } = detectColumns(rawHeaders, rawRows);
  updateColumnSelectors(rawHeaders, labelIdx, valueIdx);
  extractItemsFromRawData(labelIdx, valueIdx, state.rowLimit);
}

// Shuffle bar colors
function shuffleColors() {
  if (!state.items || state.items.length === 0) return;

  let pool = [...DEFAULT_PALETTE];
  while (pool.length < state.items.length) {
    pool = pool.concat(DEFAULT_PALETTE);
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Ensure adjacent items don't have identical colors
  for (let i = 1; i < state.items.length; i++) {
    if (pool[i] === pool[i - 1] && i + 1 < pool.length) {
      const temp = pool[i];
      pool[i] = pool[i + 1];
      pool[i + 1] = temp;
    }
  }

  state.items.forEach((item, idx) => {
    item.color = pool[idx];
  });

  updateTableUI();
  renderChart();
}

// Sync Data Table with State
function updateTableUI() {
  tableBody.innerHTML = "";
  state.items.forEach((item, index) => {
    const tr = document.createElement("tr");

    // Color picker
    const tdColor = document.createElement("td");
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = item.color;
    colorInput.addEventListener("input", (e) => {
      item.color = e.target.value;
      renderChart();
    });
    tdColor.appendChild(colorInput);
    tr.appendChild(tdColor);

    // Metric name
    const tdMetric = document.createElement("td");
    const metricInput = document.createElement("input");
    metricInput.type = "text";
    metricInput.value = item.metric;
    metricInput.addEventListener("input", (e) => {
      item.metric = e.target.value;
      renderChart();
    });
    tdMetric.appendChild(metricInput);
    tr.appendChild(tdMetric);

    // Value
    const tdValue = document.createElement("td");
    const valInput = document.createElement("input");
    valInput.type = "number";
    valInput.step = "any";
    valInput.value = item.value;
    valInput.addEventListener("input", (e) => {
      item.value = parseFloat(e.target.value) || 0;
      renderChart();
    });
    tdValue.appendChild(valInput);
    tr.appendChild(tdValue);

    // Delete button
    const tdDel = document.createElement("td");
    const btnDel = document.createElement("button");
    btnDel.className = "btn-delete-row";
    btnDel.innerHTML = "&times;";
    btnDel.title = "Delete metric";
    btnDel.addEventListener("click", () => {
      state.items.splice(index, 1);
      updateTableUI();
      renderChart();
    });
    tdDel.appendChild(btnDel);
    tr.appendChild(tdDel);

    tableBody.appendChild(tr);
  });
}


// Export to PNG (2x HD)
btnExportPng.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${state.title.replace(/\s+/g, "_")}_3D_Chart.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});

// Copy Image to Clipboard
btnCopyImage.addEventListener("click", async () => {
  try {
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
      const origText = btnCopyImage.innerHTML;
      btnCopyImage.innerHTML = "✓ Copied!";
      setTimeout(() => { btnCopyImage.innerHTML = origText; }, 1800);
    });
  } catch (err) {
    alert("Clipboard copy failed or permission denied: " + err.message);
  }
});

// Export to SVG
btnExportSvg.addEventListener("click", () => {
  const width = canvas.width;
  const height = canvas.height;
  const plotX = 140;
  const plotY = 120;
  const plotW = width - plotX - 80;
  const plotH = height - plotY - 170;
  const baselineY = plotY + plotH;
  const dx = state.depth;
  const dy = Math.round(state.depth * 0.72);

  const posVals = state.items.map(it => it.value).filter(v => v > 0);
  const minVal = posVals.length > 0 ? Math.min(...posVals) : 1;
  const maxVal = Math.max(...state.items.map(it => it.value), 1);
  const { max: maxLinearVal } = getNiceScale(maxVal, 5);

  let logMin = Math.max(0, Math.floor(Math.log10(minVal)));
  let logMax = Math.ceil(Math.log10(maxVal));
  if (logMax <= logMin) logMax = logMin + 1;
  if (Math.log10(maxVal) > logMax - 0.05) logMax += 0.2;

  function getSvgY(val) {
    if (state.scaleType === "log") {
      const clampedVal = Math.max(val, 1);
      const ratio = (Math.log10(clampedVal) - logMin) / (logMax - logMin);
      return baselineY - ratio * plotH;
    } else {
      return baselineY - (Math.max(0, val) / maxLinearVal) * plotH;
    }
  }

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n`;
  svg += `<rect width="${width}" height="${height}" fill="#ffffff"/>\n`;

  if (state.showFloor) {
    svg += `<polygon points="${plotX},${baselineY} ${plotX + dx},${baselineY - dy} ${plotX + plotW + dx},${baselineY - dy} ${plotX + plotW},${baselineY}" fill="#f1f1f1"/>\n`;
    svg += `<rect x="${plotX}" y="${baselineY}" width="${plotW}" height="12" fill="#dcdcdc"/>\n`;
  }

  const count = state.items.length;
  let labelAngle = 0;
  if (state.labelAngle === "slanted") {
    labelAngle = -Math.PI / 5;
  } else if (state.labelAngle === "vertical") {
    labelAngle = -Math.PI / 2;
  } else if (state.labelAngle === "auto") {
    const maxLen = Math.max(...state.items.map(it => (it.metric || "").length), 0);
    const avgSlotWidth = plotW / Math.max(1, count);
    if (count > 12 || avgSlotWidth < 120 || (maxLen > 9 && avgSlotWidth < 160)) {
      labelAngle = -Math.PI / 5;
    }
  }
  const labelDeg = Math.round((labelAngle * 180) / Math.PI);

  if (count > 0) {
    const slotWidth = plotW / count;
    const barWidth = Math.max(8, slotWidth * state.barWidthRatio);
    const offset = (slotWidth - barWidth) / 2;

    state.items.forEach((item, i) => {
      const bx = plotX + i * slotWidth + offset;
      const by = getSvgY(item.value);
      const h = Math.max(0, baselineY - by);
      const topCol = adjustBrightness(item.color, 25);
      const sideCol = adjustBrightness(item.color, -25);
      const valStr = Number.isInteger(item.value) ? item.value.toLocaleString() : item.value.toFixed(2);

      svg += `<rect x="${bx}" y="${by}" width="${barWidth}" height="${h}" fill="${item.color}"/>\n`;
      svg += `<polygon points="${bx},${by} ${bx + dx},${by - dy} ${bx + barWidth + dx},${by - dy} ${bx + barWidth},${by}" fill="${topCol}"/>\n`;
      svg += `<polygon points="${bx + barWidth},${by} ${bx + barWidth + dx},${by - dy} ${bx + barWidth + dx},${baselineY - dy} ${bx + barWidth},${baselineY}" fill="${sideCol}"/>\n`;

      if (labelAngle === 0) {
        svg += `<text x="${bx + barWidth / 2}" y="${baselineY + 28}" font-family="Roboto, sans-serif" font-size="${state.hAxisSize}" text-anchor="middle" fill="#000000">${item.metric}</text>\n`;
      } else {
        svg += `<text transform="translate(${bx + barWidth / 2}, ${baselineY + 14}) rotate(${labelDeg})" font-family="Roboto, sans-serif" font-size="${state.hAxisSize}" text-anchor="end" dominant-baseline="middle" fill="#000000">${item.metric}</text>\n`;
      }

      if (state.showLabels) {
        svg += `<text x="${bx + barWidth / 2 + dx / 2}" y="${by - dy - 6}" font-family="Roboto, sans-serif" font-size="${state.labelSize}" font-style="italic" text-anchor="middle" fill="#000000">${valStr}</text>\n`;
      }
    });
  }

  svg += `<text x="${plotX + plotW / 2}" y="65" font-family="Roboto, sans-serif" font-size="${state.titleSize}" font-style="${state.titleItalic ? "italic" : "normal"}" font-weight="${state.titleBold ? "bold" : "normal"}" text-anchor="middle" fill="#000000">${state.title}</text>\n`;
  
  if (state.showLegend) {
    const legendY = height - 42;
    const legendCenterX = plotX + plotW / 2;
    svg += `<rect x="${legendCenterX - 35}" y="${legendY - 6}" width="16" height="12" fill="#4285F4"/>\n`;
    svg += `<text x="${legendCenterX - 12}" y="${legendY}" font-family="Roboto, sans-serif" font-size="14" fill="#333333" dominant-baseline="middle">${state.legendLabel || "value"}</text>\n`;
  }

  svg += `</svg>`;

  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `${state.title.replace(/\s+/g, "_")}_3D_Chart.svg`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
});


// File upload handling
csvFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    parseCSV(evt.target.result, file.name);
    sampleSelect.value = "custom";
  };
  reader.readAsText(file);
});

// Drag and drop handling
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropOverlay.classList.add("active");
});
dropZone.addEventListener("dragleave", (e) => {
  if (e.target === dropZone || e.target === dropOverlay) {
    dropOverlay.classList.remove("active");
  }
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropOverlay.classList.remove("active");
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      parseCSV(evt.target.result, file.name);
      sampleSelect.value = "custom";
    };
    reader.readAsText(file);
  }
});

// Sample dataset selector
sampleSelect.addEventListener("change", (e) => {
  const key = e.target.value;
  if (PRESETS[key]) {
    const preset = PRESETS[key];
    state.items = JSON.parse(JSON.stringify(preset.data));
    state.title = preset.title;
    state.filename = preset.filename;
    state.scaleType = preset.scaleType || "log";
    state.legendLabel = preset.legendLabel || "value";
    
    if (state.scaleType === "log") {
      btnScaleLog.classList.add("active");
      btnScaleLinear.classList.remove("active");
    } else {
      btnScaleLinear.classList.add("active");
      btnScaleLog.classList.remove("active");
    }

    if (columnSelectGroup) columnSelectGroup.style.display = "none";
    settingTitle.value = state.title;
    fileInfoBadge.textContent = `${preset.filename} (${preset.data.length} metrics)`;
    updateTableUI();
    renderChart();
  }
});

// Column selector changes
if (selectMetricCol) {
  selectMetricCol.addEventListener("change", (e) => {
    extractItemsFromRawData(parseInt(e.target.value, 10), state.currentValueCol, state.rowLimit);
  });
}
if (selectValueCol) {
  selectValueCol.addEventListener("change", (e) => {
    extractItemsFromRawData(state.currentLabelCol, parseInt(e.target.value, 10), state.rowLimit);
  });
}
if (selectRowLimit) {
  selectRowLimit.addEventListener("change", (e) => {
    state.rowLimit = e.target.value;
    if (state.rawRows && state.rawRows.length > 0) {
      extractItemsFromRawData(state.currentLabelCol, state.currentValueCol, state.rowLimit);
    }
  });
}

// Scale buttons
btnScaleLog.addEventListener("click", () => {
  state.scaleType = "log";
  btnScaleLog.classList.add("active");
  btnScaleLinear.classList.remove("active");
  renderChart();
});
btnScaleLinear.addEventListener("click", () => {
  state.scaleType = "linear";
  btnScaleLinear.classList.add("active");
  btnScaleLog.classList.remove("active");
  renderChart();
});

// Drawer toggles
btnToggleEditor.addEventListener("click", () => {
  dataDrawer.classList.toggle("open");
  settingsDrawer.classList.remove("open");
});
btnCloseDrawer.addEventListener("click", () => dataDrawer.classList.remove("open"));

btnToggleSettings.addEventListener("click", () => {
  settingsDrawer.classList.toggle("open");
  dataDrawer.classList.remove("open");
});
btnCloseSettings.addEventListener("click", () => settingsDrawer.classList.remove("open"));

// Table actions
btnAddRow.addEventListener("click", () => {
  const nextColor = DEFAULT_PALETTE[state.items.length % DEFAULT_PALETTE.length];
  state.items.push({ metric: "New Metric", value: 100, color: nextColor });
  updateTableUI();
  renderChart();
});

if (btnShuffleColors) btnShuffleColors.addEventListener("click", shuffleColors);
if (btnDrawerShuffleColors) btnDrawerShuffleColors.addEventListener("click", shuffleColors);
if (btnSettingsShuffleColors) btnSettingsShuffleColors.addEventListener("click", shuffleColors);

btnResetData.addEventListener("click", () => {
  state.items = JSON.parse(JSON.stringify(PRESETS.august_2026.data));
  state.title = PRESETS.august_2026.title;
  state.scaleType = PRESETS.august_2026.scaleType;
  btnScaleLog.classList.add("active");
  btnScaleLinear.classList.remove("active");
  settingTitle.value = state.title;
  sampleSelect.value = "august_2026";
  if (columnSelectGroup) columnSelectGroup.style.display = "none";
  fileInfoBadge.textContent = "Metadata_of_forum.csv (13 metrics)";
  updateTableUI();
  renderChart();
});

btnApplyRawCsv.addEventListener("click", () => {
  const val = rawCsvText.value.trim();
  if (val) parseCSV(val, "Pasted_data.csv");
});

// Settings inputs
settingTitle.addEventListener("input", (e) => {
  state.title = e.target.value;
  renderChart();
});
settingTitleSize.addEventListener("input", (e) => {
  state.titleSize = parseInt(e.target.value, 10) || 30;
  renderChart();
});
settingTitleBold.addEventListener("change", (e) => {
  state.titleBold = e.target.checked;
  renderChart();
});
settingTitleItalic.addEventListener("change", (e) => {
  state.titleItalic = e.target.checked;
  renderChart();
});
setting3dDepth.addEventListener("input", (e) => {
  state.depth = parseInt(e.target.value, 10) || 24;
  depthVal.textContent = `${state.depth}px`;
  renderChart();
});
settingBarWidth.addEventListener("input", (e) => {
  state.barWidthRatio = parseFloat(e.target.value) || 0.68;
  widthVal.textContent = state.barWidthRatio.toFixed(2);
  renderChart();
});
settingShowFloor.addEventListener("change", (e) => {
  state.showFloor = e.target.checked;
  renderChart();
});
settingShowLegend.addEventListener("change", (e) => {
  state.showLegend = e.target.checked;
  renderChart();
});
settingShowLabels.addEventListener("change", (e) => {
  state.showLabels = e.target.checked;
  renderChart();
});
settingShowMinorTicks.addEventListener("change", (e) => {
  state.showMinorTicks = e.target.checked;
  renderChart();
});
settingShowGridlines.addEventListener("change", (e) => {
  state.showGridlines = e.target.checked;
  renderChart();
});
settingShowMinorGridlines.addEventListener("change", (e) => {
  state.showMinorGridlines = e.target.checked;
  renderChart();
});
if (settingLabelAngle) {
  settingLabelAngle.addEventListener("change", (e) => {
    state.labelAngle = e.target.value;
    renderChart();
  });
}
settingHAxisSize.addEventListener("input", (e) => {
  state.hAxisSize = parseInt(e.target.value, 10) || 18;
  renderChart();
});
settingLabelSize.addEventListener("input", (e) => {
  state.labelSize = parseInt(e.target.value, 10) || 18;
  renderChart();
});

// Window resize handling
window.addEventListener("resize", () => {
  renderChart();
});

// Initial boot
updateTableUI();
renderChart();


