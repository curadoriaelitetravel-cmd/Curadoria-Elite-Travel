// api/mercadopago-confirm.js
const { createClient } = require("@supabase/supabase-js");

function logStep(step, details = {}) {
  console.log(JSON.stringify({
    source: "mercadopago-confirm",
    step,
    ...details
  }));
}

async function sendApprovedPurchaseEmail(email, name) {
  const resendApiKey = process.env.RESEND_API_KEY;

  const html = `
  <div style="font-family:Arial;padding:30px;background:#0b0b0b;color:#fff">
    <h2 style="color:#d4af37">Curadoria Elite Travel</h2>
    <p>Olá ${name || ""},</p>
    <p>Sua compra foi confirmada com sucesso.</p>
    <p>O material adquirido já está disponível em sua conta.</p>
    <p>Acesse sua conta e entre em <strong>Meus materiais</strong>.</p>
    <br/>
    <p>Obrigado por confiar na Curadoria Elite Travel.</p>
  </div>
  `;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [email],
      subject: "Confirmação de acesso – Curadoria Elite Travel",
      html
    })
  });

  const data = await r.json();

  logStep("email.resend_response", {
    status: r.status,
    ok: r.ok,
    response: data
  });

  return r.ok;
}

module.exports = async function handler(req, res) {

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {

    const paymentId = req.query.payment_id;

    logStep("return.received", { paymentId });

    const mpToken = process.env.MERCADOPAGO_ACCESS_TOKEN_PROD;

    const pay = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${mpToken}`
        }
      }
    );

    const payment = await pay.json();

    const status = payment.status;
    const metadata = payment.metadata || {};

    const userId = metadata.user_id;

    logStep("return.payment_fetched", {
      paymentId,
      paymentStatus: status,
      userId
    });

    if (status !== "approved") {
      return res.status(200).json({ ok: false });
    }

    const { data: userData } = await supabase.auth.admin.getUserById(userId);

    const email = userData?.user?.email;
    const name = userData?.user?.user_metadata?.name;

    logStep("email.customer_lookup", {
      email
    });

    if (!email) {
      logStep("email.error.no_email");
      return res.status(200).json({ ok: false });
    }

    const sent = await sendApprovedPurchaseEmail(email, name);

    logStep("email.sent", { sent });

    return res.status(200).json({
      ok: true,
      email_sent: sent
    });

  } catch (err) {

    logStep("handler.error", {
      message: err.message
    });

    return res.status(500).json({
      error: err.message
    });
  }
};
