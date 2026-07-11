export type GalleryItem = {
  alt: string;
  localMobileSrc?: string;
  localDesktopSrc?: string;
  placeholder?: boolean;
};

export type ServiceSection = {
  id: string;
  title: string;
  slug: string;
  hero: {
    localMobileSrc: string;
    localDesktopSrc: string;
  };
  gallery: GalleryItem[];
  video: {
    title: string;
    localMobileSrc: string;
    localDesktopSrc: string;
    youtubeId: string;
  };
  packages: {
    name: string;
    price: string;
    featured: boolean;
    bullets: string[];
  }[];
};

const makeGallery = (base: string, availableCount: number, targetCount = 24): GalleryItem[] =>
  Array.from({ length: targetCount }, (_, index) => {
    const fileNumber = (index % availableCount) + 1;
    return {
      alt: `${base} ${index + 1}`,
      localMobileSrc: `/assets/stitch/${base}/gallery-${fileNumber}-mobile.webp`,
      localDesktopSrc: `/assets/stitch/${base}/gallery-${fileNumber}-desktop.webp`,
    };
  });

export const serviceSections: ServiceSection[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños',
    slug: 'cumpleanos',
    hero: {
      localMobileSrc: '/assets/stitch/cumpleanos/hero-mobile.webp',
      localDesktopSrc: '/assets/stitch/cumpleanos/hero-desktop.webp',
    },
    gallery: makeGallery('cumpleanos', 8),
    video: {
      title: 'Video cumpleaños KlipStudio',
      localMobileSrc: '/assets/stitch/cumpleanos/video-mobile.webp',
      localDesktopSrc: '/assets/stitch/cumpleanos/video-desktop.webp',
      youtubeId: 'jNQXAC9IVRw',
    },
    packages: [
      {
        name: 'Esencial',
        price: 'S/.650.00',
        featured: false,
        bullets: ['Recibe 50 fotos en archivo digital.', 'Video resumen de 45 minutos.', 'Video a 01 cámara.'],
      },
      {
        name: 'Completo',
        price: 'S/.1,000',
        featured: true,
        bullets: [
          'Recibe 100 fotos en archivo digital.',
          'Video resumen de 45 minutos.',
          'Video resumen de 3 minutos para redes sociales.',
          'Video a 02 cámaras.',
        ],
      },
    ],
  },
  {
    id: 'quinceaneros',
    title: 'Quinceañeros',
    slug: 'quinceaneros',
    hero: {
      localMobileSrc: '/assets/stitch/quinceaneros/hero-mobile.webp',
      localDesktopSrc: '/assets/stitch/quinceaneros/hero-desktop.webp',
    },
    gallery: makeGallery('quinceaneros', 8),
    video: {
      title: 'Video quinceañeros KlipStudio',
      localMobileSrc: '/assets/stitch/quinceaneros/video-mobile.webp',
      localDesktopSrc: '/assets/stitch/quinceaneros/video-desktop.webp',
      youtubeId: 'jNQXAC9IVRw',
    },
    packages: [
      {
        name: 'Esencial',
        price: 'S/.1,500.00',
        featured: false,
        bullets: ['Recibes 100 fotos en archivo digital.', 'Video resumen de 45 minutos.', 'Video a 01 cámara.'],
      },
      {
        name: 'Completo',
        price: 'S/.2,000',
        featured: true,
        bullets: [
          'Recibes 200 fotos en archivo digital.',
          'Video resumen de 45 minutos.',
          'Video resumen de 3 minutos para redes sociales.',
          'Video a 02 cámaras.',
          'Sesión de foto y video de pre-quince.',
        ],
      },
    ],
  },
  {
    id: 'fotos-estudio',
    title: 'Sesión de estudio',
    slug: 'estudio',
    hero: {
      localMobileSrc: '/assets/stitch/estudio/hero-mobile.webp',
      localDesktopSrc: '/assets/stitch/estudio/hero-desktop.webp',
    },
    gallery: makeGallery('estudio', 5),
    video: {
      title: 'Video sesión de estudio KlipStudio',
      localMobileSrc: '/assets/stitch/estudio/video-mobile.webp',
      localDesktopSrc: '/assets/stitch/estudio/video-desktop.webp',
      youtubeId: 'jNQXAC9IVRw',
    },
    packages: [
      {
        name: 'Esencial',
        price: 'S/.650.00',
        featured: false,
        bullets: ['Recibe 50 fotos en archivo digital.', 'Video resumen de 45 minutos.', 'Video a 01 cámara.'],
      },
      {
        name: 'Completo',
        price: 'S/.1,000',
        featured: true,
        bullets: [
          'Recibe 100 fotos en archivo digital.',
          'Video resumen de 45 minutos.',
          'Video resumen de 3 minutos para redes sociales.',
          'Video a 02 cámaras.',
        ],
      },
    ],
  },
  {
    id: 'publicidad',
    title: 'Publicidad',
    slug: 'publicidad',
    hero: {
      localMobileSrc: '/assets/stitch/cumpleanos/hero-mobile.webp',
      localDesktopSrc: '/assets/stitch/cumpleanos/hero-desktop.webp',
    },
    gallery: makeGallery('cumpleanos', 8),
    video: {
      title: 'Video publicidad KlipStudio',
      localMobileSrc: '/assets/stitch/cumpleanos/video-mobile.webp',
      localDesktopSrc: '/assets/stitch/cumpleanos/video-desktop.webp',
      youtubeId: 'jNQXAC9IVRw',
    },
    packages: [
      {
        name: 'Esencial',
        price: 'S/.650.00',
        featured: false,
        bullets: ['Recibe 50 fotos en archivo digital.', 'Video resumen de 45 minutos.', 'Video a 01 cámara.'],
      },
      {
        name: 'Completo',
        price: 'S/.1,000',
        featured: true,
        bullets: [
          'Recibe 100 fotos en archivo digital.',
          'Video resumen de 45 minutos.',
          'Video resumen de 3 minutos para redes sociales.',
          'Video a 02 cámaras.',
        ],
      },
    ],
  },
];
