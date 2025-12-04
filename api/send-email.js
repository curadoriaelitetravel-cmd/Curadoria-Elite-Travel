import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, email, message, rating } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'curadoriaelitetravel@gmail.com',
    from: 'curadoriaelitetravel@gmail.com',
    subject: 'Nova mensagem do site',
    html: `
      <h2>Nova mensagem enviada pelo site</h2>
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
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
}
