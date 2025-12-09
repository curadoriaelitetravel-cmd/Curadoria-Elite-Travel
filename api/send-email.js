// /api/send-email.js
// Envia emails (Contato + Avalie-nos) usando SendGrid

import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Campos recebidos do frontend
  const { type, to, name, email, message, rating } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }

  // Carrega chave do SendGrid
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Monta o email
  const msg = {
    to: to || 'curadoriaelitetravel@gmail.com',
    from: 'curadoriaelitetravel@gmail.com', // precisa ser o Sender cadastrado no SendGrid
    subject: type === 'review' ? 'Nova avaliação recebida' : 'Nova mensagem de contato',
    html: `
      <h2>${type === 'review' ? 'Nova Avaliação' : 'Novo Contato'}</h2>

      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      ${
        rating
          ? `<p><strong>Avaliação:</strong> ${rating} estrelas</p>`
          : ''
      }

      <p><strong>Mensagem:</strong><br>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro no SendGrid:', err);
    return res.status(500).json({ error: 'Erro ao enviar email.' });
  }
}
