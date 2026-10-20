# BABY-HACK

A playful React + Vite experience centered around Pip, a tiny dream engineer who watches over a midnight observatory. This project explores a cozy, surreal storytelling interface with interactive navigation, atmospheric mood toggles, and a hidden discovery mechanic.

## Overview

The app is built as a themed single-page experience with several sections:

- Home: introduces Pip and the dream world
- Projects: showcases the observatory's creative work
- Dream Lab: a neon, night-mode experience
- Story: narrates the world behind the project
- About: explains the concept and creative direction

The interface includes:

- day/dream mode switching
- sound on/off toggle
- interactive avatar click behavior
- secret discovery state with confetti celebration
- smooth animated transitions using Framer Motion

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Lucide React
- Canvas Confetti

## Project Structure

```text
BABY-HACK/
├── package.json
├── package-lock.json
├── node_modules/
└── pip-midnight-observatory/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── public/
    ├── src/
    ├── .gitignore
    ├── .oxlintrc.json
    └── README.md
```

The main app lives in `pip-midnight-observatory/`.

## Getting Started

From the repository root:

```bash
cd pip-midnight-observatory
npm install
npm run dev
```

Then open the local URL shown by Vite (typically `http://localhost:5173`).

## Production Build

```bash
cd pip-midnight-observatory
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Scripts

In `pip-midnight-observatory/package.json`:

- `npm run dev` — start the Vite dev server
- `npm run build` — generate a production build
- `npm run lint` — run Oxlint
- `npm run preview` — preview the built app locally

## Notes

This repository is a creative frontend prototype and a visual storytelling project more than a production application. It is designed to feel whimsical, dreamy, and interactive, with the project identity centered on Pip and the Midnight Observatory.

## License

This project does not currently declare a license in the repository. If you plan to distribute or reuse it, consider adding an explicit license file.
