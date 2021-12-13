// notes.js

// DOM

// JS provides us a document object in which ALL properties and methods are passed down
// a tree like data structure representative of the given HTML of any web page



// constructor function
function Person(nameParam, ageParam) {
     this.name = nameParam,
          this.age = ageParam,
          this.speak = function () {
               console.log('hello ' + this.name + ' ' + this.age)
          }
}


// create an object
const person1 = new Person('patrick', 31); // instatiation
const person2 = new Person('whoeever', 21);
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 

console.log(person1.speak())
console.log(person2.speak()) // whoever 21



//  in js are syntactical sugar for constructor functions


// great way to see how event listeners work
// addEventLister('scroll', (e) => {
//   console.log(e)
// }) 










