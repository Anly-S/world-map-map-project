const QuestionData = [
  { question: "Which continent is India part of?", answer: "Asia" },
  { question: "Which is the largest continent in area?", answer: "Asia" },
  { question: "Which is the smallest continent in area?", answer: "Australia" },
  {
    question: "Which continent is also called as an Island-Continent?",
    answer: "Australia",
  },
  {
    question:
      "The largest mountain in the world, Mount Everest is situated in which continent?",
    answer: "Asia",
  },
  { question: "On Which Continent Is Egypt?", answer: "Africa" },
  { question: "On which continent can you find France?", answer: "Europe" },
  {
    question: "Which is the Second biggest continent of the world?",
    answer: "Africa",
  },
  { question: "Columbus found which continent?", answer: "North America" },
  { question: "Where is Amazon River?", answer: "South America" },
];








function setLocalStorage() {
  let inputName = document.getElementById("firstName").value; //store the name of the user.
  let inputQuestionNumbers = document.getElementById("number").value; //store the number of questions.

  localStorage.setItem("inputName", inputName);
  localStorage.setItem("inputQuestionNumbers", inputQuestionNumbers);
}




let currentQuestionIndex = 0;


const updateQuestion = () => {
  const questionElement = document.getElementById("question");
  questionElement.textContent = QuestionData[currentQuestionIndex].question; // Arrow function to update the question and related content

  document.querySelector(".card-text").textContent = ""; // Clear previous feedback

  document.querySelector('map[name="image-map"]').innerHTML = ""; // Clear previous map areas (you may update this part based on your specific requirements) // Add your map areas dynamically here based on the current question // For example:
  // document.querySelector('map[name="image-map"]').innerHTML = '<area ...>'

  // Update the link (you may customize this based on your specific requirements)

  const nextQuestionLink = document.querySelector(".button-div");
  nextQuestionLink.href = "#"; // You may update the href based on your navigation logic
};

const nextQuestion = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < QuestionData.length) {
    updateQuestion();
  } else {
    // Handle end of questions (you may customize this based on your specific requirements)
    alert('Congratulations! You have completed all questions.');
  }
};

updateQuestion();
