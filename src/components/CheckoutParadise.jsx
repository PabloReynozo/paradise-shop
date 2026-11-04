
import React, { useState } from 'react';

function mapearATeeLocal(p) {
  var MAPEO = { 'XS': 1, 'S': 2, 'M': 3, 'L': 4, 'XL': 5, '2XL': 16, '3XL': 17, '4XL': 18, '5XL': 19, 'Única (38x42 cm)': 6, 'Única': 6, '40x50 cm': 19, 'Ajustable Snapback': 6, 'XL Gamer': 6, 'Ajustable': 6 };
  var tl = (p.titulo||'').toLowerCase();
  var idSuperficie = 37;
  if (tl.indexOf('canguro') !== -1) idSuperficie = 9;
  else if (tl.indexOf('premium') !== -1) idSuperficie = 31;
  else if (tl.indexOf('polo') !== -1) idSuperficie = 1;
  else if (tl.indexOf('gorra') !== -1) idSuperficie = 14;
  else if (tl.indexOf('totebag') !== -1) idSuperficie = 32;
  else if (tl.indexOf('cuadro') !== -1) idSuperficie = 26;
  else if (tl.indexOf('llavero') !== -1) idSuperficie = 29;
  else if (tl.indexOf('mouse') !== -1) idSuperficie = 25;
  var idColor = (tl.indexOf('negra') !== -1 || tl.indexOf('negro') !== -1) ? 2 : 1;
  var idTalla = MAPEO[p.tallaSeleccionada || p.tallas[0]] || 2;
  return { idSuperficie: idSuperficie, idColor: idColor, idTalla: idTalla };
}

export default function CheckoutParadise({ carrito, totalCarrito, onVolver }) {
  const [cargando, setCargando] = useState(false);
  const [cliente, setCliente] = useState({ nombre: '', email: '', telefono: '', direccion: '', comuna: '', region: '' });
  const [envio, setEnvio] = useState({ tipo: 'domicilio', costo: 4000 });
  const [mensaje, setMensaje] = useState('');

  const handleChange = function(e) {
    var name = e.target.name;
    var value = e.target.value;
    setCliente(function(prev){ var n = Object.assign({}, prev); n[name] = value; return n; });
  };

  const pagar = function() {
    if (!cliente.nombre || !cliente.email || !cliente.direccion) {
      alert('Por favor completa nombre, email y direccion');
      return;
    }
    if (carrito.length === 0) return;
    setCargando(true);
    var itemsMapeados = carrito.map(function(item) {
      var tee = mapearATeeLocal(item);
      var precioNum = typeof item.precio === 'string' ? parseInt(item.precio.replace(/[^0-9]/g,'')) : item.precio;
      return { titulo: item.titulo, imagen: item.imagen, tallaEscogida: item.tallaSeleccionada, tee: tee, precioNum: precioNum };
    });
    var pedido = { items: itemsMapeados, cliente: cliente, envio: envio };
    localStorage.setItem('ultimo_pedido_paradise', JSON.stringify(pedido));
    fetch('/api/create_preference', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ items: itemsMapeados.map(function(i){ return { nombre: i.titulo, precio: i.precioNum }; }), envio: envio, cliente: cliente })
    }).then(function(res){ return res.json(); }).then(function(data){
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        setMensaje('Error: ' + JSON.stringify(data));
        setCargando(false);
      }
    }).catch(function(e){ setMensaje('Error: ' + e.message); setCargando(false); });
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 2rem' }}>
      <button onClick={onVolver} style={{ background: '#111', color: '#fff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '1rem' }}>← Volver al carrito</button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Datos de envío</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <input name="nombre" placeholder="Nombre completo *" value={cliente.nombre} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input name="email" placeholder="Email *" value={cliente.email} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input name="telefono" placeholder="Teléfono" value={cliente.telefono} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input name="direccion" placeholder="Dirección *" value={cliente.direccion} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input name="comuna" placeholder="Comuna" value={cliente.comuna} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input name="region" placeholder="Región" value={cliente.region} onChange={handleChange} style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Tipo de envío</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem', border: envio.tipo === 'domicilio' ? '2px solid #111' : '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
              <input type="radio" name="envio" checked={envio.tipo === 'domicilio'} onChange={function(){ setEnvio({ tipo: 'domicilio', costo: 4000 }); }} />
              <span>Envío a domicilio Blue Express - $4.000</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem', border: envio.tipo === 'puntos' ? '2px solid #111' : '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
              <input type="radio" name="envio" checked={envio.tipo === 'puntos'} onChange={function(){ setEnvio({ tipo: 'puntos', costo: 2990 }); }} />
              <span>Puntos Blue - $2.990</span>
            </label>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ marginTop: 0 }}>Resumen ({carrito.length})</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
            {carrito.map(function(item, idx){ return (
              <div key={idx} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                <img src={item.imagen} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>{item.nombreComercial || item.titulo}</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>Talla: {item.tallaSeleccionada}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>{item.precio}</p>
                </div>
              </div>
            ); })}
          </div>
          <div style={{ borderTop: '2px solid #111', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Subtotal:</span><span>${totalCarrito.toLocaleString('es-CL')} CLP</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}><span>Envío:</span><span>${envio.costo.toLocaleString('es-CL')} CLP</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '900', fontSize: '1.1rem', marginBottom: '1rem' }}><span>Total:</span><span>${(totalCarrito + envio.costo).toLocaleString('es-CL')} CLP</span></div>
            <button onClick={pagar} disabled={cargando} style={{ width: '100%', background: '#ff007f', color: '#fff', padding: '1rem', border: 'none', cursor: 'pointer', fontWeight: '900', fontSize: '0.9rem' }}>{cargando ? 'CARGANDO MERCADO PAGO...' : 'PAGAR CON MERCADO PAGO'}</button>
            <p style={{ fontSize: '0.65rem', opacity: 0.6, textAlign: 'center', marginTop: '0.5rem' }}>Al pagar se crea automáticamente orden en Tee.cl + Blue Express tracking</p>
            {mensaje && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem' }}>{mensaje}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
