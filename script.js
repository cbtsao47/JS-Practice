// Function constructor

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.test = function() {
    console.log("test");
  };
};
Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = "name";
//instanciation, john is an instance of the Person constructor function
var john = new Person("john", "1990", "teacher");

john.calculateAge();

var jane = new Person("jane", "1969", "designer");

var mark = new Person("mark", "1948", "retired");
jane.calculateAge();
mark.calculateAge();

// console.log(Person.prototype);
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(jane);

// Object.create

var peersonProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var johnny = Object.create(peersonProto);

johnny.name = "johnny";
johnny.yearOfBirth = 1990;
johnny.job = "tester";
var jenny = Object.create(peersonProto, {
  name: { value: "jenny" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
  testing: { value: 123 }
});

// function constructor makes the newly created object inherit the properties from the prototype
// Object.create specifies the prototype before the object is created

//function being used as callbacks
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

function isFullAge(age) {
  return age >= 18;
}
function maxHeartRate(currentAge) {
  if (currentAge >= 18 && currentAge <= 81) {
    return Math.round(206.9 - 0.67 * currentAge);
  } else return -1;
}
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);

// functions returning functions

function interviewQ(job) {
  if (job === "designer") {
    return function(name) {
      console.log(`${name}, can you please explain what UX design is ?`);
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(`${name}, what subject do you teach ?`);
    };
  } else
    return function(name) {
      console.log(`hello ${name}, what do you do ?`);
    };
}

var teacherQ = interviewQ("teacher");

var generalQ = interviewQ();
generalQ("ben");

interviewQ("designer")("Dude");

// IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
(function(rng) {
  var score = Math.random() * 10;
  console.log(score >= 5 - rng);
})(3);

//closures

function retirement(retirementAge) {
  var job = "your job";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(`${retirementAge - age} years until you can retire ${job}`);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

var retirementTW = retirement(65);
retirementTW(1986);

function realInterviewQ(job) {
  return function(name) {
    if (job === "teacher") {
      console.log(`${name} what do you teach ?`);
    } else if (job === "designer") {
      console.log(`${name}, explain UX design please`);
    } else console.log(`${name} please tell me about yourself`);
  };
}
realInterviewQ("none")("ben");

//bind call and apply

var ben = {
  name: "ben",
  age: 32,
  job: "developer",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(`good ${timeOfDay} everyone! ${this.name} is my name`);
    } else if (style === "friendly") {
      console.log(`hey guys! what's up! good ${timeOfDay}`);
    }
  }
};
ben.presentation("formal", "morning");
var emily = {
  name: "emily",
  age: 35,
  job: "designer"
};

//method sharing, use method from another object, first argument is where 'this' points to
ben.presentation.call(emily, "formal", "afternoon");

//currying, create a function based on another function with some presets
var benFriendly = ben.presentation.bind(ben, "friendly");
benFriendly("morning");

var emilyFormal = ben.presentation.bind(emily, "friendly");
emilyFormal("afternoon");
