# Serbisches Militär - Projekt

Dieses Projekt ist eine adaptierte Version des bereitgestellten UK-Beispiels — umgesetzt für die **Vojska Srbije** (Serbische Streitkräfte).

## Was ist enthalten
- `index.html` — Web-Frontend mit OrgChart-Visualisierung (GoJS). Lädt die Hierarchie über `/api/hierarchy`.
- `style.css` — Styling (angepasst vom UK-Projekt).
- `server.js` — Express-Server. Liest Daten idealerweise aus PostgreSQL (Umgebungsvariable `POSTGRES_URL`), fällt ansonsten auf `hierarchy.json` zurück.
- `hierarchy.json` — Beispiel-Datensatz (baumartige Struktur).
- `schema.sql` — Beispiel-SQL-Skript zum Erstellen der Tabelle `hierarchy` und Einfügen von Testdaten.

## Betrieb
1. PostgreSQL konfigurieren (optional): Setze `POSTGRES_URL` bzw. `DATABASE_URL` in der Umgebung.
2. `npm install` ausführen.
3. `npm start` startet den Server (Standardport 3000).
4. Öffne `http://localhost:3000` im Browser.

## Hinweise
- Der Server unterstützt einen echten DB-Betrieb, bietet aber einen Dateifallback für schnelle Demos.
- Passe `schema.sql` an dein Datenmodell an, wenn du zusätzliche Felder (z. B. Typ, Standort, Stärke) brauchst.

---
Projekt erstellt automatisch durch ChatGPT. Wenn du möchtest, kann ich:
- Die Texte weiter ins Serbische übersetzen.
- Die Hierarchie detaillierter (mehr Ebenen, Ränge, Einheiten) befüllen.
- Eine Docker-Compose Vorlage für PostgreSQL + Node.js erstellen.
