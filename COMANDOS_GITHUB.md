# Comandos para subir a GitHub

Desde una carpeta local vacía:

```bash
git clone https://github.com/nithioso/NicoEnglishGames.git
cd NicoEnglishGames
```

Copia aquí los archivos de este paquete y luego ejecuta:

```bash
git add .
git commit -m "Add Nico English Games initial site"
git push origin main
```

Después activa GitHub Pages:

1. Repository → Settings → Pages.
2. Source: Deploy from a branch.
3. Branch: main.
4. Folder: /root.
5. Save.

URL esperada:

```text
https://nithioso.github.io/NicoEnglishGames/
```
