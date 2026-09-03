import { FormInput, DatabaseZap, Plug, Workflow } from 'lucide-react';
import { INTEGRATION } from '../data/content.js';

const ICONS = { FormInput, DatabaseZap, Plug, Workflow };

export default function Integration() {
  return (
    <section className="section integration" id="integracion">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Integración a la medida</span>
          <h2>{INTEGRATION.title}</h2>
          <p>{INTEGRATION.subtitle}</p>
        </div>

        <div className="integration__grid">
          {INTEGRATION.items.map((it) => {
            const Icon = ICONS[it.icon];
            return (
              <article className="int-card reveal" key={it.title}>
                <div className="int-card__icon">{Icon ? <Icon size={22} /> : null}</div>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
