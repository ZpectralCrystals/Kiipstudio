export type LandingImage = {
  localSrc?: string;
  cloudinaryPublicId?: string;
  imageUrl?: string;
  alt?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HomeLandingContent = {
  whatsappUrl: string;
  logo: LandingImage;
  nav: {
    main: NavItem[];
    nosotros: NavItem[];
    servicios: NavItem[];
  };
  heroBackground: LandingImage;
  headline: string;
  serviceCards: Array<{
    title: string;
    href: string;
    image: LandingImage;
  }>;
  about: {
    title: string;
    body: string[];
    person: LandingImage;
    camera: LandingImage;
  };
  studio: {
    eyebrow: string;
    highlight: string;
    suffix: string;
    buttonLabel: string;
    image: LandingImage;
  };
  why: {
    title: string;
    background: LandingImage;
    check: LandingImage;
    items: string[];
  };
  gallery: LandingImage[];
  process: {
    titlePrefix: string;
    titleSuffix: string;
    background: LandingImage;
    steps: Array<{
      title: string;
      body: string;
      icon: LandingImage;
    }>;
    paymentsTitle: string;
    paymentNotes: string[];
    paymentsIntro: string;
    payments: Array<{
      label: string;
      icon: LandingImage;
    }>;
  };
  footer: {
    email: string;
    phone: string;
    socials: Array<{
      label: string;
      href: string;
      text: string;
    }>;
    handles: Array<{
      icon: string;
      text: string;
      href?: string;
    }>;
  };
};
