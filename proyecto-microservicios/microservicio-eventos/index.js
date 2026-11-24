// IMPORTANTE: newrelic debe cargarse primero
require('newrelic');

const express = require('express');
const admin = require('firebase-admin');
const path = require('path');

// Cargar credenciales de Firebase
// Coloca tu serviceAccountKey.json en esta misma carpeta
let serviceAccount;
try {
  serviceAccount = require('./serviceAccountKey.json');
} catch (err) {
  console.error('ERROR: No se encontró serviceAccountKey.json');
  console.error('Descárgalo desde Firebase Console → Project settings → Service accounts');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({
    servicio: 'microservicio-eventos',
    estado: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Registrar un evento de reproducción / actividad
app.post('/eventos', async (req, res) => {
  try {
    const { usuario, trackId, tipo } = req.body;

    const docRef = await db.collection('eventos').add({
      usuario: usuario || 'anonimo',
      trackId: trackId || null,
      tipo: tipo || 'play',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      ip: req.ip
    });

    res.status(201).json({
      id: docRef.id,
      mensaje: 'Evento registrado correctamente'
    });
  } catch (error) {
    console.error('Error al registrar evento:', error);
    res.status(500).json({ error: error.message });
  }
});

// Obtener últimos eventos
app.get('/eventos', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const snapshot = await db.collection('eventos')
      .orderBy('timestamp', 'desc')
      .limit(limit)
      .get();

    const eventos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(eventos);
  } catch (error) {
    console.error('Error al consultar eventos:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Microservicio de eventos corriendo en http://localhost:${PORT}`);
  console.log('Endpoints disponibles:');
  console.log('  GET  /');
  console.log('  GET  /eventos');
  console.log('  POST /eventos');
});
