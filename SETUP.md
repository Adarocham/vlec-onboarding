# VLEC Onboarding - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Claude API key:
```
VITE_CLAUDE_API_KEY=sk-ant-...
```

### 3. Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
vlec-onboarding/
├── src/
│   ├── screens/          # Onboarding screens (9 total)
│   ├── components/       # Reusable components (Panorama360, AssistantButton)
│   ├── services/         # API calls (anthropic.ts, audio.ts)
│   ├── App.tsx          # Main app component
│   ├── store.ts         # Zustand state management
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── tailwind.config.js   # Tailwind config
```

---

## 🎮 Onboarding Flow

1. **Welcome** - Bienvenida e introducción
2. **Terms** - Privacidad y T&C
3. **WhatIsVLEC** - Explicación de propósito
4. **Metrics** - Las 4 métricas (Velocidad, Claridad, Volumen, Fluidez)
5. **Calibration** - Calibrado de micrófono
6. **Selection** - Elegir Litigante o Entrevista
7. **Briefing** - Contexto específico
8. **Results** - Resumen de desempeño

---

## 🤖 Asistente VLEC

- Disponible en todas las pantallas (botón 🤖 esquina inferior derecha)
- Responde sobre: VLEC, métricas, escenarios, técnico
- Usa Claude API con RAG sobre documentación oficial

### Para usar:
1. Click en el botón 🤖
2. Escribe tu pregunta
3. Click "Preguntar"

---

## 🎥 Assets de Video 360

Los videos deben estar en:
```
/Users/antoniodarocha/Downloads/Videos360VLEC/
```

**Archivos esperados:**
- `Alta360/vide 360 bienvenida.mp4` (Welcome)
- `Baja/Calibración/T3 calibración.mp4` (Calibration)
- `Baja/Entrevista/T6 Demo 1a1.mp4` (Interview briefing)
- Videos de Juicio (cuando lleguen) para Litigant

---

## 📦 Build for Production

```bash
npm run build
```

Output en carpeta `dist/`

---

## 🚢 Deploy a Vercel

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones. Vercel solicitará:
- Conectar a GitHub repo
- Configurar environment variable `VITE_CLAUDE_API_KEY`

---

## ⚙️ Configuration

### Tailwind Colors (VLEC Brand)
```js
colors: {
  vlec: {
    primary: '#0066CC',
    secondary: '#00B4D8',
    dark: '#1A1A2E',
    light: '#F5F7FA'
  }
}
```

### Audio Metrics
- Velocity: 140-170 PPM recomendado
- Clarity: 80-100% recomendado
- Volume: Consistente y firme
- Fluency: <3 disfluencias/minuto

---

## 🐛 Troubleshooting

### Micrófono no funciona
- Verifica permisos del navegador
- Intenta reiniciar el navegador
- Comprueba que el micrófono esté conectado

### Claude API no responde
- Verifica que `VITE_CLAUDE_API_KEY` esté correcto
- Comprueba cuota de API en Anthropic console
- Verifica conexión a internet

### Video 360 no carga
- Asegúrate que la ruta del video es correcta
- Comprueba que el archivo existe
- Intenta un video de prueba más pequeño

---

## 📝 Next Steps

1. ✅ npm install
2. ✅ Configurar .env.local con API key
3. ✅ npm run dev
4. ✅ Probar onboarding completo
5. ⏳ Optimizar videos de Juicio cuando lleguen
6. ⏳ Integración con backend de sesiones
7. ⏳ Deploy a Vercel

---

## 📞 Support

- Documentación oficial VLEC: Ver manuales en Downloads/
- Claude API docs: https://docs.anthropic.com
- A-Frame docs: https://aframe.io/docs
- Tailwind docs: https://tailwindcss.com/docs
