
/**
 * Simple Express server that serves static files and an API endpoint /api/hierarchy.
 * Connects to PostgreSQL if POSTGRES_URL env var is set and the table 'hierarchy' exists.
 * Otherwise falls back to hierarchy.json in the project root.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

async function getHierarchyFromDB(client) {
  // erwartet Spalten: id, parent_id, name (vereinfachte flache Struktur).
  const res = await client.query('SELECT id, parent_id, name FROM hierarchy ORDER BY id');
  // Baum bauen (vereinfachtes Beispiel)
  const rows = res.rows;
  const map = new Map();
  rows.forEach(r => map.set(r.id, { id: r.id, name: r.name, children: [] , parent_id: r.parent_id}));
  let root = null;
  map.forEach(v => {
    if (v.parent_id === null) root = v;
    else {
      const p = map.get(v.parent_id);
      if (p) p.children.push(v);
    }
  });
  return root || { name: 'Keine Daten in DB' };
}

app.get('/api/hierarchy', async (req, res) => {
  const pgUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (pgUrl) {
    try {
      const { Client } = require('pg');
      const client = new Client({ connectionString: pgUrl });
      await client.connect();
      const data = await getHierarchyFromDB(client);
      await client.end();
      return res.json(data);
    } catch (e) {
      console.error('DB-Fehler, nutze Fallback file:', e);
      // fallthrough to file
    }
  }
  // Fallback: lade hierarchy.json
  try {
    const p = path.join(__dirname, 'hierarchy.json');
    const raw = fs.readFileSync(p, 'utf8');
    const obj = JSON.parse(raw);
    return res.json(obj);
  } catch (e) {
    console.error('Fallback-Failure:', e);
    return res.status(500).json({ error: 'Konnte Hierarchie nicht laden' });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
