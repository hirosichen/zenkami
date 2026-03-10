/**
 * Three-coin divination method (三幣法)
 *
 * Each throw of 3 coins yields a value 6-9:
 *   6 = old yin  (---x---) changing → yang
 *   7 = young yang (———)
 *   8 = young yin  (--- ---)
 *   9 = old yang (———o———) changing → yin
 *
 * Heads = 3, Tails = 2
 * Sum of 3 coins: 6,7,8,9
 */

export interface LineResult {
  value: 6 | 7 | 8 | 9;
  coins: [number, number, number]; // each 2 or 3
  isYang: boolean;
  isChanging: boolean;
}

export interface DivinationResult {
  lines: LineResult[];
  hexagramNumber: number;
  transformedHexagramNumber: number | null;
  changingLines: number[]; // 0-indexed positions of changing lines
}

/**
 * Throw three coins once → line value 6–9
 */
export function throwCoins(): LineResult {
  const coins: [number, number, number] = [
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
  ];
  const sum = coins[0] + coins[1] + coins[2];
  const value = sum as 6 | 7 | 8 | 9;
  return {
    value,
    coins,
    isYang: value === 7 || value === 9,
    isChanging: value === 6 || value === 9,
  };
}

/**
 * Get the trigram index (0-7) from three line values (bottom to top).
 * Lines mapped: yang=1, yin=0 → binary → index in [乾兌離震巽坎艮坤] order.
 */
function trigramIndex(l1: number, l2: number, l3: number): number {
  // binary: top*4 + mid*2 + bot — then map to King Wen trigram order
  const bin = l3 * 4 + l2 * 2 + l1;
  // binary 7=111=乾(0), 6=110=兌(1), 5=101=離(2), 4=100=震(3),
  //        3=011=巽(4), 2=010=坎(5), 1=001=艮(6), 0=000=坤(7)
  return 7 - bin;
}

/**
 * Convert line value to yang(1)/yin(0) for the primary hexagram.
 */
function lineToYinYang(v: number): number {
  return (v === 7 || v === 9) ? 1 : 0;
}

/**
 * Convert line value to the TRANSFORMED yang/yin.
 */
function lineToTransformed(v: number): number {
  if (v === 9) return 0; // old yang → yin
  if (v === 6) return 1; // old yin → yang
  return lineToYinYang(v);
}

import { kingWenTable } from './hexagrams';

/**
 * Perform a full divination (6 line throws).
 */
export function performDivination(): DivinationResult {
  const lines: LineResult[] = [];
  for (let i = 0; i < 6; i++) {
    lines.push(throwCoins());
  }

  const changingLines = lines
    .map((l, i) => l.isChanging ? i : -1)
    .filter(i => i >= 0);

  // Primary hexagram
  const primaryYY = lines.map(l => lineToYinYang(l.value));
  const lowerIdx = trigramIndex(primaryYY[0], primaryYY[1], primaryYY[2]);
  const upperIdx = trigramIndex(primaryYY[3], primaryYY[4], primaryYY[5]);
  const hexagramNumber = kingWenTable[lowerIdx][upperIdx];

  // Transformed hexagram (if any changing lines)
  let transformedHexagramNumber: number | null = null;
  if (changingLines.length > 0) {
    const transYY = lines.map(l => lineToTransformed(l.value));
    const tLowerIdx = trigramIndex(transYY[0], transYY[1], transYY[2]);
    const tUpperIdx = trigramIndex(transYY[3], transYY[4], transYY[5]);
    transformedHexagramNumber = kingWenTable[tLowerIdx][tUpperIdx];
  }

  return { lines, hexagramNumber, transformedHexagramNumber, changingLines };
}
