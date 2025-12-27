const steps = document.querySelectorAll('.step');
const arrows = document.querySelectorAll('.next');

let current = 0;

/* UNLOCK CON NEXT */
arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.classList.add('hidden');
    current++;

    if (steps[current]) {
      steps[current].classList.add('active');
      steps[current].scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* CLICK EN TARJETA */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const content = card.closest('.content');

    // cerrar otros
    document.querySelectorAll('.content.open').forEach(c => {
      if (c !== content) c.classList.remove('open');
    });

    content.classList.toggle('open');
  });
});
