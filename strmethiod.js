let myname = "   Manminder singh";

// first prop  saying like character at this position and just selecting that
console.log(myname.charAt(0));

// index of 2nd prop (to check the first occurenece of the ("A B C ") any letter)

console.log(myname.indexOf("M"));

//  last index of 2nd prop (to check the first occurenece of the ("A B C ") any letter)

console.log(myname.lastIndexOf("m"));

// for obt the length of string

console.log(myname.length);

// this is used to obt the length of function
// console.log(myname.length());


// trim() to remove whitespaces from string
myname = myname.trim();
console.log(myname);


// to upper case 

myname = myname.toUpperCase();
console.log(myname);

// to lower case 
myname = myname.toLowerCase();
console.log(myname);


// repeats
myname = myname.repeat(100);
console.log(myname);

// starts with  (it returns boolean)
// sounds like if and  else 

let result = myname.startsWith(" ");
console.log(result);

let endreslt = myname.endsWith("");
console.log(endreslt);


// include prop

let i = myname.includes("m");
console.log(i);

let phonenumber = "123-4567-890";
let ch = phonenumber.includes("-");
console.log(ch);


// replaces all (completly replaces)

let bh = phonenumber.replaceAll("-","/" );
console.log(bh);

// pad start (it likes start my string with this length of values and also we have to tell the position )  (15 , 0)  make it 15 chraxters and start where position = 0  

let d = phonenumber.padStart(15 , "0");
console.log(d);

// pad end  reciprocal of pad start (both can change the length of string) 
let c = phonenumber.padEnd(20 ,"3");
console.log(c);