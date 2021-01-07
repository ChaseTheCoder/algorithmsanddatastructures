// Data Structures
// data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
// some are highly specialized, while others (like arrays) are more generally used.
// DS are just different ways to store data.
// the functionallity and relationships are vastly different

// ES2015 syntax that we'll use along the way
//  WHAT IS A CLASS?
// a blue print for creating objects with pre-defined properties and methods
// instantiate: represent as or by an instance.
// JS is not entirely object oriented programming
// just an easier way to work with class like structures
// we're going to implement data structures as classes!

// HOW WE'LL BE USING CLASSES
// we will be using constructor and instance methods quite a bit!
// we will almost never be using static methods
// inside all of our instance mehtods and constructor, the keyword 'this' refers to the object created from that class (also knwon as an instance)

// Data Structures: the Class Keyword
class Student {   // must be capitalized and use camel case // defining a class is just the pattern
  constructor(firstName, lastName, year){
    this.firstName = firstName; // this = when inside constructor "this" refers to the individual instancce of the class
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies += 1;
    return `${this.firstName} $this.lastName} has been late ${this.tardies} times`;
  }
}

class Student {   // must be capitalized and use camel case // defining a class is just the pattern
  constructor(firstName, lastName, year){
    this.firstName = firstName; // this = when inside constructor "this" refers to the individual instancce of the class
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3){
      return "You are expelled!!!!"
    }
    return `${this.firstName} $this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score){
    this.scores.push(score);
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b})
    return sum/this.scores.length;
  }
  static EnrollStudents(...students){
    // maybe send an email here
  }
}

let firstStudent = new Student("Colt", "Steele");  // must use new to instantiate
let secondStudent = new Student("Blue", "Steele");

// ADDING CLASS METHODS
// static defines a static method for a class
// static methods are often used to create utility functions for an application
Students.enrollStudents([firstStudent, secondStudent])