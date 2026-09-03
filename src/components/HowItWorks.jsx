import { STEPS } from '../data/content.js';

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo funciona</span>
          <h2>De la primera llamada a producción</h2>
          <p>Un proceso acompañado, sin que tengas que administrar servidores ni instalar software.</p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.n}>
              <div className="step__n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
