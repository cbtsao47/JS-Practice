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

console.log(Person.prototype);
console.log(john.lastName);
console.log(jane.lastName);
console.log(jane);
console.log(Person.constructor);
