import { COMPANY, CONTACT_EMAIL, SOCIAL, waLink } from '../data/content.js';

// Iconos de marca en SVG (lucide ya no incluye logos de redes).
const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-gmtelecom.png" alt="GM Telecom" />
          <span>{COMPANY.tagline}</span>
        </div>

        <nav className="footer__social" aria-label="Redes sociales">
          {SOCIAL.map((s) =>
            s.url ? (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {ICONS[s.key]}
              </a>
            ) : (
              <span
                key={s.key}
                aria-label={`${s.label} (próximamente)`}
                title={`${s.label} — próximamente`}
                className="is-soon"
              >
                {ICONS[s.key]}
              </span>
            ),
          )}
        </nav>

        <div className="footer__meta">
          <a href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>{' '}
          &nbsp;·&nbsp; <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />© {COMPANY.year} {COMPANY.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
