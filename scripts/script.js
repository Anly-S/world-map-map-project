//To store username and number of questions to local storage.
function storeUserInfo() {
  let userName = document.getElementById("firstName").value;
  let numberOfQuestions = document.getElementById("number").value;

  localStorage.setItem("name:", userName);
  localStorage.setItem("numOfQuestions:", numberOfQuestions);
}
