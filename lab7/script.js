// Файл JSON (предполагаем, что он находится в текущей директории как all.json)
const heroesURL = './all.json';

// Элементы DOM
const heroAvatar = document.getElementById('hero-avatar');
const heroName = document.getElementById('hero-name');
const heroDescription = document.getElementById('hero-description');
const randomizeBtn = document.getElementById('randomize-btn');

// Функция для загрузки данных из JSON
async function loadHeroes() {
    try {
        const response = await fetch(heroesURL);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных!');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        heroName.textContent = 'Не удалось загрузить данные!';
        return [];
    }
}

// Функция для выбора случайного героя
function getRandomHero(heroes) {
    const randomIndex = Math.floor(Math.random() * heroes.length);
    return heroes[randomIndex];
}

// Функция для отображения данных героя
function displayHero(hero) {
    heroAvatar.src = hero.images.lg || '';
    heroAvatar.alt = hero.name || 'Unknown Hero';
    heroName.textContent = hero.name || 'Unknown Hero';
    heroDescription.textContent = hero.biography.fullName
        ? `Full Name: ${hero.biography.fullName}`
        : 'No description available.';
}

// Обработка кнопки
randomizeBtn.addEventListener('click', async () => {
    const heroes = await loadHeroes();
    if (heroes.length > 0) {
        const randomHero = getRandomHero(heroes);
        displayHero(randomHero);
    }
});
