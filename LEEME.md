# CORE Club: cómo publicarla en tu propio enlace (GitHub Pages, gratis)

Con esto, las clientas abren la app con un enlace normal, **sin Claude y sin crear cuenta**. Tu panel de clientas sigue en Claude, y los códigos que generas allí funcionan igual en esta versión.

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa |
| `manifest.webmanifest` + iconos | Para que se pueda instalar en el móvil como una app, con el logo de core. |
| `sw.js` | Hace que funcione sin conexión y que las actualizaciones lleguen solas |
| `.nojekyll` | Archivo técnico para GitHub Pages (no lo borres) |

## Publicarla (unos 10 minutos)

1. **Crea una cuenta en GitHub** (github.com → *Sign up*). Te recomiendo el usuario `coreactivewear`, porque formará parte del enlace.
2. **Crea un repositorio:** botón **+** arriba a la derecha → *New repository*.
   - Nombre: `club`
   - Visibilidad: **Public**
   - Pulsa *Create repository*.
3. **Sube los archivos:** en el repositorio, pulsa *uploading an existing file* y arrastra **todos los archivos de esta carpeta**, incluido `.nojekyll`. Pulsa *Commit changes*.
   - Si tu ordenador no muestra `.nojekyll` por ser un archivo oculto, crea uno en GitHub: *Add file → Create new file*, nómbralo `.nojekyll`, déjalo vacío y guarda.
4. **Activa GitHub Pages:** *Settings* → *Pages* → en *Branch* elige `main` y carpeta `/ (root)` → *Save*.
5. Espera 1–2 minutos. Tu app estará en:
   **https://coreactivewear.github.io/club/** (cambia `coreactivewear` por tu usuario si usaste otro).
6. **Pásame ese enlace.** Lo pongo en el panel para que los mensajes que mandas a las clientas lleven al sitio correcto.

## Actualizarla

Cuando te pase una versión nueva, sube el `index.html` nuevo al mismo repositorio (*Add file → Upload files*) y confirma. Las clientas la reciben sola la próxima vez que abran la app.

## Dominio propio (opcional, más adelante)

Si compras un dominio, por ejemplo `coreactivewear.com`, puedes usar `app.coreactivewear.com`: *Settings → Pages → Custom domain* y un registro CNAME en tu proveedor de dominio. Te ayudo cuando llegue el momento.

## Qué protege el progreso de las clientas

- **Instalar la app en la pantalla de inicio.** La propia app se lo propone: en Android con un botón, y en iPhone explicando cómo hacerlo desde Safari.
- **Copia de seguridad:** en *Perfil → Guardar copia de seguridad* se genera un archivo que la clienta puede enviarse por WhatsApp. En un móvil nuevo lo restaura desde la portada (*Restaurar una copia*) o desde Perfil. Incluye sus fotos de progreso.
- **Recordatorio:** si pasan más de 2 semanas sin copia, la app se lo recuerda en la pantalla de inicio.
