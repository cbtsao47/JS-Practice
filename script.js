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
