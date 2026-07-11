# KilpStudio Landing: Setup, SSG, Cloudinary y Vertical Slice

## Stack elegido

- Astro 7 para landing SSG.
- Tailwind CSS 4 con `@tailwindcss/vite`.
- Cloudinary para imágenes remotas optimizadas.
- Formato final de imágenes: WebP mediante transformación `f_webp`.
- Carga perezosa: `loading="lazy"` y `decoding="async"`.
- `<picture>` con sources mobile/escritorio.
- Carrusel propio con CSS + JavaScript, sin librerías.
- Videos embebidos desde YouTube. Archivos de video no viven en repo.

## Requisitos locales

- Node.js 22 o superior recomendado. Este workspace detectó Node `v24.15.0`.
- npm 10 o superior. Este workspace detectó npm `11.12.1`.
- Cuenta Cloudinary para producción.
- Canal/cuenta YouTube para subir videos.

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

Para levantar directo:

```bash
npm run levantar
```

El script `scripts/levantar-pagina.sh` instala dependencias si faltan y arranca Astro en `0.0.0.0:4321`.

## Build estático

```bash
npm run build
npm run preview
```

Astro genera HTML/CSS/JS estático dentro de `dist/`. Eso cumple Static Site Generation y facilita deploy en Netlify, Vercel, Cloudflare Pages o hosting estático.

Rutas SSG actuales:

- `/`
- `/bodas`
- `/cumpleanos`
- `/quinceaneros`
- `/fotos-estudio`
- `/publicidad`

## Cloudinary

Config:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
```

Uso actual:

- `src/shared/lib/cloudinary.ts` arma URLs Cloudinary.
- `src/shared/components/ResponsiveCloudinaryPicture.astro` genera `<picture>`.
- Mobile usa ancho menor.
- Escritorio usa ancho mayor.
- Ambas versiones usan `f_webp,q_auto`.
- La réplica Figma usa WebP local temporal en `public/assets/figma/` porque no hay credenciales Cloudinary en el repo.
- Para producción, sube esos WebP a Cloudinary y coloca cada `publicId` en `src/features/home/data/homeContent.ts` dentro de `cloudinaryPublicId`.

Ejemplo conceptual:

```html
<picture>
  <source media="(min-width: 768px)" srcset="...desktop.webp 1x, ...desktop-2x.webp 2x" />
  <source media="(max-width: 767px)" srcset="...mobile.webp 1x, ...mobile-2x.webp 2x" />
  <img loading="lazy" decoding="async" />
</picture>
```

## Videos

Regla: subir videos a YouTube y embeber con iframe.

Motivo:

- YouTube maneja transcodificación.
- Menos peso en hosting.
- Mejor streaming adaptativo.
- Menos problemas con formatos móviles.

En código, usar `src/features/home/components/AboutSlice.astro` para video general y `src/features/home/components/BodasSlice.astro` para video de bodas. Reemplaza `youtubeId` en el data correspondiente. Si `youtubeId` está vacío, se conserva el placeholder visual del diseño Figma.

## Vertical Slice Architecture

Vertical Slice Architecture organiza código por feature o experiencia, no por tipo técnico global.

En vez de:

```text
components/
data/
styles/
scripts/
```

Usamos:

```text
src/features/home/
  components/
  data/
  scripts/
```

Cada slice contiene lo que necesita para funcionar:

- UI del slice.
- Data del slice.
- JS del slice.
- Reglas visuales específicas si hacen falta.

Beneficios:

- Cambios de home quedan dentro de `features/home`.
- Menos saltos entre carpetas.
- Mejor escalado cuando aparecen nuevas páginas: `features/about`, `features/contact`, `features/cases`.
- Shared queda solo para piezas reutilizables reales.

Estructura de este proyecto:

```text
src/
  features/
    home/
      components/
        AboutSlice.astro
        BodasSlice.astro
        CtaBandSlice.astro
        FooterSlice.astro
        HeaderSlice.astro
        ServiceDetailSlice.astro
        WorkCarouselSlice.astro
      data/
        bodasContent.ts
        homeContent.ts
        serviceSections.ts
      scripts/
        carousel.js
  layouts/
    BaseLayout.astro
  pages/
    bodas.astro
    cumpleanos.astro
    fotos-estudio.astro
    index.astro
    publicidad.astro
    quinceaneros.astro
  shared/
    components/
      ResponsiveCloudinaryPicture.astro
    lib/
      cloudinary.ts
  styles/
    global.css
```

## Convenciones de código

- Componentes Astro comentados donde hay decisión técnica.
- Helpers compartidos en `src/shared`.
- Datos editables en `src/features/home/data/homeContent.ts`.
- Carrusel sin librerías en `src/features/home/scripts/carousel.js`.
- Imágenes nunca se cargan directo con `<img src="archivo-grande.jpg">`; usar `ResponsiveCloudinaryPicture`.

## Próximos pasos de contenido

1. Crear cuenta/proyecto Cloudinary.
2. Subir imágenes reales de KilpStudio.
3. Reemplazar `cloudinaryPublicId` vacío en `homeContent.ts`.
4. Subir video vertical a YouTube.
5. Reemplazar `youtubeId` en `homeContent.ts`.
6. Ejecutar `npm run build` antes de deploy.

## Figma replicado

Archivo: `EventFlow placeholder Copia`.

Nodo usado:

- Página: `4424:16994`
- Frame landing: `3402:8592` (`01_Music Event`)

Assets descargados desde Figma y convertidos a WebP:

- `public/assets/figma/bodas-mobile.webp`
- `public/assets/figma/bodas-desktop.webp`
- `public/assets/figma/cumpleanos-mobile.webp`
- `public/assets/figma/cumpleanos-desktop.webp`
- `public/assets/figma/quinceaneros-mobile.webp`
- `public/assets/figma/quinceaneros-desktop.webp`
- `public/assets/figma/fotos-estudio-mobile.webp`
- `public/assets/figma/fotos-estudio-desktop.webp`
- `public/assets/figma/publicidad-mobile.webp`
- `public/assets/figma/publicidad-desktop.webp`
- `public/assets/figma/klip-logo.webp`

Frame bodas replicado:

- Frame: `3402:10` (`02_bodas`)
- Data: `src/features/home/data/bodasContent.ts`
- UI: `src/features/home/components/BodasSlice.astro`
- Assets: `public/assets/figma/bodas-section/*.webp`

Stitch aplicado:

- Fuente: `stitch_klip_studio_photography_portfolio/`
- Design system: `stitch_klip_studio_photography_portfolio/klip_studio_visual_identity/DESIGN.md`
- Páginas creadas desde screenshots Stitch:
  - `/cumpleanos`
  - `/quinceaneros`
  - `/fotos-estudio`
  - `/publicidad`
- Data: `src/features/home/data/serviceSections.ts`
- UI: `src/features/home/components/ServiceDetailSlice.astro`
- Assets recortados y convertidos a WebP: `public/assets/stitch/**`

## Stitch MCP

Stitch MCP está disponible para generar o refinar variantes visuales si hace falta. No se guarda la API key dentro del repo. Para esta implementación, Figma fue la fuente visual principal y Stitch queda como apoyo para iterar diseño o crear variantes.
