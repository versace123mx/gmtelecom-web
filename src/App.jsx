import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import AiAgents from './components/AiAgents.jsx';
import Integration from './components/Integration.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ChatWidget from './components/ChatWidget.jsx';

// Franja de marca entre el hero y la plataforma.
function Ticker() {
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        {['Voz sobre Asterisk', 'WhatsApp Business', 'Transcripción con IA', 'Bot de voz', 'CRM + API abierta'].map(
          (t) => (
            <span key={t}>{t}</span>
          ),
        )}
      </div>
    </div>
  );
}

export default function App() {
  // Animación de entrada al hacer scroll. El CSS deja el contenido
  // visible por defecto; aquí activamos la animación (.js-anim) y un
  // observer que revela cada bloque al entrar en pantalla. Si el
  // observer no existe o tarda, un temporizador de respaldo lo muestra
  // todo — el sitio nunca se queda en blanco.
  useEffect(() => {
    const root = document.documentElement;
    const els = document.querySelectorAll('.reveal');
    const revealAll = () => els.forEach((el) => el.classList.add('is-visible'));

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
    root.classList.add('js-anim');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => io.observe(el));

    const failsafe = setTimeout(revealAll, 2500);
    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <AiAgents />
        <Integration />
        <HowItWorks />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
