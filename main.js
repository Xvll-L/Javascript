// call all buttion
const div_button = document.querySelectorAll(".btn");

const button1 = document.getElementById("but1")
const button2 = document.getElementById("but2")

const submit = document.querySelector(".btns")
let a = document.querySelector("H1")

function test() {
    console.log(button1);
   
    
    a.innerHTML = a;

    
}
button1.addEventListener("click", submit_test, false)
button2.addEventListener("click", submit_test, false)

submit.addEventListener("click", submit_test);

const answerButtons = document.querySelectorAll('button[id^=but]')
const submitButton = document.querySelector('.btns')
const display = document.querySelector('h1')

let selectedAnswer;

answerButtons.forEach(btn => btn.addEventListener('click', () => selectedAnswer = btn.textContent))

submitButton.addEventListener('click', () => display.textContent = selectedAnswer)




















