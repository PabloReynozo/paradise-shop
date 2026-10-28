import { MercadoPagoConfig, Preference } from '【entity-mercadopago¦canonical_name=Mercado Pago】';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  try {
    const { items } = req.body;

    // Mapeamos tu carrito al formato que exige 【entity-Mercado Pago¦canonical_name=Mercado Pago】
    const mpItems = items.map(item => ({
      title: item.title || item.nombre || "Producto Paradise",
      quantity: Number(item.quantity || 1),
      unit_price: Number(String(item.unit_price || item.precio || "25990").replace(/[^0-9]/g, "")),
      currency_id: "CLP"
    }));

    const client = new MercadoPagoConfig({ 
      accessToken: process.env.MP_ACCESS_TOKEN 
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: mpItems,
        statement_descriptor: "PARADISE SHOP",
        back_urls: {
          success: "https://www.paradiseshop.cl/success",
          failure: "https://www.paradiseshop.cl/failure",
          pending: "https://www.paradiseshop.cl/pending"
        },
        auto_return: "approved",
      }
    });

    return res.status(200).json({ 
      preferenceId: result.id,
      init_point: result.init_point // <-- importante
    });
  } catch (error) {
    console.error("Error MP:", error);
    return res.status(500).json({ error: 'Error al generar pago', detalle: error.message });
  }
}