use solarSystem;
db.dropDatabase();

db.planets.insertMany([
{
"question": "Which planet is closest to the Sun?",
"correct_answer": "Mercury",
"incorrect_answers": [
"Venus",
"Mars",
"Saturn"
]
},

{
"question": "Which planet is farthest from the Sun?",
"correct_answer": "Neptune",
"incorrect_answers": [
"Mars",
"Uranus",
"Saturn"
]
},

{
"question": "Which planet has the smallest surface area?",
"correct_answer": "Mercury",
"incorrect_answers": [
"Mars",
"Neptune",
"Earth"
]
},

{
"question": "Which planet has the largest surface area?",
"correct_answer": "Jupiter",
"incorrect_answers": [
"Saturn",
"Mars",
"Earth"
]
},

{
"question": "Which planet takes almost twice as long as Earth to orbit the Sun?",
"correct_answer": "Mars",
"incorrect_answers": [
"Venus",
"Saturn",
"Jupiter"
]
},

{
"question": "Which planet has longest orbital period around the Sun?",
"correct_answer": "Neptune",
"incorrect_answers": [
"Uranus",
"Jupiter",
"Saturn"
]
},

{
"question": "Which planet can sustain life?",
"correct_answer": "Earth",
"incorrect_answers": [
"Mars",
"Neptune",
"Jupiter"
]
},

{
"question": "Bonus! Which planet was subject to a movie starring Matt Damon?",
"correct_answer": "Mars",
"incorrect_answers": [
"Saturn",
"Venus",
"Mercury"
]
}


]
)
