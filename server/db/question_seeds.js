use solarsystem;

db.planet_questions.drop();

db.planet_questions.insertMany([
  {
    id: 1,
    question: "Which planet is closest to the Sun?",
    correct_answer: "Mercury",
    answers: [
      "Venus",
      "Mercury",
      "Mars",
      "Saturn"
    ]
  },

  {
    id: 2,
    question: "Which planet is farthest from the Sun?",
    correct_answer: "Neptune",
    answers: [
      "Mars",
      "Uranus",
      "Neptune",
      "Saturn"
    ]
  },

  {
      id: 3,
    question: "Which planet has the smallest surface area?",
    correct_answer: "Mercury",
    answers: [
      "Mars",
      "Neptune",
      "Earth",
      "Mercury"
    ]
  },

  {
    id: 4,
    question: "Which planet has the largest surface area?",
    correct_answer: "Jupiter",
    answers: [
      "Saturn",
      "Jupiter",
      "Mars",
      "Earth"
    ]
  },

  {
    id: 5,
    question: "Which planet takes almost twice as long as Earth to orbit the Sun?",
    correct_answer: "Mars",
    answers: [
      "Venus",
      "Saturn",
      "Jupiter",
      "Mars"
    ]
  },

  {
    id: 6,
    question: "Which planet has longest orbital period around the Sun?",
    correct_answer: "Neptune",
    answers: [
      "Uranus",
      "Jupiter",
      "Neptune",
      "Saturn"
    ]
  },

  {
    id: 7,
    question: "Which planet is closest to Earth in size?",
    correct_answer: "Venus",
    answers: [
      "Mars",
      "Neptune",
      "Venus",
      "Jupiter"
    ]
  },

  {
    id: 8,
    question: "What is the only planet that wasn't named after a Greek or Roman god/goddess?",
    correct_answer: "Earth",
    answers: [
      "Venus",
      "Neptune",
      "Earth",
      "Saturn"
    ]
  },

  {
    id: 9,
    question: "Who is the Roman god of the sea??",
    correct_answer: "Neptune",
    answers: [
      "Mars",
      "Neptune",
      "Uranus",
      "Jupiter"
    ]
  },

  {
    id: 10,
    question: "Bonus! Which planet was subject to a movie starring Matt Damon?",
    correct_answer: "Mars",
    answers: [
      "Mars",
      "Saturn",
      "Venus",
      "Mercury"
    ]
  }

]);
