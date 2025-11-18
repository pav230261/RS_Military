-- Beispiel-DB-Schema für Tabelle 'hierarchy' (PostgreSQL)
CREATE TABLE IF NOT EXISTS hierarchy (
  id SERIAL PRIMARY KEY,
  parent_id INTEGER REFERENCES hierarchy(id) ON DELETE CASCADE,
  name TEXT NOT NULL
);

-- Einfügungen (vereinfachte Baumstruktur)
INSERT INTO hierarchy (id, parent_id, name) VALUES
(1, NULL, 'Republik Serbien - Präsident (Oberbefehlshaber)'),
(2, 1, 'Ministerium für Verteidigung'),
(3, 2, 'Generalstab'),
(4, 3, 'Kopnena vojska (Heer)'),
(5, 3, 'Ratno vazduhoplovstvo i protivvazduhoplovna odbrana (Luftstreitkräfte)'),
(6, 3, '72. Brigade für Spezialeinsätze'),
(7, 3, 'Logistik- & Unterstützungsdienst');
