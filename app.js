const questions = [
  {
    question: "Where did our story begin?",
    answers: ["reddit"],
    hint: "Think back to that very first place we connected online..."
  },
  {
    question: "What song is ours?",
    answers: ["miss a thing", "i dont want to miss a thing", "aerosmith"],
    hint: "Aerosmith ❤️"
  }
];

let current = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const inputElement = document.getElementById("answer");
  const hintElement = document.getElementById("hint");

  if (!questionElement || !inputElement || !hintElement) return;

  questionElement.innerText = `Question ${current + 1} of ${questions.length}\n\n${questions[current].question}`;
  inputElement.value = "";
  hintElement.innerText = "";
}

function submitAnswer() {
  const inputElement = document.getElementById("answer");
  const hintElement = document.getElementById("hint");

  if (!inputElement || !hintElement) return;

  const input = inputElement.value.toLowerCase().trim();

  const validAnswers = questions[current].answers;

  const isCorrect = validAnswers.some(ans =>
    input.includes(ans.toLowerCase())
  );

  if (isCorrect) {
    hintElement.innerText = "Correct ❤️";

    setTimeout(() => {
      current++;

      if (current >= questions.length) {
        window.location.href = "final.html";
      } else {
        loadQuestion();
      }
    }, 800);
  } else {
    hintElement.innerText = questions[current].hint;
  }
}

window.addEventListener("DOMContentLoaded", loadQuestion);
