function getScore() {
  return 6;
}

function getUsername() {
  return "Aneeka";
}

function getUserInfo() {
  const score = getScore();
  const username = getUsername();
  return { score, username };
}

const userInfo = getUserInfo();
console.log(`Username: ${userInfo.username}, Score: ${userInfo.score}`);

const usernameDisplay = document.getElementById("usernameDisplay");
usernameDisplay.textContent = userInfo.username;

const scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.textContent = userInfo.score;

const scoreMessage = document.getElementById("scoreMessage");

// Display score message in the HTML
if (userInfo.score <= 5) {
  scoreMessage.textContent = "Try Harder";
} else if (userInfo.score > 5 && userInfo.score <= 8) {
  scoreMessage.textContent = "Can be better";
} else if (userInfo.score >= 9 && userInfo.score <= 10) {
  scoreMessage.textContent = "Hooooooooorayyyyyyyyy!";
}
