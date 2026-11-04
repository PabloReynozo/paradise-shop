// api/tee_create_order.js - FINAL Mapeado a tu catálogo Paradise Shop -> Tee.cl API v1
// Endpoint: POST https://tee.cl/api/v1/ordenes
// Basado en PDF API_REST_Tee.cl y catálogos reales de tu cuenta

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Method not allowed'});

  const TEE_API_KEY = process.env.TEE_API_KEY;
  if (!TEE_API_KEY) return res.status(500).json({error: 'Falta TEE_API_KEY en Vercel - agrega con npx vercel env add'});

  try {
    const body = req.body;
    // Esperado desde tu checkout:
    // { 
    //   referencia: 'PS-123', // opcional
    //   producto: { idSuperficie: 37, nombre: 'Polera Oversize 300', color: 'Blanco', idColor: 1, talla: 'M', idTalla: 3, imagenDTF: 'https://paradiseshop.cl/hombre/punk-...' },
    //   cliente: { nombre, email, telefono, rut },
    //   envio: { tipo: 'envio' | 'puntos_blue' | 'retiro', direccion, numeroCalle, comuna, region, codigoSucursalBlue }
    // }

    const producto = body.producto || {};
    const cliente = body.cliente || {};
    const envio = body.envio || {};

    // Mapeo por defecto según tu catálogo real (extraído de /api/tee_catalogo)
    const idSuperficie = producto.idSuperficie || 37; // 37 = Oversize por defecto (tu más vendido)
    const idColor = producto.idColor || 1; // 1 = Blanco, 2 = Negro
    const idTalla = producto.idTalla || 2; // 2 = S, 3 = M, etc - ajusta según tu talla real
    // Para tallas: según tu catálogo: 1=XS, 2=S, buscar M/L/XL en el listado
    // Si no sabes el idTalla, manda talla como string y aquí lo mapeamos:
    const tallaMap = { 'XS':1, 'S':2, 'M':3, 'L':4, 'XL':5, '2XL':16, '3XL':17 };
    const finalIdTalla = idTalla || tallaMap[producto.talla?.toUpperCase()] || 2;

    const referenciaExterna = body.referencia || `PS-${Date.now()}`;

    // Construir items como array de arrays según PDF pág 11: items: [[ { idSuperficie, idColor, idTalla, cantidad, consideraCustom, estampados: [...] } ]]
    const payload = {
      referenciaExterna,
      cliente: {
        nombre: cliente.nombre || 'Cliente Paradise',
        email: cliente.email || 'contacto@radioparadise.cl',
        telefono: cliente.telefono || '',
        rut: cliente.rut || ''
      },
      envio: {
        tipoEntrega: envio.tipo || 'envio', // envio | puntos_blue | retiro
        // Si es envio normal:
        direccion: envio.direccion || cliente.direccion || 'Sin direccion',
        numeroCalle: envio.numeroCalle || '0',
        comuna: envio.comuna || cliente.comuna || 'Rancagua',
        region: envio.region || cliente.region || 'O Higgins',
        // Si es puntos_blue:
        codigoSucursal: envio.codigoSucursal || undefined,
        // Opcional: instrucciones
        observaciones: envio.observaciones || `Pedido Paradise Shop ${producto.nombre || ''} Talla ${producto.talla || ''}`
      },
      items: [[
        {
          idSuperficie,
          idColor,
          idTalla: finalIdTalla,
          cantidad: producto.cantidad || 1,
          consideraCustom: true, // true porque usas tu diseño DTF
          estampados: [
            {
              posicion: 'frente', // frente | espalda | manga_izq | manga_der
              urlImagen: producto.imagenDTF || producto.imagen || 'https://www.paradiseshop.cl/placeholder.png',
              anchoCm: producto.anchoCm || 28 // según PDF, maxAnchoCm para Oversize es 40, usamos 28 cm frente
            }
          ]
        }
      ]]
    };

    // Log para debug (ver en Vercel Logs)
    console.log('Enviando a Tee:', JSON.stringify(payload, null, 2));

    const response = await fetch('https://tee.cl/api/v1/ordenes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TEE_API_KEY}`,
        'Idempotency-Key': referenciaExterna
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Error Tee API:', JSON.stringify(data));
      return res.status(response.status).json({ ok: false, error: 'Tee API error', details: data, payloadEnviado: payload });
    }

    console.log('Orden creada en Tee:', data);
    return res.status(200).json({ ok: true, tee_order: data, referencia: referenciaExterna });

  } catch (e) {
    console.error('Error interno tee_create_order:', e);
    return res.status(500).json({ ok: false, error: e.message });
  }
}
