// it will repeat some code while some condition is true
// let m = ""

// if(m === "") {
// window.prompt("enter your name");
// console.log(`${m}` + " is your username");
// }
// else {
// console.log("this is not a username");
// }

// looping it now using whiLE loop

let md = "";
while (md === "") {
  md = window.prompt("enter your name");
  console.log(`${md}` + " is your username");
}
console.log("this is not a username");

// this will not work because else is not a part of while loop
// while loop will run until the condition is true
// while loop will run until the condition is false

let loggedin = false;
let username;
let password;

while (!loggedin) {
  username = window.prompt("enter your username");
  password = window.prompt("enter your password");

  if (username === "brocodee" && password === "123") {
    console.log("you are logged in");
    loggedin = true;
  } else {
    console.log("username or password is incorrect");
  }
}
