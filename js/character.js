
  const characters = document.querySelectorAll('.character');
  const chosenImg = document.getElementById('chosen-img');
  const chosenDesc = document.getElementById('chosen-desc');
  const chosenName = document.getElementById('chosen-name');
  const chooseBtn = document.getElementById('choose-btn');


  characters.forEach(char => {
    char.addEventListener('click', () => {

            // Quitar selección previa
      characters.forEach(c => c.classList.remove('selected'));
      char.classList.add('selected');
      
      // LOCKED
      if (char.classList.contains('locked')) {
        chosenName.textContent = '???';
        chosenDesc.textContent = 'LOCKED';
        chooseBtn.textContent = 'NO DISPONIBLE';
        chooseBtn.disabled = true;
        chooseBtn.classList.remove('active')
        chosenImg.src = 'assets/images/locked_big.png';
        return;
      }


      // Mostrar imagen grande
      chosenImg.src = char.dataset.large;

      // Mostrar descripción
      chosenName.textContent = char.dataset.name;
      chosenDesc.textContent = char.dataset.desc;
      chooseBtn.textContent = 'ELEGIR PERSONAJE';
      chooseBtn.disabled = false;
      chooseBtn.classList.add('active');

      chooseBtn.addEventListener('click', () => {
        if (chooseBtn.disbled) return;

        window.location.href= 'missions.html';
      });
    });
  });
