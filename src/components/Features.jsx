import {
  PhoneOutgoing,
  MessagesSquare,
  Contact,
  FileAudio,
  Bot,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import { FEATURES } from '../data/content.js';

const ICONS = {
  PhoneOutgoing,
  MessagesSquare,
  Contact,
  FileAudio,
  Bot,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
};

export default function Features() {
  return (
    <section className="section" id="plataforma">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">La plataforma</span>
          <h2>Todo lo que necesita tu operación, en un solo lugar</h2>
          <p>
            Una base sólida de call center con voz sobre Asterisk, más los canales
            digitales y las herramientas de IA que hoy marcan la diferencia.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <article className="feature-card reveal" key={f.title}>
                <div className="feature-card__icon">
                  {Icon ? <Icon size={22} /> : null}
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
