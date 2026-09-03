import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { FORMSPREE_ID, CONTACT_EMAIL, waLink } from '../data/content.js';

const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="contact__card">
          <div className="contact__aside">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>
              Hablemos
            </span>
            <h2>Solicita una demo de la plataforma</h2>
            <p>
              Cuéntanos sobre tu operación y te mostramos GM Telecom funcionando, con
              una propuesta a la medida de tu proceso.
            </p>
            <a className="btn btn--wa btn--block" href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Escríbenos por WhatsApp
            </a>
            <p className="contact__alt">
              O al correo <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="empresa">Empresa</label>
                <input id="empresa" name="empresa" type="text" autoComplete="organization" />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="mensaje">¿Qué necesitas resolver?</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Número de agentes, canales que usas, si necesitas integración con tu CRM…"
              />
            </div>

            <button
              className="btn btn--primary btn--block btn--lg"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
            </button>

            {status === 'ok' && (
              <div className="form-status form-status--ok">
                ¡Gracias! Recibimos tu mensaje y te contactamos pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status form-status--err">
                No se pudo enviar. Escríbenos por WhatsApp o al correo de arriba.
              </div>
            )}

            <p className="form-note">
              Al enviar aceptas que GM Telecom te contacte sobre tu solicitud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
