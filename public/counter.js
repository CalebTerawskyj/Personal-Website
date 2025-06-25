document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-target]');
  const speed = 200;

  counters.forEach(counter => {
    const targetAttr = counter.getAttribute('data-target');
    const isInfinity = targetAttr === 'infinity';
    const target = isInfinity ? 999 : +targetAttr;

    const updateCount = () => {
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = isInfinity ? '∞' : target;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        updateCount();
        observer.disconnect();
      }
    }, { threshold: 0.6 });

    observer.observe(counter);
  });
});
