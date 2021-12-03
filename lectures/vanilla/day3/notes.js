// notes.js

// fx can be stored as a value
// fx can b returend from a fx
// fx can be passed as an argument to another fx

// var, let, const
// scope, hoisting, reasignment


// fx
// announymous, named, arrow, constructor, cb


// abstraction, inheritence, polymorphism, encapsulation


// 2 ways in JS to group inormation
// objects {} => store more detailed information on a singular thing

// contains properties of format (key: value)

// ex)

const person1 = {
     key: 'value',
     name: 'patrick',
     hungry: true,
     greeting: function() {
          console.log(this)
          console.log(`${this.name} are you hungry? ... ${this.hungry}`)
     }
}

// console.log(this) // first CL

// tagged temperate litterals the format is backticks (``)
// in order to insert JS you use ${} to escape ouit of the TTL 

person1.hungry = false
person1.location = 'bk'

// object dot notation
// format (objectReciever.propertyName)
// console.log(person1.name) // patrick
// console.log(person1.hungry) // true
// console.log(person1.location) // bk

// methods
// a fx that enacts itself on an object

// method style invocation is of the folowing format:
// objectReciecver.methodName()

// console.log(person1.greeting()) // second this console log

// JS + react are functional programming meaning we want to encapsualte all pieces of reusable code into fx's

// arrays [] => groups of similar things

// ex)
//             0         1         2         3     4
const c156 = [person1, 'Ahson', 'Angela', 'Bryan', 4]

// in order for somethign to be a DS it must be transverssible 
// you must be able to move through it in a predictable way 

// arrays in JS are zero indexed 
// an index is a singular location


// nameOfArray[index#]
console.log(c156[2]) // angela

// ** ALWAYS declare perimitave values with litterals

// 7

// new Number

// true

// new Boolean

// {}

// new Object

// 'string'

// new String

// new Date

// your not trying to outrun the bear
// your just trying to outrun your friend who came with oyu


// algorithm
// What is the Fibonacci sequence and how do we find 
// the number at the N-th entry?

// 0, 1, 1, 2, 3, 5, 8, 13, 21

// edge cases































