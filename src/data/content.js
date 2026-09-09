// =====================================================================
// Todo el contenido y la configuración editable del sitio vive aquí.
// Cambia estos valores sin tocar los componentes.
// =====================================================================

// --- Contacto -------------------------------------------------------
// WhatsApp: número en formato internacional SIN "+", espacios ni guiones.
// Ej: México 55 1234 5678  ->  "525512345678"
export const WHATSAPP_NUMBER = '525643204920'; // 52 (México) + 5643204920
export const WHATSAPP_MESSAGE = 'Hola GM Telecom, me interesa conocer la plataforma de contact center.';

// Correo al que llegan las solicitudes del formulario.
export const CONTACT_EMAIL = 'gmtelecommx@gmail.com';

// Formulario sin backend propio: Formspree (https://formspree.io).
//  1) Cuenta de Formspree creada CON gmtelecommx@gmail.com -> ahí llegan.
//  2) ID del formulario (parte final de "https://formspree.io/f/XXXXXXXX").
//  IMPORTANTE: en los ajustes de Formspree, "reCAPTCHA" debe estar DESACTIVADO.
//  El reCAPTCHA de Formspree rompe el envío por AJAX (responde 403). El
//  anti-spam va por otro lado: honeypots + trampa de tiempo (abajo) y
//  Cloudflare Turnstile (TURNSTILE_SITE_KEY).
export const FORMSPREE_ID = 'xrpglbyn';

// Anti-spam extra (todo del lado del cliente, sin backend):
//  - Honeypot: campos ocultos que solo un bot rellena -> se descarta el envío.
//  - Trampa de tiempo: si el formulario se envía en menos de FORM_MIN_MS ms
//    desde que cargó, casi seguro es un bot -> se rechaza.
export const FORM_MIN_MS = 4000;

// Cloudflare Turnstile (opcional, recomendado — es gratis y ya usas Cloudflare):
// Dashboard de Cloudflare -> Turnstile -> Add widget (modo "Managed",
// dominio gmtelecom.dev) -> copia el "Site Key" aquí. Con esto el formulario
// exige pasar el reto antes de enviar. Déjalo vacío para lanzar sin él.
export const TURNSTILE_SITE_KEY = '0x4AAAAAAEmmzXle741Yc5kP';

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;

// --- Navegación ---------------------------------------------------------
export const NAV_LINKS = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#agentes-ia', label: 'Agentes IA' },
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
    title: 'IVR visual y bot de voz',
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

// --- Agentes de IA (sección visual, ligada al bot de voz) ----------------
export const AI_AGENTS = {
  eyebrow: 'Agentes de IA',
  title: 'Agentes de voz con IA que atienden por ti',
  subtitle:
    'Nuestra plataforma pone a trabajar varios agentes de IA en conjunto: contestan, entienden al cliente, resuelven lo simple y pasan al humano solo lo que hace falta — las 24 horas.',
  capabilities: [
    { icon: 'PhoneCall', title: 'Contesta al instante', text: 'Sin colas ni horarios: cada llamada se atiende desde el primer segundo.' },
    { icon: 'Ear', title: 'Entiende lenguaje natural', text: 'El cliente habla normal; el agente de IA capta la intención y los datos clave.' },
    { icon: 'Split', title: 'Clasifica y enruta', text: 'Identifica el motivo y manda la llamada a la cola o al flujo correcto.' },
    { icon: 'ClipboardList', title: 'Resuelve lo repetitivo', text: 'Saldos, estatus, citas, validaciones — sin ocupar a un agente humano.' },
    { icon: 'UserRoundCheck', title: 'Escala al humano con contexto', text: 'Cuando pasa a una persona, le llega la transcripción y el resumen.' },
    { icon: 'Clock', title: 'Trabaja 24/7', text: 'Cubre noches, fines de semana y picos de demanda sin contratar más.' },
  ],
  // Etiquetas que rodean el gráfico de nodos.
  nodeLabels: ['Voicebot', 'Transcripción', 'Intención', 'Enrutamiento', 'Validación', 'Resumen'],
};

// --- Chat flotante guiado (sin backend) --------------------------
// Máquina de estados simple: cada paso muestra un mensaje del "asistente"
// y botones; la respuesta guarda una etiqueta y avanza al siguiente paso.
// El paso final arma una recomendación y un enlace a WhatsApp con los
// datos ya escritos.
export const CHAT = {
  launcherLabel: 'Asistente',
  headerTitle: 'Asistente GM Telecom',
  headerSubtitle: 'Te oriento en 30 segundos',
  greeting:
    '¡Hola! Soy el asistente de GM Telecom. En menos de un minuto te oriento sobre la mejor solución para tu operación.',
  steps: {
    operacion: {
      key: 'operacion',
      question: '¿Qué tipo de operación tienes?',
      options: [
        { label: 'Cobranza', value: 'cobranza', next: 'agentes' },
        { label: 'Ventas / Telemarketing', value: 'ventas', next: 'agentes' },
        { label: 'Atención a clientes', value: 'atención a clientes', next: 'agentes' },
        { label: 'Otra', value: 'otra', next: 'agentes' },
      ],
    },
    agentes: {
      key: 'agentes',
      question: '¿Cuántos agentes en línea manejas (o planeas)?',
      options: [
        { label: '1 a 10', value: '1-10', next: 'foco' },
        { label: '11 a 30', value: '11-30', next: 'foco' },
        { label: 'Más de 30', value: 'más de 30', next: 'foco' },
      ],
    },
    foco: {
      key: 'foco',
      question: '¿Qué es lo más importante para ti ahora?',
      options: [
        { label: 'Bot de voz con IA', value: 'agentes de voz con IA', next: 'result' },
        { label: 'WhatsApp + voz en un solo lugar', value: 'omnicanal', next: 'result' },
        { label: 'Grabación y transcripción', value: 'grabación y transcripción', next: 'result' },
        { label: 'Reportes y supervisión', value: 'reportes y supervisión', next: 'result' },
      ],
    },
  },
  // Texto de cierre por foco elegido.
  focoRecomendacion: {
    'agentes de voz con IA':
      'Con nuestra plataforma, varios agentes de IA contestan, resuelven lo repetitivo y pasan al humano solo lo necesario — ideal para bajar tu costo por contacto.',
    omnicanal:
      'Tus agentes atienden voz y WhatsApp desde una sola bandeja, con la conversación completa por cliente sin importar el canal.',
    'grabación y transcripción':
      'Cada llamada se graba y transcribe sola; la buscas por texto y aplicas tus políticas de retención.',
    'reportes y supervisión':
      'Tablero en vivo de ocupación, colas y resultados por agente y campaña, más reportes exportables.',
  },
  ctaWhatsapp: 'Hablar por WhatsApp',
  ctaForm: 'Dejar mis datos',
  restart: 'Empezar de nuevo',
};

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

// Redes sociales del footer. Deja la URL vacía ('') mientras no exista el
// canal — el ícono se muestra igual, pero sin enlace. Cuando crees la
// cuenta, pega aquí la URL completa (https://...) y queda enlazado solo.
export const SOCIAL = [
  { key: 'instagram', label: 'Instagram', url: '' },
  { key: 'x', label: 'X', url: '' },
  { key: 'facebook', label: 'Facebook', url: '' },
];
