//To store username and number of questions to local storage.
function storeUserInfo() {
  let userName = document.getElementById("firstName").value;
  let numberOfQuestions = document.getElementById("number").value;

  localStorage.setItem("name", userName);
  localStorage.setItem("numOfQuestions", numberOfQuestions);
  window.location.href = "study.html";
}

let questionsAndAnswers = [
  { question: "Which continent is India part of?", answer: "Asia" },
  { question: "Which is the largest continent in area?", answer: "Asia" },
  { question: "Which is the smallest continent in area?", answer: "Australia" },
  {
    question: "Which continent is also called as an 'Island-Continent'?",
    answer: "Australia",
  },
  {
    question:
      "The largest mountain in the world, Mount Everest is situated in which continent?",
    answer: "Asia",
  },
  {
    question: "On Which Continent Is Egypt?",
    answer: "Africa",
  },
  {
    question: "On which continent can you find France?",
    answer: "Europe",
  },
  {
    question: "Which is the Second biggest continent of the world?",
    answer: "Africa",
  },
  {
    question: "Columbus found which continent?",
    answer: "North America",
  },
  {
    question: "Where is Amazon River?",
    answer: "South America",
  },
];

let pickedQuestions = [];

//function to pick n random questions index values.

const pickRandomQuestions = () => {
  for (i = 0; i < localStorage.getItem("numOfQuestions"); ) {
    const random = Math.floor(Math.random() * 10);
    if (pickedQuestions.includes(random)) {
      continue;
    } else {
      pickedQuestions.push(random);
      i++;
    }
  }
};

let currentQuestionIndex = 0;

const updateQuestion = () => {
  const questionElement = document.getElementById("question");
  questionElement.textContent =
    questionsAndAnswers[pickedQuestions[currentQuestionIndex]].question;
  document
    .querySelector(".card-text")
    .setAttribute("style", "visibility: hidden");

  let nextButton = document.getElementById("next-button");
  nextButton.setAttribute("onclick", "");
  nextButton.setAttribute("style", "opacity: 0.5; cursor: not-allowed;");
  updateQuestionCounter();

  //   document.querySelector('map[name="image-map"]').innerHTML = "";
};

const nextQuestion = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < pickedQuestions.length) {
    updateQuestion();
  } else {
    alert("Congratulations! You have completed all questions.");
  }
};

// updateQuestion();

const enterGame = () => {
  pickRandomQuestions();
  console.log(pickedQuestions);
  updateQuestion();
};

let score = 0;

const checkAnswer = (areaName) => {
  document
    .querySelector(".card-text")
    .setAttribute("style", "visibility: visible");
  if (
    areaName ===
    questionsAndAnswers[pickedQuestions[currentQuestionIndex]].answer
  ) {
    score++;
    localStorage.setItem("score", score);
    document.querySelector(".card-text strong").textContent =
      "Correct answer!!";
    document
      .querySelector(".card-text strong")
      .setAttribute("style", "color: green");
  } else {
    rightanswer = questionsAndAnswers[pickedQuestions[currentQuestionIndex]];
    document.querySelector(".card-text strong").textContent =
      "Wrong answer!! right answer is " + rightanswer.answer;
    document
      .querySelector(".card-text strong")
      .setAttribute("style", "color: red");
  }
  document
    .getElementById("next-button")
    .setAttribute("onclick", "nextQuestion()");
  if (currentQuestionIndex === pickedQuestions.length - 1) {
    document.getElementById("next-button").textContent = "Finish Quiz";
    document
      .getElementById("next-button")
      .setAttribute("onclick", "finishQuiz()");
  }
};

const finishQuiz = () => {
  console.log(score);
  window.location.href = "score.html";
};

const getArea = (areaName) => {
  console.log(areaName);
  let nextButton = document.getElementById("next-button");
  nextButton.setAttribute("style", "opacity: 1; cursor: pointer;");
  checkAnswer(areaName);
};

//update question counter
const updateQuestionCounter = () => {
  let questionCounter = document.querySelector(".question-counter h4");
  questionCounter.textContent =
    currentQuestionIndex + 1 + "/" + pickedQuestions.length + " questions";
};

const enableNextQuestion = () => {};

const displayScore = () => {
  const score = localStorage.getItem("score");
  const usernameDisplay = document.getElementById("usernameDisplay");
  usernameDisplay.textContent = localStorage.getItem("name");

  const scoreDisplay = document.getElementById("scoreDisplay");
  if (score === null || score === undefined || score === NaN || score === 0) {
    scoreDisplay.textContent = 0 + "/" + localStorage.getItem("numOfQuestions");
  } else {
    scoreDisplay.textContent =
      score + " / " + localStorage.getItem("numOfQuestions");
  }
  const scoreMessage = document.getElementById("scoreMessage");

  // Display score message in the HTML
  const numberOfQuestions = localStorage.getItem("numOfQuestions");

  const ratio = (score / numberOfQuestions) * 100;

  if (ratio <= 50.0) {
    scoreMessage.textContent = "Try Harder";
  } else if (ratio > 50.0 && ratio <= 75.0) {
    scoreMessage.textContent = "Can be better";
  } else if (ratio > 75.0 && ratio <= 100.0) {
    scoreMessage.textContent = "Hooooooooorayyyyyyyyy!";
  }
};

const disableStartButton = () => {
  localStorage.clear();
  document
    .getElementById("get_start_button")
    .setAttribute("style", "opacity: 0.5; cursor: not-allowed;");

  document.getElementById("get_start_button").setAttribute("onclick", "");
  document.getElementById("firstName").addEventListener("input", (event) => {
    // The event handler function will be called when the input value changes
    const inputValue = event.target.value;
    console.log(inputValue);
    if (inputValue.length >= 1) {
      document
        .getElementById("get_start_button")
        .setAttribute("style", "opacity: 1; cursor:pointer;");

      document
        .getElementById("get_start_button")
        .setAttribute("onclick", "storeUserInfo()");
    } else {
      document
        .getElementById("get_start_button")
        .setAttribute("style", "opacity: 0.5; cursor: not-allowed;");
      document.getElementById("get_start_button").setAttribute("onclick", "");
    }
  });
};
