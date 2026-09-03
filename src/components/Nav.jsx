import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, waLink } from '../data/content.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={close}>
          <img src="/logo-gmtelecom.png" alt="GM Telecom" />
        </a>

        <nav className="nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <a className="btn btn--ghost" href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn--primary" href="#contacto" onClick={close}>
            Solicitar demo
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
