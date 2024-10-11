let rollCount = 0; // Переменная для счетчика бросков

document.getElementById('rollButton').addEventListener('click', function() {  // Генерация случайных чисел для кубиков
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Обновление изображений кубиков
    document.getElementById('dice1').src = 'images/dice' + randomNumber1 + '.png';
    document.getElementById('dice2').src = 'images/dice' + randomNumber2 + '.png';
    // Сумма кубиков
    var sum = randomNumber1 + randomNumber2;  
    document.getElementById('sumDisplay').textContent = 'Sum: ' + sum;
    // Увеличивание счётчик 
    rollCount++; 
    document.getElementById('rollCount').textContent = 'Clicks: ' + rollCount;
    // Условие выигрыша: 
    if (randomNumber1 === randomNumber2) {
        document.getElementById('winningMessage').textContent = 'Congratulations! You won!';
    } else {
        document.getElementById('winningMessage').textContent = ''; // Убираем сообщение, если не выиграли
    }
});
