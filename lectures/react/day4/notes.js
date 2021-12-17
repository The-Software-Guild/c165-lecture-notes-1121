// notes.js

// equality

// console.log(Object.is(true, false)) // false

// By this point, you might be worried about objects. 
// You might have heard that equality doesn’t work with objects, 
// or that it compares “references”.

let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

// console.log(Object.is(dwarves, worldWonders)); 
// console.log(dwarves === worldWonders); // 

// console.log(3 === 3); // 
// console.log(NaN === NaN); // 
// console.log(Object.is(NaN, NaN)); // 
// console.log(-0 === 0); // 

// console.log(Object.is(banana, cherry)); // 
// console.log(Object.is(cherry, chocolate)); //  
// console.log(Object.is(chocolate, banana)); // 

// loose
// console.log([[]] == ''); // ?
// console.log(true == [1]); // ?
// console.log(false == [0]); // ?


























