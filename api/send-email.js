// api/send-email.js
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type='contact', name, email, subject, message, rating } = req.body || {};

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not set');
    return res.status(500).json({ error: 'SendGrid not configured' });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const to = 'curadoriaelitetravel@gmail.com';
  const from = 'curadoriaelitetravel@gmail.com'; // prefer domain-authenticated sender for deliverability

  const title = (type === 'review') ? `Nova avaliação (${rating || ''}★)` : `Mensagem do site: ${subject || 'Contato'}`;

  const html = `
    <h2>${title}</h2>
    <p><strong>Nome:</strong> ${name || '—'}</p>
    <p><strong>Email:</strong> ${email || '—'}</p>
    ${rating ? `<p><strong>Avaliação:</strong> ${rating} estrelas</p>` : ''}
    <p><strong>Mensagem:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const msg = { to, from, subject: title, html };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SendGrid error', err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
