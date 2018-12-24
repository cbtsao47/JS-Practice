//create a function constructor for functions (basically creating the prototype for all the instances of the questions)

(function() {
  let Question = function(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
  };

  //create a method in the prototype to minimize the methods being created
  Question.prototype.displayQuiz = function() {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`);
    }
  };
  Question.prototype.displayScore = function(score) {
    console.log(`Your score is ${score}`);
  };
  Question.prototype.checkAns = function(answer, cb) {
    let sc;
    if (answer === this.correctAns) {
      console.log("you are correct!");
      sc = cb(true);
    } else {
      console.log("you are wrong, please try again!");
      sc = cb(false);
    }
    this.displayScore;
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
  function score() {
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  let keepScore = score();

  let questions = [q1, q2, q3];
  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuiz();
    let answer = prompt("Please select the correct answer");
    if (answer !== "exit") {
      questions[n].checkAns(parseInt(answer), keepScore);

      nextQuestion();
    }
  }
  nextQuestion();
});
