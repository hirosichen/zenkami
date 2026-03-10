/**
 * 八卦 - The Eight Trigrams
 * Order: 乾(0) 兌(1) 離(2) 震(3) 巽(4) 坎(5) 艮(6) 坤(7)
 * This follows the traditional binary-descending order used in King Wen mapping.
 */

export interface Trigram {
  index: number;
  name: string;
  fullName: string;
  pinyin: string;
  symbol: string;
  /** [bottom, middle, top] where 1 = yang, 0 = yin */
  lines: [number, number, number];
  nature: string;
  element: string;
  direction: string;
  familyMember: string;
  bodyPart: string;
  animal: string;
  description: string;
}

export const trigrams: Trigram[] = [
  {
    index: 0,
    name: "乾",
    fullName: "乾為天",
    pinyin: "qián",
    symbol: "☰",
    lines: [1, 1, 1],
    nature: "健",
    element: "金",
    direction: "西北",
    familyMember: "父",
    bodyPart: "頭",
    animal: "馬",
    description: "天，剛健不息，創造之力",
  },
  {
    index: 1,
    name: "兌",
    fullName: "兌為澤",
    pinyin: "duì",
    symbol: "☱",
    lines: [1, 1, 0],
    nature: "悅",
    element: "金",
    direction: "西",
    familyMember: "少女",
    bodyPart: "口",
    animal: "羊",
    description: "澤，喜悅和樂，溝通之象",
  },
  {
    index: 2,
    name: "離",
    fullName: "離為火",
    pinyin: "lí",
    symbol: "☲",
    lines: [1, 0, 1],
    nature: "麗",
    element: "火",
    direction: "南",
    familyMember: "中女",
    bodyPart: "目",
    animal: "雉",
    description: "火，光明附麗，文明之象",
  },
  {
    index: 3,
    name: "震",
    fullName: "震為雷",
    pinyin: "zhèn",
    symbol: "☳",
    lines: [1, 0, 0],
    nature: "動",
    element: "木",
    direction: "東",
    familyMember: "長男",
    bodyPart: "足",
    animal: "龍",
    description: "雷，震動奮起，行動之始",
  },
  {
    index: 4,
    name: "巽",
    fullName: "巽為風",
    pinyin: "xùn",
    symbol: "☴",
    lines: [0, 1, 1],
    nature: "入",
    element: "木",
    direction: "東南",
    familyMember: "長女",
    bodyPart: "股",
    animal: "雞",
    description: "風，柔順深入，漸進之道",
  },
  {
    index: 5,
    name: "坎",
    fullName: "坎為水",
    pinyin: "kǎn",
    symbol: "☵",
    lines: [0, 1, 0],
    nature: "陷",
    element: "水",
    direction: "北",
    familyMember: "中男",
    bodyPart: "耳",
    animal: "豕",
    description: "水，險陷重重，智慧與考驗",
  },
  {
    index: 6,
    name: "艮",
    fullName: "艮為山",
    pinyin: "gèn",
    symbol: "☶",
    lines: [0, 0, 1],
    nature: "止",
    element: "土",
    direction: "東北",
    familyMember: "少男",
    bodyPart: "手",
    animal: "狗",
    description: "山，靜止安定，止息之德",
  },
  {
    index: 7,
    name: "坤",
    fullName: "坤為地",
    pinyin: "kūn",
    symbol: "☷",
    lines: [0, 0, 0],
    nature: "順",
    element: "土",
    direction: "西南",
    familyMember: "母",
    bodyPart: "腹",
    animal: "牛",
    description: "地，柔順承載，包容萬物",
  },
];

/**
 * Get a trigram by its index (0-7).
 */
export function getTrigramByIndex(index: number): Trigram {
  if (index < 0 || index > 7) {
    throw new Error(`Invalid trigram index: ${index}`);
  }
  return trigrams[index];
}

/**
 * Get a trigram by its Chinese name.
 */
export function getTrigramByName(name: string): Trigram | undefined {
  return trigrams.find((t) => t.name === name);
}
