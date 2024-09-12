// variable scope is the context in which a variable is declared.

// In JavaScript, scope is the set of variables, objects, and functions you have access to.

// JavaScript has two scopes – global and local.

// A variable declared outside a function belongs to the global scope, and is therefore accessible from anywhere in your code.

// Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.


function function1 () {
    let a = 1;
    console.log(a);
}
// you cant see inside of the  your neighbour function

function function2() {
    let a = 2;
    console.log(a);
}
 // .............................................................................................................       ..............................................................................      differnce between global and local scope in javascript .............................................................................................................       ................................................................................................




// declaring a variable outside of a function is global scope
let a = 1;
function function3() {
    console.log(a);
}

// declaring a variable inside of a function is local scope
function function4() {
    let a = 2;
    console.log(a);
}
