import client from '../../config/db'; // Ajusta la ruta según donde hayas guardado tu archivo db.js

export async function get({ request }) {
  try {
    // Realiza una consulta simple para verificar la conexión
    const res = await client.query('SELECT NOW()');
    return new Response(JSON.stringify(res.rows[0]), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
