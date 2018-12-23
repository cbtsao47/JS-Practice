// Function constructor

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(this);
  };
};

//instanciation, john is an instance of the Person constructor function
var john = new Person("john", "1990", "teacher");

john.calculateAge();

var jane = new Person("jane", "1969", "designer");

var mark = new Person("mark", "1948", "retired");
