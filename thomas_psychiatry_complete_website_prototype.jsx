# Thomas Psychiatry — READY-TO-UPLOAD WEBSITE PACKAGE (VITE + REACT)

This is your complete production-ready project structure. You can copy these files into a GitHub repository and deploy directly on Vercel.

---

# 📁 PROJECT STRUCTURE

```
thomas-psychiatry/
│── index.html
│── package.json
│── vite.config.js
│── public/
│     └── logo.png
│── src/
      │── main.jsx
      │── App.jsx
      │── styles.css
```

---

# 1️⃣ package.json

```json
{
  "name": "thomas-psychiatry",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

---

# 2️⃣ vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

---

# 3️⃣ index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thomas Psychiatry</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

# 4️⃣ src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

# 5️⃣ src/styles.css

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #F7FAF9;
}
```

---

# 6️⃣ src/App.jsx (YOUR FULL WEBSITE)

```jsx
const CONFIG = {
  schedulingLink: "https://YOUR-SCHEDULING-LINK",
  intakeFormsLink: "https://YOUR-SIMPLEPRACTICE-FORMS-LINK",
  clientPortalLink: "https://YOUR-CLIENT-PORTAL-LINK"
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7FAF9] text-gray-800">

      {/* NAV */}
      <nav className="flex justify-between items-center p-5 bg-white shadow">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10" />
          <div>
            <h1>Thomas Psychiatry</h1>
            <p>Virtual Mental Health Care</p>
          </div>
        </div>

        <a href={CONFIG.schedulingLink} className="bg-teal-700 text-white px-4 py-2 rounded">
          Book Appointment
        </a>
      </nav>

      {/* HERO */}
      <section className="p-10">
        <h1 className="text-4xl font-bold">Compassionate Psychiatric Care</h1>
        <p>Virtual evaluations, medication management, MAT services.</p>

        <a href={CONFIG.schedulingLink} className="bg-teal-700 text-white px-4 py-2 rounded inline-block mt-4">
          Schedule Consultation
        </a>
      </section>

      {/* ABOUT */}
      <section className="p-10 bg-white">
        <h2>About Dr Thomas DNP</h2>
        <p>
          Doctoral-prepared psychiatric nurse practitioner providing evidence-based care for
          anxiety, depression, bipolar disorder, schizophrenia, and substance use disorders.
        </p>
      </section>

      {/* SERVICES */}
      <section className="p-10">
        <h2>Services</h2>
        <ul>
          <li>Psychiatric Evaluations</li>
          <li>Medication Management</li>
          <li>MAT & Addiction Treatment</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="p-10 bg-white">
        <h2>New Patients</h2>

        <a href={CONFIG.intakeFormsLink} className="block bg-teal-700 text-white p-3 rounded mb-3">
          Complete Intake Forms
        </a>

        <a href={CONFIG.schedulingLink} className="block border border-teal-700 text-teal-700 p-3 rounded">
          Book Appointment
        </a>
      </section>

      {/* CLIENT PORTAL */}
      <section className="p-10 text-center bg-teal-900 text-white">
        <h2>Client Portal</h2>
        <a href={CONFIG.clientPortalLink} className="bg-white text-teal-900 px-4 py-2 rounded inline-block mt-3">
          Enter Portal
        </a>
      </section>

      {/* FOOTER */}
      <footer className="p-5 text-center">
        © 2026 Thomas Psychiatry
      </footer>

    </div>
  )
}
```

---

# 📦 HOW TO UPLOAD TO GITHUB (IMPORTANT)

1. Create repo: `thomas-psychiatry`
2. Add files EXACTLY as above
3. Upload `logo.png` into `/public`

---

# 🚀 DEPLOY ON VERCEL

1. Go to Vercel
2. Import GitHub repo
3. Click Deploy

---

# 🎉 RESULT

Your live psychiatry website will be online in minutes.

---

# ⚡ NEXT UPGRADES (I CAN HELP YOU NEXT)

- Connect domain (thomaspsychiatry.org)
- Add HIPAA intake forms
- Improve design (premium clinic look)
- Add SEO for Google ranking
- Add real booking system integration
