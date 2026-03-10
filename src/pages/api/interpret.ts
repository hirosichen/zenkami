import type { APIRoute } from 'astro';
import { createXai } from '@ai-sdk/xai';
import { generateText } from 'ai';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { question, hexagramName, hexagramFullName, hexagramNumber, judgment, image, changingLines, transformedName, transformedJudgment, nature, keywords } = body;

  if (!hexagramName || !hexagramNumber) {
    return new Response(JSON.stringify({ error: 'Missing hexagram data' }), { status: 400 });
  }

  const apiKey = import.meta.env.XAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'AI service not configured' }), { status: 500 });
  }

  const xai = createXai({ apiKey });

  const changingLinesText = changingLines?.length
    ? `\n變爻：\n${changingLines.map((l: { position: number; text: string; meaning: string }) => `  第${l.position}爻 — ${l.text}（${l.meaning}）`).join('\n')}`
    : '（無變爻）';

  const transformedText = transformedName
    ? `\n之卦（變卦）：${transformedName}\n之卦卦辭：${transformedJudgment}`
    : '';

  const prompt = `你是一位精通易經的國學大師，擅長以深入淺出的方式為人解卦。請根據以下占卦結果，為問卦者提供詳細、具體的解讀。

${question ? `問卦者的問題：${question}` : '（問卦者未提出具體問題，請做通盤解讀）'}

本卦：第${hexagramNumber}卦 ${hexagramFullName}（${hexagramName}）
卦性：${nature}
關鍵字：${keywords?.join('、') || ''}
卦辭：${judgment}
象傳：${image}
${changingLinesText}
${transformedText}

請按照以下結構回覆（使用繁體中文）：

## 卦象總論
（2-3 句話概括此卦的核心意涵，以及對問卦者當前處境的整體判斷）

## 具體解讀
（根據問卦者的問題，結合卦辭、象傳進行 3-4 段具體分析。如果有變爻，重點解析變爻的暗示。如果沒有具體問題，就從事業、感情、健康等面向分析。）

## 行動建議
（3-5 條明確可行的建議，用「宜」和「忌」的方式呈現）

## 總結
（1-2 句話作為最終的指引和鼓勵）

注意：語氣要溫和而有智慧，結合現代生活情境，不要過於晦澀。避免迷信色彩，強調易經作為智慧指引的價值。`;

  try {
    const { text } = await generateText({
      model: xai('grok-3-mini-fast'),
      prompt,
      maxTokens: 1200,
    });

    return new Response(JSON.stringify({ interpretation: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
