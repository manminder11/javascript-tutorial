// string slicing is the way of creating substring from the portion of other string 

// example  ("Manminder singh") --- string 
// substr ("singh") ("Manminder")

// formula == string.slice(0 , 10)
// 0 and 10 represents from where slicing starts and where it ends



const myyname = "Manminder Singh";
let firstname = myyname.slice(0 , 9);
console.log(firstname);

let lname = myyname.slice(10 , 15);
console.log(lname);


let firstchr = myyname.slice(0 ,1);
console.log(firstchr);

// for last character of string there is a unique wayy
//we have to with negative indexing from the last 
// example "MANN"
// last chr with slicing Will be like 
// (-1) = N  (-2) = NN (-3) = ANN ||| and   (-4) = MANN

let lastchr = myyname.slice(-1);
console.log(lastchr);
// it should show the chr "h"



// combination of slicing and index of method 
let fnamee = myyname.slice(0 , myyname.indexOf(" "));
let lastnameeee = myyname.slice(myyname.indexOf(" "));
console.log(fnamee) , console.log(lname);


// BOTH METHODS BELOW DOING THE SAME THING 


// if we add something like (+1) it will just display the more more character of string 

const email = "ManminderSingh@edu.sait.ca"

let usernamee = email.slice(0 , 14);
let uu = email.slice(0, email.indexOf("@"));
console.log(uu); console.log(usernamee);

let extra = email.slice(email.indexOf("@"));
console.log(extra);











