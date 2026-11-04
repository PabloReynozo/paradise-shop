// api/webhooks/tee.js - Recibe notificaciones de Tee
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Method not allowed'});

  try {
    const event = req.body;
    console.log('Webhook Tee recibido:', JSON.stringify(event, null, 2));

    if (event.type === 'order.shipped' || event.status === 'shipped') {
      console.log(`Orden ${event.order_id} despachada: ${event.tracking_number}`);
    }

    return res.status(200).json({ received: true });

  } catch (e) {
    console.error('Webhook Tee error:', e);
    return res.status(200).json({ received: true, error: e.message });
  }
}