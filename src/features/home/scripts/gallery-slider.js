document.querySelectorAll('[data-gallery-slider]').forEach((root) => {
  const track = root.querySelector('[data-gallery-track]');
  const prev = root.querySelector('[data-gallery-prev]');
  const next = root.querySelector('[data-gallery-next]');
  const externalPagination = root.nextElementSibling?.matches('[data-gallery-pagination]') ? root.nextElementSibling : null;
  const dots = [...root.querySelectorAll('[data-gallery-dot]'), ...(externalPagination ? [...externalPagination.querySelectorAll('[data-gallery-dot]')] : [])];
  const pages = [...root.querySelectorAll('[data-gallery-page]')];
  let index = 0;
  let scrollFrame = 0;

  if (!track) return;

  const getMaxIndex = () => Math.max(0, pages.length - 1);

  const getNearestIndex = () => {
    const maxIndex = getMaxIndex();
    return pages.reduce((nearestIndex, page, pageIndex) => {
      if (pageIndex > maxIndex) return nearestIndex;
      const nearestPage = pages[nearestIndex];
      return Math.abs(page.offsetLeft - track.scrollLeft) < Math.abs(nearestPage.offsetLeft - track.scrollLeft) ? pageIndex : nearestIndex;
    }, 0);
  };

  const stopInactiveMedia = () => {
    pages.forEach((page, pageIndex) => {
      if (pageIndex === index) return;
      page.querySelectorAll('iframe[srcdoc]').forEach((iframe) => {
        const srcdoc = iframe.getAttribute('srcdoc');
        if (srcdoc) iframe.srcdoc = srcdoc;
      });
    });
  };

  const paintDots = () => {
    dots.forEach((dot, dotIndex) => {
      const indicator = dot.querySelector('[data-gallery-dot-indicator]') || dot;
      const isActive = dotIndex === index;
      indicator.classList.toggle('bg-[#ff0004]', isActive);
      indicator.classList.toggle('bg-[#d9d9d9]', !isActive);
      if (isActive) {
        dot.setAttribute('aria-current', 'page');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  };

  const goTo = (nextIndex) => {
    if (!track) return;
    const maxIndex = getMaxIndex();
    if (nextIndex < 0) {
      index = maxIndex;
    } else if (nextIndex > maxIndex) {
      index = 0;
    } else {
      index = nextIndex;
    }
    track.scrollTo({ left: pages[index]?.offsetLeft || 0, behavior: 'smooth' });
    stopInactiveMedia();
    paintDots();
  };

  prev?.addEventListener('click', () => {
    goTo(index - 1);
  });

  next?.addEventListener('click', () => {
    goTo(index + 1);
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => goTo(dotIndex));
  });

  track.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      const nextIndex = getNearestIndex();
      if (nextIndex !== index) {
        index = nextIndex;
        stopInactiveMedia();
        paintDots();
      }
    });
  });

  window.addEventListener('resize', () => {
    track.scrollTo({ left: pages[index]?.offsetLeft || 0, behavior: 'auto' });
    paintDots();
  });

  paintDots();
});

const lightboxTriggers = [...document.querySelectorAll('[data-lightbox-image]')];

if (lightboxTriggers.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'photo-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Foto ampliada');
  lightbox.innerHTML = `
    <button class="photo-lightbox__button photo-lightbox__close" type="button" aria-label="Cerrar">×</button>
    <button class="photo-lightbox__button photo-lightbox__prev" type="button" aria-label="Foto anterior">‹</button>
    <img class="photo-lightbox__image" alt="" />
    <button class="photo-lightbox__button photo-lightbox__next" type="button" aria-label="Foto siguiente">›</button>
  `;
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector('.photo-lightbox__image');
  const close = lightbox.querySelector('.photo-lightbox__close');
  const prev = lightbox.querySelector('.photo-lightbox__prev');
  const next = lightbox.querySelector('.photo-lightbox__next');
  let activeIndex = 0;

  const open = (index) => {
    activeIndex = index;
    const trigger = lightboxTriggers[activeIndex];
    image.src = trigger.dataset.lightboxImage || '';
    image.alt = trigger.dataset.lightboxAlt || '';
    lightbox.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    close.focus();
  };

  const hide = () => {
    lightbox.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    image.removeAttribute('src');
    lightboxTriggers[activeIndex]?.focus();
  };

  const move = (step) => {
    activeIndex = (activeIndex + step + lightboxTriggers.length) % lightboxTriggers.length;
    const trigger = lightboxTriggers[activeIndex];
    image.src = trigger.dataset.lightboxImage || '';
    image.alt = trigger.dataset.lightboxAlt || '';
  };

  lightboxTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => open(index));
  });

  close.addEventListener('click', hide);
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) hide();
  });

  window.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') hide();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
}
