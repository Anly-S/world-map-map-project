//To store username and number of questions to local storage.
function storeUserInfo() {
  let userName = document.getElementById("firstName").value;
  let numberOfQuestions = document.getElementById("number").value;

  localStorage.setItem("name:", userName);
  localStorage.setItem("numOfQuestions:", numberOfQuestions);
}
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
