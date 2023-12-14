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
