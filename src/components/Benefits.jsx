import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { BENEFITS, FAQ } from '../data/content.js';

export default function Benefits() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section section--tight">
      <div className="container split">
        <div className="reveal">
          <span className="eyebrow">Por qué GM Telecom</span>
          <h2 style={{ fontSize: '1.9rem', margin: '12px 0 6px' }}>
            Menos infraestructura que administrar, más tiempo para operar
          </h2>
          <ul className="benefits-list">
            {BENEFITS.map((b) => (
              <li key={b}>
                <Check size={18} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <span className="eyebrow">Preguntas frecuentes</span>
          <div style={{ marginTop: 18 }}>
            {FAQ.map((item, i) => (
              <div className="faq-item" key={item.q} data-open={openIdx === i}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                >
                  {item.q}
                  <ChevronDown size={18} />
                </button>
                <div className="faq-item__body">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
