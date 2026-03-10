/**
 * I Ching Engine – Main orchestrator for divination
 */

import { trigrams, getTrigramByIndex, type Trigram } from "./trigrams";
import {
  hexagrams,
  kingWenTable,
  getHexagramByNumber,
  lookupHexagram,
  type Hexagram,
  type HexagramLine,
} from "./hexagrams";
import {
  throwCoins,
  performDivination as rawDivination,
  type LineResult,
  type DivinationResult,
} from "./divination";

// ── Re-export everything downstream consumers may need ──────────────
export type { Trigram, Hexagram, HexagramLine, LineResult, DivinationResult };
export {
  trigrams,
  getTrigramByIndex,
  hexagrams,
  kingWenTable,
  getHexagramByNumber,
  lookupHexagram,
  throwCoins,
};

// ── Interpretation types ─────────────────────────────────────────────

export interface LineInterpretation {
  position: number;
  text: string;
  meaning: string;
}

export interface HexagramInterpretation {
  hexagram: Hexagram;
  upperTrigram: Trigram;
  lowerTrigram: Trigram;
}

export interface Interpretation {
  question?: string;
  original: HexagramInterpretation;
  changed?: HexagramInterpretation;
  changingLines: LineInterpretation[];
  summary: string;
}

// ── Core API ─────────────────────────────────────────────────────────

/**
 * Perform a complete divination, optionally recording the question.
 */
export function performFullDivination(question?: string): {
  result: DivinationResult;
  interpretation: Interpretation;
} {
  const result = rawDivination();
  const interpretation = interpretResult(result, question);
  return { result, interpretation };
}

/**
 * Interpret a raw DivinationResult into structured text.
 */
export function interpretResult(
  result: DivinationResult,
  question?: string
): Interpretation {
  const original = buildHexagramInterpretation(result.hexagramNumber);

  let changed: HexagramInterpretation | undefined;
  if (result.transformedHexagramNumber !== null) {
    changed = buildHexagramInterpretation(result.transformedHexagramNumber);
  }

  const changingLines: LineInterpretation[] = result.changingLines.map((idx) => {
    const line = original.hexagram.lines[idx];
    return {
      position: idx + 1, // 1-indexed for display (初、二、三…)
      text: line?.text ?? "",
      meaning: line?.meaning ?? "",
    };
  });

  const summary = buildSummary(original, changed, changingLines, question);

  return { question, original, changed, changingLines, summary };
}

/**
 * Lookup a hexagram by its King Wen number (1-64).
 */
export function getHexagramByNum(num: number): Hexagram {
  const hex = getHexagramByNumber(num);
  if (!hex) throw new Error(`Hexagram #${num} not found`);
  return hex;
}

/**
 * Lookup a hexagram by its upper and lower trigram indices (0-7).
 */
export function getHexagramByTrigrams(
  upper: number,
  lower: number
): Hexagram {
  const num = lookupHexagram(lower, upper);
  return getHexagramByNum(num);
}

// ── Helpers ──────────────────────────────────────────────────────────

function buildHexagramInterpretation(num: number): HexagramInterpretation {
  const hexagram = getHexagramByNum(num);
  const upperTrigram = getTrigramByIndex(hexagram.upperTrigram);
  const lowerTrigram = getTrigramByIndex(hexagram.lowerTrigram);
  return { hexagram, upperTrigram, lowerTrigram };
}

function buildSummary(
  original: HexagramInterpretation,
  changed: HexagramInterpretation | undefined,
  changingLines: LineInterpretation[],
  question?: string
): string {
  const parts: string[] = [];

  if (question) {
    parts.push(`問：${question}`);
  }

  const oh = original.hexagram;
  parts.push(
    `本卦：${oh.fullName}（第${oh.number}卦）` +
      ` ${original.upperTrigram.symbol}${original.lowerTrigram.symbol}`
  );
  parts.push(`卦辭：${oh.judgment}`);
  parts.push(`大象：${oh.image}`);

  if (changingLines.length > 0) {
    parts.push("");
    parts.push(`動爻（${changingLines.length}個）：`);
    for (const cl of changingLines) {
      parts.push(`  第${cl.position}爻 — ${cl.text}`);
      parts.push(`    釋義：${cl.meaning}`);
    }
  }

  if (changed) {
    const ch = changed.hexagram;
    parts.push("");
    parts.push(
      `之卦：${ch.fullName}（第${ch.number}卦）` +
        ` ${changed.upperTrigram.symbol}${changed.lowerTrigram.symbol}`
    );
    parts.push(`卦辭：${ch.judgment}`);
  }

  return parts.join("\n");
}
