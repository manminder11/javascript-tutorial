// rest parameter is used to pass a variable number of arguments to a function.
// It is similar to the spread operator but it is used in function arguments. 
//The rest parameter is an array of all the arguments passed to the function. 

// Syntax: ...variable_name

// allow a function to accept an indefinite number of arguments



// bundling thmm to array bundling the seperared items  into an array
function openfridge(...foods) {
    console.log(foods);
    // ["pizza", "burger", "cake", "icecream", "french fries"]
    
}

function getfood( food1, food2, food3, food4, food5) {
    return `I love eating ${food1}, ${food2}, ${food3}, ${food4}, ${food5}`;    
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "cake";
const food4 = "icecream";
const food5 = "french fries";

openfridge(food1, food2, food3, food4, food5); // ["pizza", "burger", "cake", "icecream", "french fries"]

// taking all the arguments and putting them into an array called foods and then logging that array to the console.