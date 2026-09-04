import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Bot, RotateCcw, Send } from 'lucide-react';
import { CHAT, waLink } from '../data/content.js';

// Construye el guion de mensajes a partir de las respuestas dadas.
function buildTranscript(answers) {
  const msgs = [{ from: 'bot', text: CHAT.greeting }];
  let stepKey = 'operacion';
  for (const key of ['operacion', 'agentes', 'foco']) {
    const step = CHAT.steps[key];
    if (!step) break;
    msgs.push({ from: 'bot', text: step.question });
    if (answers[key]) {
      const opt = step.options.find((o) => o.value === answers[key]);
      msgs.push({ from: 'user', text: opt ? opt.label : answers[key] });
      stepKey = opt ? opt.next : 'result';
    } else {
      return { msgs, stepKey: key, done: false };
    }
  }
  return { msgs, stepKey: 'result', done: true };
}

function Recommendation({ answers }) {
  const line = CHAT.focoRecomendacion[answers.foco] || '';
  const waMsg = `Hola GM Telecom. Operación de ${answers.operacion}, ${answers.agentes} agentes, me interesa: ${answers.foco}.`;
  return (
    <div className="chat-reco">
      <p>
        Para una operación de <b>{answers.operacion}</b> con <b>{answers.agentes}</b> agentes y foco
        en <b>{answers.foco}</b>:
      </p>
      <p>{line}</p>
      <div className="chat-reco__cta">
        <a className="btn btn--wa" href={waLink(waMsg)} target="_blank" rel="noreferrer">
          {CHAT.ctaWhatsapp}
        </a>
        <a className="btn btn--ghost" href="#contacto" data-chat-close>
          {CHAT.ctaForm}
        </a>
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const bodyRef = useRef(null);

  const { msgs, stepKey, done } = buildTranscript(answers);
  const currentStep = done ? null : CHAT.steps[stepKey];

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [answers, open]);

  // Permite que el botón "Dejar mis datos" cierre el panel al navegar.
  function onBodyClick(e) {
    if (e.target.closest('[data-chat-close]')) setOpen(false);
  }

  function choose(step, opt) {
    setAnswers((a) => ({ ...a, [step.key]: opt.value }));
  }

  return (
    <>
      <button
        className={`chat-launcher ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && <span>{CHAT.launcherLabel}</span>}
      </button>

      <div className={`chat-panel ${open ? 'is-open' : ''}`} role="dialog" aria-label={CHAT.headerTitle}>
        <header className="chat-panel__head">
          <span className="chat-panel__avatar">
            <Bot size={18} />
          </span>
          <div>
            <strong>{CHAT.headerTitle}</strong>
            <span>{CHAT.headerSubtitle}</span>
          </div>
          <button className="chat-panel__x" onClick={() => setOpen(false)} aria-label="Cerrar">
            <X size={18} />
          </button>
        </header>

        <div className="chat-panel__body" ref={bodyRef} onClick={onBodyClick}>
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.from}`}>
              {m.text}
            </div>
          ))}

          {done && <Recommendation answers={answers} />}
        </div>

        <div className="chat-panel__foot">
          {currentStep ? (
            <div className="chat-options">
              {currentStep.options.map((opt) => (
                <button key={opt.value} onClick={() => choose(currentStep, opt)}>
                  {opt.label}
                </button>
              ))}
            </div>
          ) : (
            <button className="chat-restart" onClick={() => setAnswers({})}>
              <RotateCcw size={15} /> {CHAT.restart}
            </button>
          )}
          <p className="chat-panel__note">
            <Send size={12} /> Respuestas guiadas · sin costo · te contacta una persona
          </p>
        </div>
      </div>
    </>
  );
}
