// =====================================================================
// Todo el contenido y la configuración editable del sitio vive aquí.
// Cambia estos valores sin tocar los componentes.
// =====================================================================

// --- Contacto -------------------------------------------------------
// WhatsApp: número en formato internacional SIN "+", espacios ni guiones.
// Ej: México 55 1234 5678  ->  "525512345678"
export const WHATSAPP_NUMBER = '525500000000'; // TODO: reemplazar por el número real
export const WHATSAPP_MESSAGE = 'Hola GM Telecom, me interesa conocer la plataforma de contact center.';

// Formulario sin backend propio: Formspree (https://formspree.io).
// 1) Crea una cuenta gratis, 2) crea un formulario, 3) pega aquí su ID
//    (la parte final de la URL "https://formspree.io/f/XXXXXXXX").
export const FORMSPREE_ID = 'XXXXXXXX'; // TODO: reemplazar por el ID real

export const CONTACT_EMAIL = 'contacto@gmtelecom.mx'; // TODO: ajustar

export const waLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// --- Navegación ---------------------------------------------------------
export const NAV_LINKS = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#integracion', label: 'Integración' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
];

// --- Hero -------------------------------------------------------------
export const HERO = {
  eyebrow: 'Contact center en la nube',
  title: 'Tu centro de contacto completo, listo para operar.',
  subtitle:
    'Voz, WhatsApp y redes en una sola bandeja. Marcador predictivo, CRM integrado, grabación con transcripción automática y bots de voz con IA. Y lo adaptamos a la forma en que ya trabaja tu operación.',
  primaryCta: 'Solicitar demo',
  secondaryCta: 'Escríbenos por WhatsApp',
};

export const HERO_STATS = [
  { value: 'Omnicanal', label: 'Voz + WhatsApp + leads de redes' },
  { value: 'IA', label: 'Transcripción y bot de voz' },
  { value: 'Multi-servidor', label: 'Crece agregando capacidad' },
  { value: 'A la medida', label: 'Se integra a tu proceso' },
];

// --- Plataforma (features) ------------------------------------------
export const FEATURES = [
  {
    icon: 'PhoneOutgoing',
    title: 'Marcador inteligente',
    text: 'Modos predictivo, progresivo y preview. Colas, reglas de reintento, listas y horarios — pensado para cobranza y ventas de alto volumen.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Omnicanal real',
    text: 'Llamadas, WhatsApp y formularios de redes en una misma conversación por cliente. El agente atiende todo desde un solo lugar.',
  },
  {
    icon: 'Contact',
    title: 'CRM integrado',
    text: 'Ficha del cliente, etapas, tipificaciones e historial de cada interacción. O conéctalo con el CRM que ya usas.',
  },
  {
    icon: 'FileAudio',
    title: 'Grabación + transcripción',
    text: 'Cada llamada se graba y se transcribe automáticamente. Búscala por texto, revísala y consérvala según tus políticas de retención.',
  },
  {
    icon: 'Bot',
    title: 'IVR visual y bot de voz (AVR)',
    text: 'Arma menús de atención arrastrando bloques. Suma un asistente de voz con IA que responde y clasifica antes de pasar al agente.',
  },
  {
    icon: 'BarChart3',
    title: 'Reportes y tablero en vivo',
    text: 'Ocupación, colas, resultados por agente y por campaña. Tablero de supervisión en tiempo real y reportes exportables.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Módulo de calidad',
    text: 'Formularios de evaluación configurables para monitorear llamadas y dar retroalimentación con criterios consistentes.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Control y seguridad',
    text: 'Roles y permisos por perfil, bitácora de auditoría, lista negra / no-llamar y llaves de API para integraciones.',
  },
];

// --- Integración a la medida --------------------------------------
export const INTEGRATION = {
  title: 'Nos adaptamos a tu forma de trabajar',
  subtitle:
    'No todas las operaciones necesitan lo mismo. Configuramos la plataforma alrededor de tu proceso, no al revés.',
  items: [
    {
      icon: 'FormInput',
      title: 'Formularios a tu medida',
      text: 'Desde captura simple hasta formularios extensos con los campos exactos que tu operación necesita registrar en cada contacto.',
    },
    {
      icon: 'DatabaseZap',
      title: 'Recolección y resultados de datos',
      text: 'Definimos qué información se captura, cómo se valida y en qué reportes y exportaciones la necesitas de vuelta.',
    },
    {
      icon: 'Plug',
      title: 'Conexión con tus sistemas',
      text: 'API abierta y webhooks para enlazar con tu CRM, tu marcador de cobranza o tu tablero interno. Tres modos de integración según tu caso.',
    },
    {
      icon: 'Workflow',
      title: 'Tu flujo, tus etapas',
      text: 'Etapas de cliente, tipificaciones y reglas de enrutamiento configuradas para reflejar cómo avanza realmente tu gestión.',
    },
  ],
};

// --- Cómo funciona -------------------------------------------------
export const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Revisamos tu operación actual: canales, volumen, procesos y qué necesitas medir.',
  },
  {
    n: '02',
    title: 'Configuración',
    text: 'Montamos campañas, colas, IVR, formularios y usuarios en la plataforma en la nube.',
  },
  {
    n: '03',
    title: 'Integración',
    text: 'Conectamos con tu CRM y tus troncales SIP, y ajustamos los reportes a tu medida.',
  },
  {
    n: '04',
    title: 'Operación y soporte',
    text: 'Sales a producción con acompañamiento. Escalas agregando agentes o capacidad cuando lo necesites.',
  },
];

// --- Beneficios --------------------------------------------------
export const BENEFITS = [
  'Sin instalar nada: opera desde el navegador',
  'Pago por agente — creces y decreces según tu operación',
  'Transcripción y bot de voz con IA opcionales',
  'Grabaciones y respaldos con políticas de retención',
  'Acompañamiento en la puesta en marcha',
  'Infraestructura que escala agregando servidores',
];

// --- FAQ ------------------------------------------------------------
export const FAQ = [
  {
    q: '¿Necesito instalar algo?',
    a: 'No. La plataforma es web: tus agentes y supervisores trabajan desde el navegador. La telefonía corre en la nube.',
  },
  {
    q: '¿Puedo usar mis números y mi proveedor SIP?',
    a: 'Sí. Conectamos troncales SIP para entrada y salida. También te orientamos si necesitas contratar DIDs o minutos.',
  },
  {
    q: '¿Se integra con mi CRM?',
    a: 'Sí, con API abierta y webhooks. Manejamos tres modos: usar el CRM integrado, conectar el tuyo, o un esquema híbrido.',
  },
  {
    q: '¿Cómo se cobra?',
    a: 'Por agente al mes para la plataforma, los minutos SIP por separado, y el trabajo de integración a la medida se cotiza como proyecto. Escríbenos para una propuesta.',
  },
  {
    q: '¿Las llamadas quedan grabadas?',
    a: 'Sí, con transcripción automática y reglas de retención configurables según tus políticas y las de tus clientes.',
  },
];

export const COMPANY = {
  name: 'GM Telecom',
  tagline: 'Conectamos posibilidades',
  year: new Date().getFullYear(),
};
