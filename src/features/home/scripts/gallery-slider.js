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
