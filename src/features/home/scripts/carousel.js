document.querySelectorAll('[data-carousel]').forEach((root) => {
  const track = root.querySelector('.carousel-track');
  const slides = [...root.querySelectorAll('.carousel-slide')];
  const prev = root.querySelector('.carousel-prev');
  const next = root.querySelector('.carousel-next');
  let index = 0;

  // Measure visible slides from real layout so CSS breakpoints and JS stay in sync.
  const getVisibleCount = () => Math.max(1, Math.round(root.offsetWidth / slides[0].offsetWidth));
  const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

  const update = () => {
    index = Math.min(index, getMaxIndex());
    track.style.transform = `translateX(-${slides[index].offsetLeft}px)`;
  };

  prev?.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    update();
  });

  next?.addEventListener('click', () => {
    index = Math.min(getMaxIndex(), index + 1);
    update();
  });

  window.addEventListener('resize', update);
  update();
});
