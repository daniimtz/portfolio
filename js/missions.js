const steps = document.querySelectorAll('.step');
const nextButtons = document.querySelectorAll('.next');

let currentStep = 0;

// Desbloquear pasos
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('hidden');
    currentStep++;

    if (steps[currentStep]) {
      steps[currentStep].classList.add('active');
      steps[currentStep].scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Abrir / cerrar tarjetas
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const content = card.closest('.content');

    // Cerrar las demás
    document.querySelectorAll('.content.open').forEach(opened => {
      if (opened !== content) opened.classList.remove('open');
    });

    content.classList.toggle('open');
  });
});
