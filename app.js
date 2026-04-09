const questions = [ { question: "Where did our story begin?", answer: "reddit", hint: "Think back to that very first place we connected online..." }, { question: "What song is ours?", answer: "miss a thing", hint: "Aerosmith ❤️" } ];

let current = 0;

function loadQuestion() { const questionElement = document.getElementById("question"); const inputElement = document.getElementById("answer"); const hintElement = document.getElementById("hint");

if (questionElement && inputElement && hintElement) { questionElement.innerText = questions[current].question; inputElement.value = ""; hintElement.innerText = ""; } }

function submitAnswer() { const inputElement = document.getElementById("answer"); const hintElement = document.getElementById("hint"); if (!inputElement || !hintElement) return;

const input = inputElement.value.toLowerCase().trim();

if (input.includes(questions[current].answer)) { current++; if (current >= questions.length) { window.location.href = "final.html"; } else { loadQuestion(); hintElement.innerText = "You're getting closer ❤️"; } } else { hintElement.innerText = questions[current].hint; } }

// Load the first question when the page loads window.onload = loadQuestion;
