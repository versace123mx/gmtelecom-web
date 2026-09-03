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

| Constante          | Qué es                                                              |
| ------------------ | ----------------------------------------------------------------- |
| `WHATSAPP_NUMBER`  | Número en formato internacional sin `+` ni espacios (ej. `525512345678`). |
| `FORMSPREE_ID`     | ID del formulario de Formspree (parte final de `formspree.io/f/XXXX`). |
| `CONTACT_EMAIL`    | Correo de contacto que se muestra y se enlaza con `mailto:`.       |
| Textos             | `HERO`, `FEATURES`, `INTEGRATION`, `STEPS`, `BENEFITS`, `FAQ`, etc. |

### Formulario de contacto (Formspree, gratis)

1. Crea cuenta en <https://formspree.io> y un formulario nuevo.
2. Copia su ID y pégalo en `FORMSPREE_ID` dentro de `src/data/content.js`.
3. El plan gratuito incluye 50 envíos/mes; los mensajes llegan al correo de la cuenta.

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
