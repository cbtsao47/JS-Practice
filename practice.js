//create a function constructor for functions (basically creating the prototype for all the instances of the questions)
let Question = function(question, answers, correctAns) {
  this.question = question;
  this.answers = answers;
  this.correctAns = correctAns;
};
// create 3 random questions
let q1 = new Question(
  "Is JS the coolest programming language in the world?",
  ["yes", "no"],
  0
);
let q2 = new Question(
  "How is Ben improving so fast?",
  ["he studies everyday", "he plays everyday"],
  0
);
let q3 = new Question(
  "what best describes coding?",
  ["challenging", "hard", "boring", "fun"],
  3
);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);

//create a method in the prototype to minimize the methods being created
Question.prototype.displayQuiz = function() {
  console.log(this.question);
  for (let i = 0; i < this.answers.length; i++) {
    console.log(`${i}: ${this.answers[i]}`);
  }
};
questions[n].displayQuiz();

Question.prototype.checkAns = function(answer) {
  if (answer === this.correctAns) {
    console.log("you are correct!");
  } else {
    console.log("you are wrong, please try again!");
  }
};

let answer = parseInt(prompt("Please select the correct answer"));
questions[n].checkAns(answer);
