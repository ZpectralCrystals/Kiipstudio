# Pasos realizados

Fecha: 2026-07-11

## Objetivo

Actualizar el proyecto local y subirlo al repositorio GitHub:

`https://github.com/ZpectralCrystals/Kiipstudio.git`

## Pasos

1. Revise carpeta del proyecto local.
2. Verifique que no existia repositorio Git inicializado.
3. Revise `.gitignore` para confirmar que archivos pesados o generados quedan fuera:
   - `node_modules/`
   - `dist/`
   - `.astro/`
   - `.env`
   - `.DS_Store`
4. Cree este archivo `PASOS-REALIZADOS.md` para documentar el proceso.
5. Inicialice Git en la carpeta del proyecto.
6. Configure rama principal como `main`.
7. Agregue remote `origin` apuntando al repositorio GitHub.
8. Agregue archivos del proyecto al staging.
9. Cree commit inicial.
10. Subi cambios a GitHub con `git push -u origin main`.

## Comandos usados

```bash
git init
git branch -M main
git remote add origin https://github.com/ZpectralCrystals/Kiipstudio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Verificacion

Se verifico estado Git local despues del push para confirmar que la rama `main` quedo conectada con `origin/main`.
