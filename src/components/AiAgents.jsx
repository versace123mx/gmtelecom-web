import {
  PhoneCall,
  Ear,
  Split,
  ClipboardList,
  UserRoundCheck,
  Clock,
} from 'lucide-react';
import { AI_AGENTS } from '../data/content.js';

const ICONS = { PhoneCall, Ear, Split, ClipboardList, UserRoundCheck, Clock };

// Posiciones de los nodos-bot dentro del viewBox 0 0 560 380.
const NODES = [
  { x: 90, y: 70, accent: false },
  { x: 285, y: 52, accent: true },
  { x: 475, y: 78, accent: false },
  { x: 60, y: 200, accent: true },
  { x: 210, y: 170, accent: false },
  { x: 360, y: 200, accent: true },
  { x: 505, y: 185, accent: false },
  { x: 120, y: 320, accent: false },
  { x: 300, y: 330, accent: true },
  { x: 470, y: 315, accent: false },
];

// Aristas de la malla (índices en NODES).
const EDGES = [
  [0, 1], [1, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
  [3, 4], [4, 5], [5, 6], [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9], [7, 8], [8, 9],
];

// Rutas por las que viajan los "paquetes" de datos.
const PACKET_PATHS = [
  'M60,200 L210,170 L360,200 L505,185',
  'M90,70 L285,52 L475,78',
  'M120,320 L300,330 L470,315',
];

function BotGlyph({ x, y, accent }) {
  // Cabecita de robot centrada en (x, y).
  const stroke = accent ? 'var(--orange-2)' : 'var(--green)';
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="27" className="ai-node__ring" style={{ stroke }} />
      <circle r="27" className="ai-node__halo" style={{ stroke }} />
      <g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1="0" y1="-19" x2="0" y2="-13" />
        <circle cx="0" cy="-20" r="1.6" fill={stroke} />
        <rect x="-11" y="-12" width="22" height="18" rx="5" />
      </g>
      <circle cx="-4.5" cy="-3.5" r="2.1" fill={stroke} />
      <circle cx="4.5" cy="-3.5" r="2.1" fill={stroke} />
    </g>
  );
}

export default function AiAgents() {
  return (
    <section className="section ai-agents" id="agentes-ia">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{AI_AGENTS.eyebrow}</span>
          <h2>{AI_AGENTS.title}</h2>
          <p>{AI_AGENTS.subtitle}</p>
        </div>

        <div className="ai-agents__grid">
          <div className="ai-mesh reveal" aria-hidden="true">
            <span className="ai-mesh__tag ai-mesh__tag--top">
              <span className="ai-dot" /> Ejecución automática
            </span>
            <span className="ai-mesh__tag ai-mesh__tag--bottom">Atención 24/7</span>

            <svg viewBox="0 0 560 380" className="ai-mesh__svg" role="img">
              <defs>
                <linearGradient id="aiLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#16b9c6" />
                  <stop offset="100%" stopColor="#2bd09a" />
                </linearGradient>
              </defs>

              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].x}
                  y1={NODES[a].y}
                  x2={NODES[b].x}
                  y2={NODES[b].y}
                  className="ai-edge"
                  style={{ animationDelay: `${(i % 6) * 0.4}s` }}
                />
              ))}

              {PACKET_PATHS.map((d, i) => (
                <circle key={`p${i}`} r="3.5" className="ai-packet">
                  <animateMotion
                    dur={`${4 + i}s`}
                    begin={`${i * 1.3}s`}
                    repeatCount="indefinite"
                    path={d}
                    rotate="auto"
                  />
                </circle>
              ))}

              {NODES.map((n, i) => (
                <g key={i} style={{ animationDelay: `${(i % 5) * 0.5}s` }} className="ai-node">
                  <BotGlyph x={n.x} y={n.y} accent={n.accent} />
                </g>
              ))}
            </svg>

            <div className="ai-mesh__labels">
              {AI_AGENTS.nodeLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          <ul className="ai-caps">
            {AI_AGENTS.capabilities.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <li className="ai-cap reveal" key={c.title}>
                  <span className="ai-cap__icon">{Icon ? <Icon size={20} /> : null}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
