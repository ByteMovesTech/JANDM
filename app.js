console.log("APP JS IS LOADED");
const questions = [
  {
    question: "Where did our story first begin?",
    answers: ["reddit", "online"],
    hint: "Boo Chiefs. Go Steelers! 💛🖤 ",
    memory: "I am so thankful that you found me. I was absolutely smitten from the very beginning. That is where everything started…"
  },
  {
    question: "There are many many songs that remind me of you. However there is one in particular that has a very warm spot in my heart. What song will always remind me of you?",
    answers: [
      "i dont want to miss a thing",
      "dont want to miss a thing",
      "aerosmith",
      "miss a thing"
    ],
    hint: "Aerosmith… think of the song I associate with you ❤️",
    memory: "Every time I hear this, I think of you. When we started building our playlist, it was one you added. That makes it even more special to me."
  },
  {
    question: "There is something that I really want to get for you, give you. Do you know what it is?",
    answers: ["edible eddie", "eddie", "printer"],
    hint: "Think about your cookies...",
    memory: "There are so many things that I would love to do for you. This is just one of the many."
  },
  {
    question: "What is something I always call you?",
    answers: ["beautiful", "my love", "baby", "babe", "love", "jac"],
    hint: "The many cute names I have for you ❤️",
    memory: "Because I absolutely cherish you."
  },
  {
    question: "We have discussed taking a vacation together. There are many options and I want to do every single one. What is one of the vacation ideas we have?",
    answers: ["mexico", "australia", "cruise", "anywhere"],
    hint: "The destination doesn’t matter as long as I’m with you ❤️",
    memory: "I will go anywhere with you. Wherever you are, is where I want to be."
  },
  {
    question: "We love playing games together. One of our newer games is cryptic crosswords. Here is your clue: A dance mixed up in a country (6)?",
    answers: ["canada"],
    hint: "🎶 Oh... 🎶",
    memory: "These puzzles are so much fun. I love working on them as a team and figuring them out. You are so smart."
  }
];

let current = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const inputElement = document.getElementById("answer");
  const hintElement = document.getElementById("hint");

  if (!questionElement || !inputElement || !hintElement) return;

  questionElement.innerText =
    `Question ${current + 1} of ${questions.length}\n\n${questions[current].question}`;

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
      if (questions[current].memory) {
        hintElement.innerText = questions[current].memory;
      }

      setTimeout(() => {
        current++;

        if (current >= questions.length) {
          window.location.href = "final.html";
        } else {
          loadQuestion();
        }
      }, 900);

    }, 600);

  } else {
    hintElement.innerText = questions[current].hint;
  }
}

window.addEventListener("DOMContentLoaded", loadQuestion);
