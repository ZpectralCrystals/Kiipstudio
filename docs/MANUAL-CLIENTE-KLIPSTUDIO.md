# Manual basico para administrar la pagina KlipStudio

Este manual explica como cambiar fotos, videos, textos, paquetes, contacto y redes sociales de la pagina sin tocar codigo.

Pagina publica:

```txt
https://klipstudio.com.pe
```

Panel para administrar contenido:

```txt
https://klipstudio.com.pe/studio/
```

Acceso Sanity y Cloudinary:

```txt
Usuario: klipstudio.pe@gmail.com
Contrasena: entregar por separado, no guardar dentro de este manual.
```

Por seguridad, la contrasena no debe quedar escrita en este archivo si el manual se envia por correo, WhatsApp o queda guardado en el proyecto.

## 1. Herramientas que se usan

La pagina usa 3 herramientas principales:

- Sanity: aqui se editan textos, fotos, videos, paquetes, contacto y redes.
- Cloudinary: aqui se suben las imagenes.
- Vercel: aqui se actualiza la web publica despues de hacer cambios.

URL de Sanity:

```txt
https://klipstudio.com.pe/studio/
```

URL de Cloudinary:

```txt
https://cloudinary.com/users/login
```

Importante: la web es estatica. Eso significa que, despues de publicar cambios en Sanity, tambien se debe hacer un redeploy en Vercel para que los cambios aparezcan en la web publica.

## 2. Antes de subir imagenes

Cloudinary tiene almacenamiento limitado en su plan gratuito. Para no llenar ese espacio rapido, lo mejor es convertir las imagenes a formato WebP antes de subirlas.

Formato recomendado:

- WebP

Formatos permitidos:

- WebP
- JPG
- JPEG
- PNG

Recomendacion:

- Galeria horizontal: WebP, 1600 px de ancho.
- Galeria vertical: WebP, 1800 px de alto.
- Imagen principal o hero horizontal: WebP, 1920 px de ancho.
- Imagen principal o hero vertical: WebP, 1920 px de alto.
- Peso ideal para galeria: menos de 500 KB por imagen.
- Peso ideal para hero o fondo grande: menos de 1 MB si es posible.

La galeria usa la imagen directa de Cloudinary. Por eso la imagen debe subirse ya optimizada desde la computadora.

Evitar subir fotos originales pesadas de camara, por ejemplo imagenes de 8 MB, 15 MB o mas.

## 3. Como convertir una imagen a WebP

Se puede usar el convertidor local incluido con este manual.

Archivo:

```txt
tools/convertidor-webp.html
```

Este convertidor funciona en la computadora del cliente. No sube imagenes a internet.

Pasos generales:

1. Abrir el archivo `convertidor-webp.html` con doble click.
2. Arrastrar imagenes JPG o PNG dentro de la ventana.
3. Elegir calidad entre 75% y 85%.
4. Elegir tamano final:
   - Galeria: horizontal 1600 px de ancho / vertical 1800 px de alto.
   - Hero: horizontal 1920 px de ancho / vertical 1920 px de alto.
5. Presionar `Convertir`.
6. Descargar las imagenes WebP.
7. Subir las imagenes WebP a Cloudinary.

Si la imagen es horizontal, el convertidor limita el ancho.
Si la imagen es vertical, el convertidor limita el alto.
No recorta la imagen. Mantiene la proporcion original.

Ejemplos de nombres correctos:

```txt
bodas-galeria-01.webp
quinceanera-hero.webp
publicidad-video-preview.webp
cumpleanos-galeria-12.webp
```

Evitar nombres como:

```txt
IMG_9982.JPG
foto final nueva copia.png
whatsapp image 2026.jpeg
```

## 4. Subir imagen a Cloudinary

Pasos:

1. Entrar a Cloudinary.
2. Ir a Media Library.
3. Subir la imagen WebP.
4. Abrir la imagen subida.
5. Copiar la URL segura que empieza con `https://`.
6. Pegar esa URL en Sanity.

Ejemplo de URL:

```txt
https://res.cloudinary.com/xxxxx/image/upload/v123456/klipstudio/bodas-galeria-01.webp
```

## 5. Editar fotos en Sanity

Pasos:

1. Entrar a Sanity Studio.
2. Abrir el servicio que se quiere editar.
3. Ejemplos de servicios:
   - Bodas
   - Quinceaneros
   - Cumpleanos
   - Sesiones de fotos
   - Publicidad
4. Buscar la seccion Galeria de fotos.
5. Pegar la URL de Cloudinary en el campo de imagen.
6. Escribir texto ALT breve.
7. Publicar.

Recomendacion actual del diseno:

- Cada servicio usa 24 fotos.
- La web muestra esas fotos en 3 grupos de carrusel.
- Cada grupo muestra 8 fotos.

## 6. Que es el texto ALT

El texto ALT describe brevemente la imagen.

Sirve para accesibilidad, buscadores y respaldo si una imagen no carga.

Ejemplos:

```txt
Novios durante ceremonia de boda
Sesion de quinceanera en estudio
Fotografia publicitaria de producto
Cumpleanos familiar en salon
```

