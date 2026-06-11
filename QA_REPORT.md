# QA Report - Nico English Games v4

Fecha: 2026-06-10

## Validación realizada

Se revisó y reestructuró el proyecto para que los juegos queden más mantenibles, consistentes y aptos para móvil.

## Resultado de pruebas automáticas

Comando ejecutado:

```bash
node tests/validate-games.js
node --check assets/game-engine.js
python3 path validation
```

Resultado:

```text
OK: Travel Time Machine 1 · 6 missions
OK: Travel Time Machine 2 · 7 missions
OK: Travel Detective 3: Lost Passport · 8 missions
Validation passed. Total checked items: 159
```

## Qué se validó

- Cada juego tiene metadatos completos.
- Cada misión tiene identificador único.
- Cada pregunta de selección tiene respuesta incluida dentro de las opciones.
- No hay opciones duplicadas por pregunta.
- Cada misión tiene `passScore` alcanzable.
- Las preguntas de categoría usan categorías válidas.
- Las preguntas de construcción tienen todas las palabras necesarias en el banco.
- Las preguntas de escritura tienen respuesta esperada.
- El motor JavaScript no tiene errores de sintaxis.
- Los enlaces internos y rutas de assets fueron verificados.

## Ajustes funcionales

- Se eliminó la dependencia de drag-and-drop para mejorar uso móvil.
- Se reemplazó por interacción táctil con botones grandes.
- Se agregó retroalimentación al finalizar cada nivel con lenguaje colombiano motivador.
- Se mejoró la selección de voz en inglés con controles de velocidad y tono.
- Se agregó botón “Best voice”.
- Se separó el motor común (`assets/game-engine.js`) de los datos de cada juego (`data.js`).
- Se agregó Game 3: `Travel Detective 3: Lost Passport`.

## Nota sobre voces

La calidad de voz depende del navegador y sistema operativo. El juego intenta seleccionar voces en inglés como Microsoft Jenny, Microsoft Aria, Google US English, Samantha, Alex o Daniel cuando están disponibles.
