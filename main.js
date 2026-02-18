document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.lotto-numbers');
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    const generateUniqueNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        numbersContainer.innerHTML = ''; // Clear previous numbers
        numbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('number-ball', `color-${(index % 6) + 1}`);
            ball.textContent = number;
            ball.style.animationDelay = `${index * 0.1}s`;
            numbersContainer.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateUniqueNumbers();
        displayNumbers(lottoNumbers);
    });

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('light-mode');
    });

    // Initial generation
    const initialNumbers = generateUniqueNumbers();
    displayNumbers(initialNumbers);
});
