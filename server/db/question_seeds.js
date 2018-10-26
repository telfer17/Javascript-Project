use solarsystem;
// db.dropDatabase();

db.planet_questions.insertMany([
  {
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
    question: "Which planet can sustain life?",
    correct_answer: "Earth",
    answers: [
      "Mars",
      "Neptune",
      "Earth",
      "Jupiter"
    ]
  },

  {
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
