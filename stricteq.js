//  = this is called assignment opr (to assign values to variables)

// == comparison opr (Compares if values are equal)

// === Strict Equality opr (Compare if values and datatypes both are equal)

//  != inequality opr
// !=== strict inequality opr



// lets check them


// before correction the console is saying (Pi is not defined)
// const Pi = 3.14;

// if(Pi == "3.14"){
//     console.log(`${P1} is equal to string`)
// }
// else{
//     console.log(`${P1} is not equal to string`)
// }



// after correction  (adding ===) comparing datatype also 
// constants they are never be written like with value `${}`

const Pi = 3.14;

if(Pi === "3.14"){
    console.log("Pi is equal to string")
}
else{
    console.log("is not equal to string")
}

// inequality 



const c1 = 3.14;

if(c1  !== "3.14"){
    console.log("c1 is not equal to string")
}
else{
    console.log("is  equal to string")
}

