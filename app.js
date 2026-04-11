console.log("app.js loaded");

const questions = [
  {
    question: "Where did our story first begin?",
    answers: ["reddit", "online"],
    hint: "Boo Chiefs. Go Steelers! 💛🖤",
    memory: "I am so thankful that you found me. That is where everything started…"
  },
  {
    question: "What song will always remind me of you?",
    answers: [
      "i dont want to miss a thing",
      "dont want to miss a thing",
      "aerosmith",
      "miss a thing"
    ],
    hint: "Aerosmith ❤️",
    memory: "Every time I hear this, I think of you."
  },
  {
    question: "What is something I want to get for you?",
    answers: ["edible eddie", "eddie"],
    hint: "Think cookies...",
    memory: "There are so many things I want to do for you."
  },
  {
    question: "What is something I always call you?",
    answers: ["beautiful", "my love", "baby", "babe", "love"],
    hint: "Cute names ❤️",
    memory: "Because I absolutely cherish you."
  },
  {
    question: "One vacation idea we have?",
    answers: ["mexico", "australia", "cruise", "anywhere"],
    hint: "Anywhere with you ❤️",
    memory: "I will go anywhere with you."
  },
  {
    question: "Cryptic clue: A dance mixed up in a country (6)?",
    answers: ["canada"],
    hint: "🎶 Oh...",
    memory: "You are so smart."
  }
];

let current = 0;

function loadQuestion() {
  const q = document.getElementById("question");
  const a = document.getElementById("answer");
  const h = document.getElementById("hint");

  if (!q || !a || !h) {
    console.log("Missing elements");
    return;
  }

  q.innerText =
    `Question ${current + 1} of ${questions.length}\n\n${questions[current].question}`;

  a.value = "";
  a.disabled = false;
  h.innerText = "";
}

function submitAnswer() {
  const a = document.getElementById("answer");
  const h = document.getElementById("hint");

  const input = a.value.toLowerCase().trim();

  const correct = questions[current].answers.some(ans =>
    input.includes(ans.toLowerCase())
  );

  if (!correct) {
    h.innerText = questions[current].hint;
    return;
  }

  a.disabled = true;

  h.innerText = "Correct ❤️";

  setTimeout(() => {
    h.innerText = questions[current].memory;

    const btn = document.createElement("button");
    btn.innerText = "Continue →";

    btn.onclick = () => {
      current++;

      if (current >= questions.length) {
        window.location.href = "final.html";
      } else {
        loadQuestion();
      }
    };

    h.appendChild(document.createElement("br"));
    h.appendChild(btn);

  }, 500);
}

window.addEventListener("DOMContentLoaded", loadQuestion);
