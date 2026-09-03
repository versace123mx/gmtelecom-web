import { COMPANY, CONTACT_EMAIL, waLink } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-gmtelecom.png" alt="GM Telecom" />
          <span>{COMPANY.tagline}</span>
        </div>
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
