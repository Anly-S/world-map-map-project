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
