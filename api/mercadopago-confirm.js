const { createClient } = require("@supabase/supabase-js");
const crypto = require("crypto");

async function sendPurchaseEmail(email, items, total, installments, installmentAmount) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  let itemsHtml = "";
  items.forEach((it) => {
    itemsHtml += `<p>${it.category} - ${it.city}</p>`;
  });

  let paymentInfo = "Forma de pagamento: à vista";
  if (installments && installments > 1) {
    paymentInfo = `Forma de pagamento: ${installments}x de R$ ${installmentAmount}`;
  }

  const html = `
  <h2>Compra confirmada</h2>

  ${itemsHtml}

  <p><strong>Total da compra: R$ ${total}</strong></p>

  <p>${paymentInfo}</p>

  <p>Para acessar seu material, entre em <strong>Minha conta</strong> no site da Curadoria Elite Travel.</p>

  <p>Agradecemos a sua compra.</p>

  <p><strong>CURADORIA ELITE TRAVEL</strong><br/>
  O seu mundo, bem indicado.</p>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [email],
      subject: "Sua compra foi confirmada",
      html: html,
    }),
  });
}

module.exports = async function handler(req, res) {

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {

    const payment = req.body;

    const metadata = payment.metadata || {};
    const userId = metadata.user_id;

    let items = [];
    try {
      items = JSON.parse(metadata.items || "[]");
    } catch {
      items = [];
    }

    const total = payment.transaction_amount;
    const installments = payment.installments;
    const installmentAmount = payment.transaction_details?.installment_amount;

    // busca email no Supabase
    let userEmail = null;

    if (userId) {

      const { data: userData, error } =
        await supabase.auth.admin.getUserById(userId);

      if (!error && userData?.user?.email) {
        userEmail = userData.user.email;
      }

    }

    try {

      if (userEmail) {
        await sendPurchaseEmail(
          userEmail,
          items,
          total,
          installments,
          installmentAmount
        );
      }

    } catch (emailErr) {
      console.log("email error", emailErr);
    }

    return res.status(200).json({ ok: true });

  } catch (err) {

    return res.status(500).json({
      error: "Webhook error",
      message: err?.message || "Unknown error",
    });

  }

};