Evitar textos como:

```txt
foto
imagen
prueba
aaa
```

## 7. Editar videos

Los videos se manejan con YouTube.

Pasos:

1. Subir el video a YouTube.
2. Copiar la URL del video.
3. Entrar a Sanity.
4. Abrir el servicio correspondiente.
5. Buscar la seccion Videos.
6. Pegar la URL de YouTube o el ID del video.
7. Opcional: subir una imagen preview a Cloudinary y pegarla en el campo de imagen del video.
8. Publicar.

Si no se coloca imagen preview, la web usa automaticamente la miniatura de YouTube.

Ejemplo de URL de YouTube:

```txt
https://www.youtube.com/watch?v=XXXXXXXXXXX
```

Ejemplo de ID de YouTube:

```txt
XXXXXXXXXXX
```

## 8. Imagen preview de videos

La imagen preview es la imagen que se ve antes de reproducir el video.

Orden que usa la pagina:

1. Imagen preview colocada en Sanity.
2. Si no hay preview, miniatura automatica de YouTube.
3. Si no hay miniatura, imagen principal del servicio.

Recomendacion:

- Usar WebP.
- Ancho recomendado: 1280 px.
- Peso recomendado: menos de 500 KB.

## 9. Editar paquetes

Cada servicio puede tener paquetes.

Campos comunes:

- Nombre del paquete.
- Precio.
- Beneficios incluidos.
- Si el paquete es destacado.
- Texto del boton.

Pasos:

1. Entrar a Sanity.
2. Abrir el servicio.
3. Buscar la seccion Paquetes.
4. Editar nombre, precio y beneficios.
5. Marcar Destacado si aplica.
6. Publicar.

Importante: no borrar secciones si no se sabe para que sirven.

## 10. Editar contacto y redes

En Sanity, abrir el contenido principal o Home.

Campos comunes:

- WhatsApp
- Telefono
- Email
- Facebook
- Instagram
- TikTok

Despues de cambiar datos, publicar.

## 11. Editar menu

El menu tambien se administra desde Sanity.

Recomendacion:

- No cambiar rutas si no es necesario.
- No borrar enlaces sin revisar.
- Mantener nombres cortos.

Ejemplos de rutas:

```txt
/bodas
/quinceaneros
/cumpleanos
/fotos-estudio
/publicidad
/como-trabajamos
```

## 12. Publicar cambios en Sanity

Despues de editar contenido:

1. Revisar que los campos esten completos.
2. Hacer clic en Publish.
3. Esperar confirmacion.

Publicar en Sanity guarda el contenido, pero la web publica puede necesitar redeploy en Vercel para actualizarse.

## 13. Actualizar la web publica en Vercel

Despues de publicar en Sanity:

1. Entrar a Vercel.
2. Abrir el proyecto KlipStudio.
3. Ir a Deployments.
4. Buscar el ultimo deployment.
5. Hacer clic en Redeploy.
6. Esperar hasta que diga Ready.
7. Abrir la web y revisar.

Web publica:

```txt
https://klipstudio.com.pe
```

## 14. Revisar cambios en navegador

Despues del redeploy, hacer recarga fuerte.

En Mac:

```txt
Cmd + Shift + R
```

En Windows:

```txt
Ctrl + Shift + R
```

Esto fuerza al navegador a cargar la version nueva.

## 15. Si algo no aparece

Revisar en este orden:

1. La imagen fue subida a Cloudinary.
2. La URL empieza con `https://`.
3. La URL fue pegada correctamente en Sanity.
4. El documento fue publicado en Sanity.
5. Se hizo redeploy en Vercel.
6. Vercel ya dice Ready.
7. Se hizo recarga fuerte en el navegador.

## 16. Buenas practicas

- Convertir imagenes a WebP antes de subir.
- Usar nombres ordenados.
- No subir imagenes demasiado pesadas.
- No usar imagenes descargadas de Google sin permiso.
- Usar Cloudinary para imagenes.
- Usar YouTube para videos.
- Revisar la web en celular y computadora.
- Guardar URLs importantes en un documento interno.

## 17. Que no tocar

No editar:

- Codigo de la pagina.
- Configuracion de Vercel.
- Configuracion de Sanity.
- Variables tecnicas.
- Archivos internos.

Solo administrar contenido desde:

- Sanity
- Cloudinary
- YouTube
- Vercel para redeploy

## 18. Resumen rapido

Para cambiar una foto:

1. Convertir imagen a WebP.
2. Subir a Cloudinary.
3. Copiar URL.
4. Pegar URL en Sanity.
5. Publicar en Sanity.
6. Redeploy en Vercel.
7. Recarga fuerte en navegador.

Para cambiar un video:

1. Subir video a YouTube.
2. Copiar URL.
3. Pegar URL en Sanity.
4. Opcional: subir preview WebP a Cloudinary.
5. Publicar en Sanity.
6. Redeploy en Vercel.
7. Revisar web.

Para cambiar texto o paquetes:

1. Editar en Sanity.
2. Publicar.
3. Redeploy en Vercel.
4. Revisar web.
