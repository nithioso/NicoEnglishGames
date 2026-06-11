# Nico English Games

Juegos interactivos para que Nicolás practique inglés desde el navegador, con enfoque en vocabulario de viajes, medios de transporte, pasado simple, escucha y conversación.

## Juegos incluidos

1. **Travel Time Machine 1**  
   Ruta: `games/travel-time-machine-1/`

2. **Travel Time Machine 2**  
   Ruta: `games/travel-time-machine-2/`

3. **Travel Detective 3: Lost Passport**  
   Ruta: `games/travel-detective-3/`

## Mejoras de esta versión

- Estructura común con `assets/game-engine.js` y `assets/styles.css`.
- Diseño mobile-first: no usa drag-and-drop; todas las dinámicas funcionan con toques.
- Voz en inglés con selector, velocidad, tono y botón de “Best voice”.
- Retroalimentación motivadora en español colombiano al terminar cada nivel.
- Progreso guardado en `localStorage` por juego.
- Game 3 nuevo con lectura, misterio, preguntas WH, orden de eventos y pasado simple.
- Pruebas automáticas de datos en `tests/validate-games.js`.

## Publicación en GitHub Pages

Este proyecto es 100% estático: HTML, CSS y JavaScript. No necesita servidor, Node.js ni base de datos.

Configura GitHub Pages desde la rama `main`, carpeta `/root`.

URL esperada:

```text
https://nithioso.github.io/NicoEnglishGames/
```

## Validación local

Con Node.js instalado:

```bash
node tests/validate-games.js
```
