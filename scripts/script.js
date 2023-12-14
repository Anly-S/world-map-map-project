//To store username and number of questions to local storage.
function storeUserInfo() {
  let userName = document.getElementById("firstName").value;
  let numberOfQuestions = document.getElementById("number").value;

  localStorage.setItem("name:", userName);
  localStorage.setItem("numOfQuestions:", numberOfQuestions);
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
  questionElement.textContent = QuestionData[currentQuestionIndex].question; 
  document.querySelector(".card-text").textContent = ""; 

  document.querySelector('map[name="image-map"]').innerHTML = ""; 

  const nextQuestionLink = document.querySelector(".button-div");
  nextQuestionLink.href = "#"; 
};

const nextQuestion = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < QuestionData.length) {
    updateQuestion();
  } else {
    alert('Congratulations! You have completed all questions.');
  }
};

updateQuestion();
