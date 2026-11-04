export default async function handler(req, res) {
  const token = process.env.TEE_API_KEY;
  const listado = req.query.listado || 'superficies';
  
  const r = await fetch(`https://tee.cl/api/v1/catalogo?listado=${listado}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  const data = await r.json();
  return res.status(r.status).json(data);
}