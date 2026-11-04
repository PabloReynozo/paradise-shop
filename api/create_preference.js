
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { items, envio, cliente } = req.body || {};
    const accessToken = process.env.MP_ACCESS_TOKEN || process.env.MERCADO_PAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return res.status(500).json({ error: 'Falta MP_ACCESS_TOKEN en Vercel - agregalo con vercel env add' });
    }

    const mpItems = [
      ...(items || []).map(i => ({
        title: (i.nombre || i.titulo || 'Polera Paradise Shop').toString().substring(0, 100),
        quantity: 1,
        unit_price: Number(i.precio) || 23990,
        currency_id: 'CLP'
      })),
      {
        title: envio?.tipo === 'puntos' ? 'Envio Puntos Blue - Blue Express' : 'Envio Domicilio Blue Express',
        quantity: 1,
        unit_price: Number(envio?.costo) || 4000,
        currency_id: 'CLP'
      }
    ];

    // Llamada directa a API de Mercado Pago sin SDK para evitar FUNCTION_INVOCATION_FAILED
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: mpItems,
        payer: { email: cliente?.email || 'cliente@paradiseshop.cl' },
        back_urls: {
          success: 'https://www.paradiseshop.cl/',
          failure: 'https://www.paradiseshop.cl/',
          pending: 'https://www.paradiseshop.cl/'
        },
        auto_return: 'approved',
        statement_descriptor: 'PARADISE SHOP'
      })
    });

    const data = await mpRes.json();
    if (!mpRes.ok) {
      console.error('MP API Error', data);
      return res.status(500).json({ error: 'MP API Error: ' + JSON.stringify(data) });
    }

    return res.status(200).json({ init_point: data.init_point, id: data.id });
  } catch (e) {
    console.error('Handler Error', e);
    return res.status(500).json({ error: e.message });
  }
}
