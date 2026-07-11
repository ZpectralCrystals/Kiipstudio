document.querySelectorAll('[data-gallery-slider]').forEach((root) => {
  const track = root.querySelector('[data-gallery-track]');
  const prev = root.querySelector('[data-gallery-prev]');
  const next = root.querySelector('[data-gallery-next]');
  const dots = [...root.querySelectorAll('[data-gallery-dot]')];
  let index = 0;

  if (!track) return;

  const getMaxIndex = () => Math.max(0, track.querySelectorAll('[data-gallery-page]').length - 1);

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
    index = Math.max(0, Math.min(getMaxIndex(), nextIndex));
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
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

  track?.addEventListener('scroll', () => {
    index = Math.round(track.scrollLeft / track.clientWidth);
    paintDots();
  });
});
