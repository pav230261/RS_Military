# 🇷🇸 Das serbosche Militär – Organisationsstruktur (OrgChart Demo)

Dieses Projekt visualisiert die Organisationsstruktur des serbischen Militärs als interaktives Organigramm.  
Die Daten werden dynamisch über eine API geladen und können entweder aus einer PostgreSQL-Datenbank oder aus einer lokalen JSON-Datei stammen.

Das Frontend verwendet **GoJS** zur Darstellung der Hierarchie.

---

## 📁 Projektstruktur

```
/
├── index.html          # Frontend + GoJS-Diagramm
├── style.css           # Styling & Layout
├── server.js           # Express-Server + API /api/hierarchy
├── hierarchy.json      # Beispiel-Hierarchie (Fallback)
├── schema.sql          # Beispiel-SQL-Schema für PostgreSQL
├── package.json        # Node.js-Konfiguration
└── README.md           # Projektdokumentation
```

---

## 🚀 Features

- Dynamische Organigramm-Visualisierung  
- Serbische Militärstruktur (Beispieldaten)  
- API-basierte Datenquelle  
- PostgreSQL-Integration (optional)  
- Automatischer Fallback auf `hierarchy.json`  
- Moderner GoJS-Baum mit Layout & Styling  

---

## 🛠 Installation & Start

### 1️⃣ Abhängigkeiten installieren
```bash
npm install
```

### 2️⃣ (Optional) PostgreSQL konfigurieren  
```bash
psql < schema.sql
export POSTGRES_URL=postgres://user:pass@host:5432/dbname
```

### 3️⃣ Server starten
```bash
npm start
```

### 4️⃣ Anwendung öffnen
👉 http://localhost:3000

---

## 📡 API

### `GET /api/hierarchy`
Gibt die komplette Organisationsstruktur zurück.

Datenquelle:
- PostgreSQL (wenn `POSTGRES_URL` gesetzt ist)
- sonst `hierarchy.json`

---

## ⚠ Hinweis zu GoJS
Dieses Projekt nutzt die **Evaluation-Version** von GoJS (via CDN).  
Für produktiven Einsatz ist eine GoJS-Lizenz notwendig.

---

## 📜 Lizenz
Dieses Projekt ist ein Demo-/Lernprojekt.  
Bitte GoJS-Lizenzbedingungen für produktive Nutzung beachten.
