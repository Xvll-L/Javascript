// call all buttion

const answerButtons = document.querySelectorAll('button[id^=but]')
const submitButton = document.querySelector('.btns')
const display = document.querySelector('h1')

let selectedAnswer;

answerButtons.forEach(btn => btn.addEventListener('click', () => selectedAnswer = btn.textContent))

submitButton.addEventListener('click', () => display.textContent = selectedAnswer)




















