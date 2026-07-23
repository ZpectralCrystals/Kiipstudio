# Reporte final de limpieza

Fecha: 2026-07-23

## Estado

- Sitio activo con Sanity obligatorio.
- Textos, menus, galerias, videos y paquetes vienen desde Sanity.
- Imagenes de contenido vienen desde URLs Cloudinary guardadas en Sanity.
- No hay fallback hardcodeado en runtime.
- Si falta config o documento Sanity, build falla con error claro.

## Limpieza aplicada

- Eliminado contenido hardcodeado legacy de `homeContent.ts`; queda solo tipado.
- Eliminado modo temporal `DISABLE_SANITY`.
- Eliminados componentes no usados: slices antiguos de about, CTA, services, video y carousel.
- Eliminados scripts de carga/siembra local a Cloudinary/Sanity.
- Eliminada carpeta `stitch_klip_studio_photography_portfolio` con screenshots.
- Eliminados SVG/PNG locales de Figma/UI no necesarios.
- Paquetes usan forma roja generada por CSS, sin imagen local.
- Footer/hero usan CSS para lineas y patron visual, sin SVG local.

## Archivos visuales que quedan

Solo quedan iconos pequenos de redes/contacto y `favicon.svg`.

No quedan fotos de produccion en repo.

## Validacion requerida

```bash
npm run check
npm run build
```

## URLs

- Produccion: https://kiipstudio.vercel.app
- Sanity Studio local: http://localhost:3333
- Sitio local: http://localhost:4321
