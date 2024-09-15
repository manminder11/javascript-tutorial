// array is a collection of elements that can be stored in a single variable.

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(fruits);
console.log(numbers);

console.log(fruits[0]); // doing with using index
console.log(numbers[3]); // doing with using index

// replacing the value of an array
fruits[0] = "pineapple"; // it will replace the value of apple with pineapple
console.log(fruits);


fruits.push("apple"); // it will add the value at the end of the array
console.log(fruits);

fruits.pop(); // it will remove the last value of the array
console.log(fruits);


fruits.shift(); // it will remove the first value of the array
console.log(fruits);    

fruits.unshift("apple"); // it will add the value at the start of the array
console.log(fruits);