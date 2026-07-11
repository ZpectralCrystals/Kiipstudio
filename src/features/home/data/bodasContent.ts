export const bodasContent = {
  title: 'Bodas',
  hero: {
    localMobileSrc: '/assets/figma/bodas-section/hero-mobile.webp',
    localDesktopSrc: '/assets/figma/bodas-section/hero-desktop.webp',
  },
  tabs: ['Fotos', 'Videos'],
  gallery: Array.from({ length: 24 }, (_, index) => {
    const fileNumber = (index % 8) + 1;
    return {
      alt: `Boda KlipStudio ${index + 1}`,
      localMobileSrc: `/assets/figma/bodas-section/gallery-${fileNumber}-mobile.webp`,
      localDesktopSrc: `/assets/figma/bodas-section/gallery-${fileNumber}-desktop.webp`,
    };
  }),
  video: {
    title: 'Video de boda KlipStudio',
    youtubeId: 'jNQXAC9IVRw',
    localMobileSrc: '/assets/figma/bodas-section/feature-mobile.webp',
    localDesktopSrc: '/assets/figma/bodas-section/feature-desktop.webp',
    playIconSrc: '/assets/figma/bodas-section/play.webp',
  },
  packages: {
    eyebrow: 'Sesión de fotos y videos',
    title: 'Paquetes',
    plans: [
      {
        name: 'Esencial',
        price: 'S/.1,500',
        featured: false,
        bullets: [
          'Recibes 400 fotos en archivo digital.',
          'Video resumen de 01 hora y 30 minutos.',
          'Video a 01 cámara.',
          'Fotografía a 01 cámara.',
        ],
      },
      {
        name: 'Completo',
        price: 'S/.3,000',
        featured: true,
        bullets: [
          'Recibes 700 fotos en archivo digital.',
          'Video resumen de 01 hora y 30 minutos.',
          'Tráiler estilo película de 3 min en formato horizontal.',
          'Video a 02 cámaras.',
          'Fotografía a 02 cámaras.',
        ],
      },
      {
        name: 'Premium',
        price: 'S/.5,000',
        featured: false,
        bullets: [
          'Recibes 900 fotos en archivo digital.',
          'Video resumen de 01 hora y 30 minutos.',
          'Tráiler estilo película de 03 min en formato horizontal.',
          'Video a 03 cámaras.',
          'Fotografía a 02 cámaras.',
          'Sesión de pre-boda.',
          'Photobook impreso 20x30 cm y USB de 64 GB en caja de madera.',
        ],
      },
    ],
  },
};
