// spread operator is used to spread the elements of an array or object
// Syntax: ...
// SET IT TO EXPAND AND SEPERATE THE ELEMENTS

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let maximum = Math.max(numbers)
//console.log(maximum) // NaN;
// Math.max() is used to find the maximum value of an array we can't pass an array directly to Math.max() so we use spread operator

let maximum = Math.max(...numbers)
console.log(maximum) // 10

// it is just like opening the box and taking out the elements and passing them to the function

let username =  "Manminder";
let letters = [...username]; // ITS JUST OPENED THE STRING AND TOOK OUT THE ELEMENTS

console.log(letters) // ["M", "a", "n", "m", "i", "n", "d", "e", "r"]

// we can also use spread operator to combine two arrays JOIN THEM

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let newfruits = [...fruits];
console.log(newfruits) // ["apple", "banana", "mango", "orange", "grapes"]

// ARRAYS CAN TAKE SAME ELEMENTS MULTIPLE TIMES BUT SETS CAN'T


// COMBINING TWO ARRAYS
let VEGETABLES = ["potato", "tomato", "onion", "carrot", "cabbage"];
let foods = [...fruits, ...VEGETABLES, "rice", "bread", "butter"];
console.log(foods) // ["apple", "banana", "mango", "orange", "grapes", "potato", "tomato", "onion", "carrot", "cabbage", "rice", "bread", "butter"]

// vegetables and fruits are combined and then rice, bread and butter are added to the array


