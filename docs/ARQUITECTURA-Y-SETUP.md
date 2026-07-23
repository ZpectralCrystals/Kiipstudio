# KlipStudio: entrega y setup

## Stack

- Astro 7, sitio estatico.
- Sanity Studio para textos, menus, links, paquetes, galerias y videos.
- Cloudinary para imagenes via URL publica guardada en Sanity.
- YouTube para videos.
- Vercel para produccion.

## Local

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Pagina:

```text
http://localhost:4321/
```

Studio:

```bash
npm run studio
```

```text
http://localhost:3333/
```

## Variables

Necesarias en `.env.local` y Vercel:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=xmypgzvd
PUBLIC_SANITY_PROJECT_ID=hg6wp5ra
PUBLIC_SANITY_DATASET=production
SANITY_PROJECT_ID=hg6wp5ra
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=...
```

Para editar contenido desde Studio local:

```env
SANITY_WRITE_TOKEN=...
```

## Contenido editable

Sanity:

- `homeLanding`: home, header, footer, como trabajamos, formas de pago.
- `servicePage`: bodas, quinceaneros, cumpleanos, fotos-estudio, publicidad.

Imagenes:

- Subir a Cloudinary.
- Copiar URL `https://res.cloudinary.com/...`.
- Pegar URL en Sanity.

Videos:

- Subir a YouTube.
- Pegar `youtubeId` o `youtubeUrl` en Sanity.

## Repo limpio

El repo no debe guardar fotos de produccion. Las imagenes grandes viven en Cloudinary.

Permitido en repo:

- `favicon.svg`
- iconos UI pequenos usados por footer/header
- codigo, esquemas Sanity, docs

## Validacion

```bash
npm run check
npm run build
```

Si Sanity falta, build falla. No hay fallback hardcodeado para esconder errores.
