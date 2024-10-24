const keys = document.querySelectorAll('.key');
console.log(keys);
function playSound(note) {
    const audio = new Audio(`sounds/${note}.wav`); 
    audio.play();
  }
  
// клик для каждой клавиши
keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.id.replace('key', ''); // получение букву ноты из ID
    playSound(note);
    
    key.classList.add('active'); // Добавление класса active
    setTimeout(() => key.classList.remove('active'), 200); // Удаление класса через 200 мс
  });
});
