import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const AUDIENCE_ID = '384eb9c6-6d24-424f-b390-00cb48e84ed6';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { email } = body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return new Response(JSON.stringify({ error: '請輸入有效的電子郵件地址' }), { status: 400 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: '服務未設定' }), { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    // Resend returns 409 if contact already exists, treat as success
    if (message.includes('already exists')) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
