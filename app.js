const questions = [
  {
    question: "Where did our story begin?",
    answer: "tinder",
    hint: "Think about how we met..."
  },
  {
    question: "What song is ours?",
    answer: "miss a thing",
    hint: "Aerosmith ❤️"
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    questions[current].question;
}

function submitAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();

  if (input.includes(questions[current].answer)) {
    current++;

    if (current >= questions.length) {
      window.location.href = "final.html";
    } else {
      loadQuestion();
      document.getElementById("answer").value = "";
      document.getElementById("hint").innerText = "You're getting closer ❤️";
    }
  } else {
    document.getElementById("hint").innerText =
      questions[current].hint;
  }
}

loadQuestion();
