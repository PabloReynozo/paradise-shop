// web-frontend/api/create_preference.js
import { MercadoPagoConfig, Preference } from 'mercadopago';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { items } = req.body;

    const client = new MercadoPagoConfig({ 
      accessToken: process.env.MP_ACCESS_TOKEN 
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: items,
        statement_descriptor: "PARADISE SHOP",
        back_urls: {
          success: "https://paradiseshop.cl",
          failure: "https://paradiseshop.cl",
          pending: "https://paradiseshop.cl"
        },
        auto_return: "approved",
      }
    });

    return res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    return res.status(500).json({ error: 'Error al generar pago', detalle: error.message });
  }
}