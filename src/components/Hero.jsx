import { ArrowRight, MessageCircle } from 'lucide-react';
import { HERO, HERO_STATS, waLink } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="reveal">
          <span className="eyebrow">{HERO.eyebrow}</span>
          <h1>
            Tu centro de contacto completo,{' '}
            <span className="grad-text">listo para operar.</span>
          </h1>
          <p className="hero__sub">{HERO.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#contacto">
              {HERO.primaryCta} <ArrowRight size={18} />
            </a>
            <a
              className="btn btn--wa btn--lg"
              href={waLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> {HERO.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__stats reveal">
          {HERO_STATS.map((s) => (
            <div className="stat-card" key={s.value}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
