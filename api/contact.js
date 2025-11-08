// Vercel Serverless Function: Contact form handler
// Supports either Resend (preferred) or SMTP via Nodemailer based on env variables.
// Env:
// - RESEND_API_KEY (optional)
// - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE(optional: 'true'/'false')
// - TO_EMAIL (default: info@marslink.co.jp)
// - FROM_EMAIL (recommended when using SMTP or a verified domain for Resend)

const sendWithResend = async ({ from, to, subject, html, text }) => {
  const { Resend } = require('resend');
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY not configured');
  const resend = new Resend(apiKey);
  const params = {
    from: from || 'MarsLink <no-reply@resend.dev>',
    to: [to],
    subject,
    html,
    text
  };
  const result = await resend.emails.send(params);
  if (result.error) {
    throw new Error(result.error.message || 'Resend send error');
  }
  return result;
};

const sendWithSMTP = async ({ from, to, subject, html, text }) => {
  const nodemailer = require('nodemailer');
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true';
  if (!host || !user || !pass) throw new Error('SMTP_* env not fully configured');
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });
  const info = await transporter.sendMail({
    from: from || user,
    to,
    subject,
    html,
    text
  });
  return info;
};

const parseFormBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      try {
        const contentType = req.headers['content-type'] || '';
        if (contentType.includes('application/json')) {
          const data = JSON.parse(raw || '{}');
          resolve(data);
          return;
        }
        // application/x-www-form-urlencoded
        const params = new URLSearchParams(raw);
        const data = Object.fromEntries(params.entries());
        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {
    const body = await parseFormBody(req);
    const name = (body.name || '').trim();
    const company = (body.company || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const message = (body.message || '').trim();

    if (!name || !company || !email || !phone || !message) {
      res.statusCode = 400;
      res.json({ success: false, message: '必須項目が不足しています。' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.statusCode = 400;
      res.json({ success: false, message: 'メールアドレスが不正です。' });
      return;
    }

    const to = process.env.TO_EMAIL || 'info@marslink.co.jp';
    const from = process.env.FROM_EMAIL || 'no-reply@marslink.co.jp';
    const subject = `【MarsLink】お問い合わせ - ${name} 様`;
    const text = [
      '株式会社MarsLink 御中',
      '',
      'ウェブサイトからお問い合わせがありました。',
      '',
      '――――――――――――――――――――――――――――――――――',
      '【お問い合わせ内容】',
      '――――――――――――――――――――――――――――――――――',
      '',
      `氏名：${name}`,
      `会社名：${company}`,
      `Email：${email}`,
      `電話番号：${phone}`,
      '',
      'メッセージ：',
      message,
      '',
      `送信日時：${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
      `送信者IP：${req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''}`
    ].join('\n');
    const html = `
      <div style="font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">
        <p>株式会社MarsLink 御中</p>
        <p>ウェブサイトからお問い合わせがありました。</p>
        <hr/>
        <h3>お問い合わせ内容</h3>
        <ul>
          <li><strong>氏名：</strong>${name}</li>
          <li><strong>会社名：</strong>${company}</li>
          <li><strong>Email：</strong>${email}</li>
          <li><strong>電話番号：</strong>${phone}</li>
        </ul>
        <p><strong>メッセージ：</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p>送信日時：${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
      </div>
    `;

    // Prefer Resend; fallback to SMTP
    const useResend = !!process.env.RESEND_API_KEY;
    if (useResend) {
      await sendWithResend({ from, to, subject, html, text });
    } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendWithSMTP({ from, to, subject, html, text });
    } else {
      throw new Error('メール送信設定（RESEND_API_KEY もしくは SMTP_*）が未設定です。');
    }

    res.statusCode = 200;
    res.json({ success: true, message: '送信しました。' });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ success: false, message: '送信に失敗しました。しばらくしてからお試しください。' });
  }
};

