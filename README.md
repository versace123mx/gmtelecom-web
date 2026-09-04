# GM Telecom — sitio informativo

Sitio de una sola página (React + Vite) que presenta la plataforma de contact
center y el servicio de integración a la medida. Sin backend: el formulario de
contacto usa Formspree y el botón principal abre WhatsApp.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Qué editar antes de publicar

Todo el contenido y la configuración están en **`src/data/content.js`**:

| Constante            | Qué es                                                              |
| -------------------- | ----------------------------------------------------------------- |
| `WHATSAPP_NUMBER`    | Número en formato internacional sin `+` ni espacios (ej. `525512345678`). |
| `FORMSPREE_ID`       | ID del formulario de Formspree (parte final de `formspree.io/f/XXXX`). |
| `CONTACT_EMAIL`      | Correo al que llegan las solicitudes (ya = `gmtelecommx@gmail.com`). |
| `TURNSTILE_SITE_KEY` | Site key de Cloudflare Turnstile (opcional). Vacío = sin reto visible. |
| `SOCIAL`             | URLs de Instagram / X / Facebook. Vacío = ícono sin enlace.        |
| Textos               | `HERO`, `FEATURES`, `AI_AGENTS`, `CHAT`, `INTEGRATION`, `FAQ`, etc. |

### Formulario de contacto (Formspree, gratis)

1. Crea la cuenta en <https://formspree.io> **usando `gmtelecommx@gmail.com`** —
   así las solicitudes llegan a esa bandeja.
2. Crea un formulario, copia su ID y pégalo en `FORMSPREE_ID`.
3. En los ajustes del formulario, **deja el reCAPTCHA DESACTIVADO**. El reCAPTCHA
   de Formspree no funciona con el envío por AJAX que usa el sitio (responde
   `403`). El anti-spam va por Turnstile + honeypots (abajo).
4. El primer envío dispara un correo de confirmación de Formspree a
   `gmtelecommx@gmail.com` — hay que abrir ese correo y confirmar el formulario
   una vez; después ya entran directo.
5. Plan gratuito: 50 envíos/mes.

**Anti-spam que ya trae el código** (sin configurar nada): dos honeypots (campos
ocultos que solo rellenan los bots) y una trampa de tiempo (rechaza envíos en
menos de 4 s). Sumar Turnstile lo deja sólido para un sitio así.

### Turnstile (opcional, recomendado — gratis y ya usas Cloudflare)

Cloudflare → **Turnstile** → *Add widget* (modo *Managed*, dominio `gmtelecom.dev`).
Copia el **Site Key** en `TURNSTILE_SITE_KEY`. El formulario mostrará el reto y
exigirá pasarlo antes de enviar.

### Redes sociales

En `SOCIAL` (dentro de `content.js`) deja la `url` vacía mientras no exista el
canal — el ícono aparece igual, atenuado y sin enlace. Cuando crees la cuenta,
pega la URL completa y queda enlazado.

Los logos están en `public/` (`logo-gmtelecom.png` para fondo oscuro,
`logo-gmtelecom-dark.png` para fondo claro, `favicon.ico`).

## Publicar

### Vercel

1. Sube este repo a GitHub e impórtalo en Vercel.
2. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
3. Agrega tu dominio en **Settings → Domains**.

### Netlify

1. Importa el repo. Build command: `npm run build`. Publish directory: `dist`.
2. Dominio en **Domain settings**.

Ambas plataformas detectan el preset de Vite automáticamente; no se requiere
configuración extra.
