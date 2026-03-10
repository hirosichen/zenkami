#!/usr/bin/env node
import fs from 'fs';

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error('Set GEMINI_API_KEY'); process.exit(1); }

const MODEL = 'gemini-3-pro-image-preview';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const prompt = 'Traditional Chinese painting style (中國風水墨風格), inspired by ancient Chinese philosophy, Book of Changes aesthetics, and yin-yang harmony. A majestic bagua (八卦) diagram centered in composition, with golden trigram lines on deep indigo background. Ancient Chinese yin-yang symbol at center with ethereal glow. Ink wash clouds frame the edges. Classical Chinese philosophy aesthetic. Elegant, authoritative, mystical. Landscape 1200x630. Do not include any text, words, letters, numbers, watermarks, logos, or UI elements in the image.';

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
    }
  })
});

const data = await res.json();
const parts = data.candidates?.[0]?.content?.parts || [];
const imgPart = parts.find(p => p.inlineData);
if (!imgPart) {
  console.error('No image returned', JSON.stringify(data).slice(0, 500));
  process.exit(1);
}

const buf = Buffer.from(imgPart.inlineData.data, 'base64');
fs.writeFileSync('public/images/og-default.webp', buf);
console.log(`Saved og-default.webp (${buf.length} bytes)`);
