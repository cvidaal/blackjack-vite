# 🃏 Blackjack — JavaScript + Vite

Proyecto realizado durante el **Curso de JavaScript Moderno** de Fernando Herrera.
Enfocado en practicar **lógica**, **modularización** y **manipulación del DOM** con un flujo de juego completo (jugador vs IA).

---

## ✨ Funcionalidades
- Crear y barajar mazos (52 cartas).
- Pedir carta, plantarse y turno automático de la IA.
- Cálculo del valor de cartas (A como 11/1 según convenga).
- Determinar ganador con reglas de Blackjack.
- UI simple y rápida con Vite.

---

## 🧩 Stack
- **JavaScript (ES6+)**
- **HTML5 + CSS**
- **Vite** (dev server & build)

---

## 🚀 Arranque rápido

```bash
git clone https://github.com/cvidaal/blackjack-vite.git
cd blackjack-vite
npm install
npm run dev
# abre http://localhost:5173
````

Build y vista previa de producción:

```bash
npm run build
npm run preview
```

---

## 🗂️ Estructura del proyecto

```
📦 04-blackjack-vite
├── public/
│   └── assets/
├── src/
│   ├── blackjack/
│   │   └── usecases/
│   │       ├── crear-carta.js
│   │       ├── crear-deck.js
│   │       ├── determinar-ganador.js
│   │       ├── pedir-carta.js
│   │       ├── turno-ia.js
│   │       └── valor-carta.js
│   ├── counter.js
│   ├── index.js
│   ├── javascript.svg
│   └── main.js
├── index.html
├── style.css
└── package.json
```

### 🔧 Usecases (breve descripción)

* `crear-deck.js`: genera y baraja el mazo (♠️ ♥️ ♣️ ♦️, 2–A).
* `pedir-carta.js`: extrae la siguiente carta del mazo.
* `valor-carta.js`: calcula el valor (J/Q/K=10, A=11/1).
* `turno-ia.js`: lógica de la banca hasta superar al jugador o llegar al umbral.
* `determinar-ganador.js`: reglas finales y mensaje de resultado.
* `crear-carta.js`: render de la carta en la interfaz.

---

## 🕹️ Cómo se juega

1. Pulsa **Pedir carta** para empezar.
2. Decide si **Plantarte** o seguir pidiendo.
3. La **IA** juega su turno automáticamente.
4. Se muestra el **ganador** según las reglas del Blackjack.

---

## 📌 Roadmap (v2+)

* Animaciones y sonidos sutiles.
* Mejorar UI (estilo minimal NOIR).
* Marcador de rondas y estadísticas.
* Tests unitarios de usecases.
* Deploy (GitHub Pages / Vercel).

---

## 📤 Deploy rápido

### Opción A — Vercel (recomendada)

1. `npm run build`
2. Conecta el repo en Vercel → Framework: **Vite** → Deploy.

### Opción B — GitHub Pages

1. En `vite.config.js` define `base: '/blackjack-vite/'`.
2. `npm run build`
3. Sube el contenido de `dist/` a la rama `gh-pages` o usa una GitHub Action.

---

## ✍️ Autor

**Carlos Vidal** — Desarrollador móvil & JS
[GitHub](https://github.com/cvidaal) · [LinkedIn](https://www.linkedin.com/in/cvidaal)

> “El progreso visible es la mejor motivación. Cada commit cuenta.”