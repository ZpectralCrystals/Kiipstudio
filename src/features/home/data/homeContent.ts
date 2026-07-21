export const homeContent = {
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Paquetes', href: '/bodas#bodas-paquetes' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  whatsappUrl: 'https://wa.me/51914187890',
  categories: [
    {
      title: 'Bodas',
      href: '/bodas',
      cloudinaryPublicId: '',
      localMobileSrc: '/assets/figma/bodas-mobile.webp',
      localDesktopSrc: '/assets/figma/bodas-desktop.webp',
    },
    {
      title: 'Cumpleaños',
      href: '/cumpleanos',
      cloudinaryPublicId: '',
      localMobileSrc: '/assets/figma/cumpleanos-mobile.webp',
      localDesktopSrc: '/assets/figma/cumpleanos-desktop.webp',
    },
    {
      title: 'Quinceañeros',
      href: '/quinceaneros',
      cloudinaryPublicId: '',
      localMobileSrc: '/assets/figma/quinceaneros-mobile.webp',
      localDesktopSrc: '/assets/figma/quinceaneros-desktop.webp',
    },
    {
      title: 'Fotos de estudio',
      href: '/fotos-estudio',
      cloudinaryPublicId: '',
      localMobileSrc: '/assets/figma/fotos-estudio-mobile.webp',
      localDesktopSrc: '/assets/figma/fotos-estudio-desktop.webp',
    },
    {
      title: 'Publicidad',
      href: '/publicidad',
      cloudinaryPublicId: '',
      localMobileSrc: '/assets/figma/publicidad-mobile.webp',
      localDesktopSrc: '/assets/figma/publicidad-desktop.webp',
    },
  ],
  about: {
    title: '¿Quiénes somos?',
    body: 'Somos un estudio creativo dedicado a capturar momentos, emociones e historias a través de imágenes y videos de alta calidad. Nos encargamos de la cobertura audiovisual de eventos y producción audiovisual en estudio manteniendo siempre nuestra postura creativa.',
    specialtiesTitle: 'Nos especializamos en:',
    specialties: [
      'Bodas',
      'Quinceaños',
      'Cumpleaños',
      'Babyshowers',
      'Fiestas de Promoción',
      'Publicidad',
      'Sesiones Fotográficas De Estudio',
    ],
  },
  cta: 'No esperes más y convierte tu evento en un momento mágico',
  footer: {
    email: 'klipstudio.pe@gmail.com',
    address: 'Francisco Mostajo D3-19',
    phone: '914 187 890',
  },
  services: [
    { label: 'Bodas', href: '/bodas' },
    { label: 'Quinceañeros', href: '/quinceaneros' },
    { label: 'Cumpleaños', href: '/cumpleanos' },
    { label: 'Fotos de estudio', href: '/fotos-estudio' },
    { label: 'Publicidad', href: '/publicidad' },
  ],
  video: {
    title: 'Video vertical',
    body: 'Los videos finales deben subirse a YouTube y embeberse desde ahí.',
    youtubeId: 'jNQXAC9IVRw',
  },
};

export type LandingImage = {
  localSrc: string;
  cloudinaryPublicId?: string;
  imageUrl?: string;
  alt: string;
};

