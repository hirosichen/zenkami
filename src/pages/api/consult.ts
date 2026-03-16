import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, time, note, hexagram, question } = body;

  if (!name || !email || !time) {
    return new Response(JSON.stringify({ error: '請填寫必填欄位' }), { status: 400 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: '服務未設定' }), { status: 500 });
  }

  const resend = new Resend(apiKey);

  const timeLabels: Record<string, string> = {
    'weekday-morning': '平日上午 (9:00-12:00)',
    'weekday-afternoon': '平日下午 (14:00-18:00)',
    'weekday-evening': '平日晚上 (19:00-21:00)',
    'weekend-morning': '週末上午 (10:00-12:00)',
    'weekend-afternoon': '週末下午 (14:00-17:00)',
  };

  try {
    await resend.emails.send({
      from: 'ZenKami 易經研究所 <onboarding@resend.dev>',
      to: 'contact@zenkami.com',
      subject: `新諮詢預約：${name}`,
      html: `
        <h2>新的諮詢預約</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">姓名</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">偏好時段</td><td style="padding:8px;border-bottom:1px solid #eee">${timeLabels[time] || time}</td></tr>
          ${note ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">補充說明</td><td style="padding:8px;border-bottom:1px solid #eee">${note}</td></tr>` : ''}
          ${question ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">占卦問題</td><td style="padding:8px;border-bottom:1px solid #eee">${question}</td></tr>` : ''}
          ${hexagram ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">卦象</td><td style="padding:8px;border-bottom:1px solid #eee">${hexagram}</td></tr>` : ''}
        </table>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
