// api/tee_test_order.js - Acepta GET y POST para prueba
export default async function handler(req, res) {
  // Permitir GET para probar desde el navegador
  if (req.method !== 'POST' && req.method !== 'GET') return res.status(405).json({error: 'Method not allowed'});

  const TEE_TEST_KEY = process.env.TEE_API_TEST_KEY || process.env.TEE_API_KEY;
  if (!TEE_TEST_KEY) return res.status(500).json({error: 'Falta TEE_API_TEST_KEY'});

  const payload = {
    referenciaExterna: `TEST-PS-${Date.now()}`,
    cliente: {
      nombre: 'Prueba Paradise Shop',
      email: 'contacto@radioparadise.cl',
      telefono: '+56900000000',
      rut: '11111111-1'
    },
    envio: {
      tipoEntrega: 'envio',
      direccion: 'Prueba direccion',
      numeroCalle: '123',
      comuna: 'Rancagua',
      region: 'O Higgins',
      observaciones: 'ORDEN DE PRUEBA - NO IMPRIMIR - Test integracion Paradise Shop -> Tee.cl'
    },
    items: [
      {
        idSuperficie: 37,
        idColor: 1,
        idTalla: 3,
        cantidad: 1,
        consideraCustom: true,
        estampados: [
          {
            posicion: 'frente',
            urlImagen: 'https://www.paradiseshop.cl/hombre/punk-test.png',
            anchoCm: 28
          }
        ]
      }
    ]
  };

  try {
    console.log('Enviando ORDEN DE PRUEBA:', JSON.stringify(payload, null, 2));
    
    const r = await fetch('https://tee.cl/api/v1/ordenes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TEE_TEST_KEY}`,
        'Idempotency-Key': payload.referenciaExterna
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json();
    
    if (!r.ok) {
      return res.status(r.status).json({ ok: false, error: 'Tee test error', details: data, payload });
    }

    return res.status(200).json({ ok: true, mensaje: 'Orden de PRUEBA creada - NO se cobra, NO se imprime', tee_response: data, referencia: payload.referenciaExterna });

  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
