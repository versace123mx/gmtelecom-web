import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Integration from './components/Integration.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Franja de marca entre el hero y la plataforma.
function Ticker() {
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        {['Voz sobre Asterisk', 'WhatsApp Business', 'Transcripción con IA', 'Bot de voz (AVR)', 'CRM + API abierta'].map(
          (t) => (
            <span key={t}>{t}</span>
          ),
        )}
      </div>
    </div>
  );
}

export default function App() {
  // Animación de entrada al hacer scroll.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
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
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <Integration />
        <HowItWorks />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
