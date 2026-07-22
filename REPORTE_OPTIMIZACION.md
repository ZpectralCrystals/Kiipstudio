# Reporte de optimización

Fecha: 2026-07-22

## Problema encontrado

Las imágenes guardadas como URL en Sanity se renderizaban con el archivo original de Cloudinary. La página inicial descargaba JPG/PNG de varios megabytes, incluyendo tarjetas y galería.

## Cambios aplicados

- Se añadió `getOptimizedCloudinaryUrl()` en `src/shared/lib/cloudinary.ts`.
- Toda URL Cloudinary proveniente de Sanity ahora recibe `c_limit`, ancho contextual, `q_auto` y `f_auto`.
- Cloudinary negocia WebP/AVIF cuando navegador lo soporta; fallback automático para navegadores restantes.
- Se aplicaron tamaños por uso: logo `320px`, tarjetas/galería `820-900px`, héroes `1920px`, íconos `96px`.
- Las tarjetas usan recorte inteligente Cloudinary `c_fill,g_auto` a `720×1014`, misma proporción visible `328:462`.
- Galerías bajo pliegue usan `loading="lazy"`.
- Carrusel móvil carga eager solo primera tarjeta visible.
- `ResponsiveCloudinaryPicture` ya no fuerza tipo `image/webp`; permite respuesta automática de Cloudinary.

## Medición de descarga

Medido con `Accept: image/avif,image/webp,image/*,*/*` contra Cloudinary.

| Recurso | Antes | Después | Reducción |
| --- | ---: | ---: | ---: |
| Tarjeta Bodas | 9,302,972 B | 79,106 B | 99.1% |
| Tarjeta Bodas con recorte exacto | 9,302,972 B | 63,384 B | 99.3% |
| Fondo principal | 1,549,793 B | 15,398 B | 99.0% |
| Foto galería Bodas | 55,010 B | 48,824 B | 11.2% |

## Verificación

- `npm run check`: 0 errores, 0 warnings.
- `npm run build`: 7 rutas compiladas.
- Las URLs generadas contienen `c_limit,w_*,q_auto,f_auto`.
- Contenido sigue editable en Sanity; no se modificaron URLs ni documentos CMS.

## Resultado esperado

La carga inicial baja drásticamente, especialmente en tarjetas antes de 7-9 MB. Calidad visual se ajusta automáticamente al dispositivo y cada imagen mantiene proporción original.
