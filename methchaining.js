// it is just one method after another in one continous line of code

// ---------- NO METHOD CHAINING --------- //

let naame = window.prompt("tell me your name");
console.log(naame);
// // i want to trim it 
na = naame.trim();
console.log(na);
// // i want it uppercase 
let ip = naame.toUpperCase();
console.log(ip);

let low = naame.toLowerCase();
console.log(low);


let chr = naame.charAt(0);
console.log(chr);

// // only slicing one character of string 

let sla = naame.slice(1);
console.log(sla);

//  it is lot of stuff to do something with one var 
// ---------------   ---------------        -------------

// ---------- METHOD CHAINING --------- //

naame = naame.trim().charAt(0).slice(0 , 14).indexOf(0) + naame.toLocaleLowerCase().toUpperCase();
console.log(naame);
