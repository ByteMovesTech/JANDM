const questions = [
  {
    question: "Where did our story first begin?",
    answers: ["reddit", "Reddit", "online"],
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
    memory: "Every time I hear this, I think of you. When we kinda started to put together a playlist, it was a song you added. That makes it even more special for me. The lyrics also hit hard how I feel about you. I hate saying goodnight."      
      

  },
  {
    question: "There is something that inreally want to get for you, give you. Do you know what it is??",
    answers: ["edible eddie", "Eddie", "printer"],
    hint: "Think about your cookies...",
    memory: "There are so many things that I would love to do for you. This is just one of the many. "
  },
  {
    question: "What is something I always call you?",
    answers: ["beautiful", "my love", "baby", "babe", "jac", "love"],
    hint: "The many cute names I havve for you. ❤️",
    memory: "Because I absolutely cherish you."
  },
  {
    question: "We have discussed talking a vacation together. There are many many options and inwant to do every single one. What is one of the vacation ideas we have?",
    answers: ["mexico", "Australia", "cruise", "anywhere"],
    hint: "The destination is not important as being able to be with you! ❤️",
    memory: "I will go anywhere with you. Wherever you are, is where I want to be."
  },
  {
    question: "We love playing games together. The best part of playing these games is the time we spend together. That time is so precious to me. I love every moment I get to spend with you. I love you, Jaclyn. One of the newer games we have been playing is the cryptic crosswords. Inhave created a clue for you. I am confident you will totally nail it and get the answer. Here is the clue: A dance mixed up in a country (6)?",
    answers: ["Canada", "canada"],
    hint: "🎶 Oh... 🎶",
    memory: "These puzzles are so much fun. I love working on them as a team and figuring them out. You are ao smart."
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
  const questionElement = document.getElementById("question");

  if (!inputElement || !hintElement || !questionElement) return;

  const input = inputElement.value.toLowerCase().trim();

  const validAnswers = questions[current].answers;

  const isCorrect = validAnswers.some(ans =>
    input.includes(ans.toLowerCase())
  );

  if (isCorrect) {
    hintElement.innerText = "Correct ❤️";

    setTimeout(() => {
      // Show memory moment briefly before moving on
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
