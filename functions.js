// function = A section of code that performs a specific task and can be reused
// Functions can take parameters and return values
// Functions are defined using the function keyword
// Functions are called using the function name followed by parentheses
// Functions can be defined using function declarations, function expressions, or arrow functions
// call the function to execute the code inside the function


// Function Declaration

function HappyBirthday() {
  console.log("Happy Birthday! to you");
  console.log("Happy Birthday! to you");
  console.log("Happy Birthday! to you");
  console.log("Happy Birthday! to you");

  
}

HappyBirthday();

//calling the function with arguments


function greet(name , age) {
  console.log("Hello, " + name + "you are!"  + age + " years old");
}

greet("Manminder" , 20);

// donot forget to call the function
// do not switch the order of the parameters


// return statement in functions

function add(a, b) {
let result = a + b;

  return result;    
}

let sum = add(2, 3);



function multiply(a, b) {
    let result = a * b;
    return result;
    }   
    let product = multiply(2, 3);
    console.log(product); 


    function subtract(a, b) {
        let result = a - b;
        return result;
        }   
        let difference = subtract(2, 3);


        function divide(a, b) {
            let result = a / b;
            return result;
            };

//checking odd or even number

function isEVEN(num) {
    num = Number()    //converts the value to a number
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let check = isEVEN(4); //true
console.log(check);



// CHECKING EMAIL VALIDITY

function isValidEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

let emailCheck = isValidEmail("manminders802@gmail.com");
console.log(emailCheck); //true


    