export const homeLandingContent = {
  whatsappUrl: 'https://wa.me/51914187890',
  logo: {
    localSrc: '/assets/figma/home-v2/logo.png',
    alt: 'KlipStudio',
  },
  nav: {
    main: [
      { label: 'Inicio', href: '/' },
      { label: 'Nosotros', href: '/#nosotros' },
      { label: 'Servicios', href: '/#servicios' },
    ],
    nosotros: [
      { label: '¿Quiénes somos?', href: '/#nosotros' },
      { label: '¿Cómo trabajamos?', href: '/como-trabajamos' },
    ],
    servicios: [
      { label: 'Bodas', href: '/bodas' },
      { label: 'Quinceañeros', href: '/quinceaneros' },
      { label: 'Cumpleaños', href: '/cumpleanos' },
      { label: 'Sesiones de fotos', href: '/fotos-estudio' },
      { label: 'Publicidad', href: '/publicidad' },
    ],
  },
  heroBackground: {
    localSrc: '/assets/figma/home-v2/bg-top.png',
    alt: '',
  },
  headline: '¡Haz clic para ver más de nuestro trabajo!',
  serviceCards: [
    {
      title: 'Bodas',
      href: '/bodas',
      image: { localSrc: '/assets/figma/home-v2/card-bodas.jpg', alt: 'Boda fotografiada por KlipStudio' },
    },
    {
      title: 'Cumpleaños',
      href: '/cumpleanos',
      image: { localSrc: '/assets/figma/home-v2/card-cumpleanos.jpg', alt: 'Cumpleaños fotografiado por KlipStudio' },
    },
    {
      title: 'Quinceañeros',
      href: '/quinceaneros',
      image: { localSrc: '/assets/figma/home-v2/card-quinceaneros.jpg', alt: 'Quinceañero fotografiado por KlipStudio' },
    },
    {
      title: 'Sesiones de fotos',
      href: '/fotos-estudio',
      image: { localSrc: '/assets/figma/home-v2/card-sesiones.jpg', alt: 'Sesión de fotos en estudio KlipStudio' },
    },
    {
      title: 'Publicidad',
      href: '/publicidad',
      image: { localSrc: '/assets/figma/home-v2/card-publicidad.jpg', alt: 'Fotografía publicitaria KlipStudio' },
    },
  ],
  about: {
    title: '¿Quiénes somos?',
    body: [
      'Somos un estudio creativo especializado en fotografía y producción audiovisual. Más que registrar eventos, buscamos contar historias reales, capturando emociones, detalles y momentos espontáneos que hacen única cada experiencia.',
      'Nuestro compromiso es crear imágenes que, con el paso del tiempo, sigan transmitiendo las mismas emociones del primer día.',
    ],
    person: { localSrc: '/assets/figma/home-v2/about-person.png', alt: 'Fotógrafo de KlipStudio' },
    camera: { localSrc: '/assets/figma/home-v2/camera.png', alt: '' },
  },
  studio: {
    eyebrow: 'Descubre tu',
    highlight: 'estudio favorito',
    suffix: 'en Arequipa',
    buttonLabel: 'Contáctanos',
    image: { localSrc: '/assets/figma/home-v2/studio-band.png', alt: 'Sesión de estudio en KlipStudio Arequipa' },
  },
  why: {
    title: '¿Por qué elegirnos?',
    background: { localSrc: '/assets/figma/home-v2/why-bg.png', alt: 'Retrato profesional KlipStudio' },
    check: { localSrc: '/assets/figma/home-v2/check.png', alt: '' },
    items: [
      'Contamos con profesionales de la fotografía, video, publicidad y diseño gráfico',
      'Contamos con espacio propio, amplio y cómodo para hacer las sesiones de foto o video.',
      'Contamos con equipos de ultima generación para garantizar la calidad de nuestras fotos y videos',
      'Contamos con equipos de ultima generación para garantizar la calidad de nuestras fotos y videos',
    ],
  },
  gallery: [
    { localSrc: '/assets/figma/home-v2/gallery-left.jpg', alt: 'Retrato de estudio editorial' },
    { localSrc: '/assets/figma/home-v2/gallery-mid.jpg', alt: 'Retrato femenino sobre fondo verde' },
    { localSrc: '/assets/figma/home-v2/gallery-right.png', alt: 'Retrato corporativo en estudio' },
  ],
  process: {
    titlePrefix: '¿Cómo',
    titleSuffix: 'trabajamos?',
    background: { localSrc: '/assets/figma/how-we-work/studio-process.png', alt: 'Estudio de fotografía KlipStudio preparado para una sesión' },
    steps: [
      {
        title: 'Planificación Personalizada',
        body: 'Nos reunimos para conocer su historia, entender\nlo que más valoran y definir cada detalle de la\ncobertura. Nada se deja al azar.',
        icon: { localSrc: '/assets/figma/how-we-work/step-1.png', alt: 'Paso 1' },
      },
      {
        title: 'Cobertura Completa',
        body: 'Durante el evento, trabajamos cuidado para\ncapturar cada emoción, cada gesto y cada\ninstante especial, sin interrumpir el ritmo natural\nde la celebración.\n\nNo solo capturamos fotos clásicas. Nos\nconcentramos en los abrazos, las risas, los\ndetalles, las sorpresas... esos momentos reales\nque hacen único tu evento',
        icon: { localSrc: '/assets/figma/how-we-work/step-2.png', alt: 'Paso 2' },
      },
      {
        title: 'Entrega de Recuerdos Profesionales',
        body: 'Recibirás una galería digital con tus fotos\neditadas en alta calidad. También puedes elegir\nálbumes, cuadros u otros productos impresos\nsegún nuestros paquetes, para revivir el día\nsiempre que quieras.',
        icon: { localSrc: '/assets/figma/how-we-work/step-3.png', alt: 'Paso 3' },
      },
      {
        title: 'Adaptación a Tu Tipo de Evento',
        body: 'Cada celebración es diferente, por eso los\npaquetes y el enfoque se ajustan a lo que tú\nnecesitas. Desde eventos íntimos hasta grandes\nfiestas, capturamos lo que realmente importa.',
        icon: { localSrc: '/assets/figma/how-we-work/step-4.png', alt: 'Paso 4' },
      },
    ],
    paymentsTitle: 'Formas de pago',
    paymentNotes: [
      'Para separar la fecha se requiere el 50% de adelanto. La fecha será\noficialmente confirmada luego de la fecha de ese pago.',
      'El saldo restante puede ser abonado hasta un día después del evento.',
      'El tiempo de entrega del material será 02 semanas después de haber\nrealizado el pago completo.',
    ],
    paymentsIntro: 'Aceptamos las siguientes formas de pago:',
    payments: [
      { label: 'Efectivo al contado', icon: { localSrc: '/assets/figma/how-we-work/step-1.png', alt: 'Forma de pago 1' } },
      { label: 'Transferencia bancaria', icon: { localSrc: '/assets/figma/how-we-work/step-2.png', alt: 'Forma de pago 2' } },
      { label: 'Yape', icon: { localSrc: '/assets/figma/how-we-work/step-3.png', alt: 'Forma de pago 3' } },
    ],
  },
  footer: {
    email: 'klipstudio.pe@gmail.com',
    phone: '914 187 890',
    socials: [
      { label: 'Facebook', href: '#', text: 'f' },
      { label: 'TikTok', href: '#', text: '♪' },
      { label: 'Instagram', href: '#', text: '◎' },
      { label: 'WhatsApp', href: 'https://wa.me/51914187890', text: '☏' },
    ],
    handles: [
      { icon: 'f', text: '@klipstudiocreativo' },
      { icon: '♪', text: '@klipstudiocreativo' },
      { icon: '◎', text: '@klipstudiocreativo' },
    ],
  },
};

export type HomeLandingContent = typeof homeLandingContent;
