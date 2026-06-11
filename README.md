# Nico English Games

Juegos interactivos para que Nicolás practique inglés desde el navegador.

## Juegos incluidos

1. **Travel Time Machine**  
   Ruta: `games/travel-time-machine-1/`

2. **Travel Time Machine: Levels**  
   Ruta: `games/travel-time-machine-2/`

## Publicación en GitHub Pages

Este proyecto es 100% estático: HTML, CSS y JavaScript. No necesita servidor, Node.js ni base de datos.

### Opción recomendada

Publicar desde la rama `main`, carpeta `/root`.

En GitHub:

1. Entrar al repositorio.
2. Ir a **Settings**.
3. Entrar a **Pages**.
4. En **Build and deployment**, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guardar.

La URL esperada del sitio será:

`https://nithioso.github.io/NicoEnglishGames/`

## Estructura

```text
NicoEnglishGames/
├── index.html
├── .nojekyll
├── README.md
└── games/
    ├── travel-time-machine-1/
    │   └── index.html
    └── travel-time-machine-2/
        └── index.html
```

## Cómo agregar nuevos juegos

Crear una nueva carpeta dentro de `games/`, por ejemplo:

```text
games/simple-past-quiz/index.html
```

Luego agregar una tarjeta nueva en el `index.html` principal apuntando a:

```text
./games/simple-past-quiz/
```
