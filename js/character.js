const characters = document.querySelectorAll('.character');
const chosenImg = document.getElementById('chosen-img');
const chosenDesc = document.getElementById('chosen-desc');
const chosenName = document.getElementById('chosen-name');
const chooseBtn = document.getElementById('choose-btn');

characters.forEach(character => {
  character.addEventListener('click', () => {

    // Quitar selección anterior
    characters.forEach(c => c.classList.remove('selected'));
    character.classList.add('selected');

    // Personaje bloqueado
    if (character.classList.contains('locked')) {
      chosenName.textContent = '???';
      chosenDesc.textContent = 'LOCKED';
      chosenImg.src = 'assets/images/locked_big.png';

      chooseBtn.textContent = 'NO DISPONIBLE';
      chooseBtn.disabled = true;
      chooseBtn.classList.remove('active');
      return;
    }

    // Mostrar datos del personaje
    chosenImg.src = character.dataset.large;
    chosenName.textContent = character.dataset.name;
    chosenDesc.textContent = character.dataset.desc;

    chooseBtn.textContent = 'ELEGIR PERSONAJE';
    chooseBtn.disabled = false;
    chooseBtn.classList.add('active');
  });
});

// Botón de continuar
chooseBtn.addEventListener('click', () => {
  if (chooseBtn.disabled) return;
  window.location.href = 'missions.html';
});
