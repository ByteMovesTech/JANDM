const questions = [
  {
    question: "Where did our story first begin?",
    answers: ["reddit", "Reddit", "online"],
    hint: "It was something unexpected ❤️",
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
    question: "What year did we become 'us'?",
    answers: ["2024", "2025", "two years ago"],
    hint: "Think back to when everything changed for us...",
    memory: "That was the year everything shifted."
  },
  {
    question: "What is something I always say to you?",
    answers: ["beautiful", "my love", "love you", "babe", "jaclyn"],
    hint: "It’s usually something simple… but always true ❤️",
    memory: "Because you are all of those things to me."
  },
  {
    question: "What are we celebrating today?",
    answers: ["anniversary", "2 years", "two years", "our anniversary"],
    hint: "A milestone of us ❤️",
    memory: "And I wouldn’t trade these two years for anything."
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
