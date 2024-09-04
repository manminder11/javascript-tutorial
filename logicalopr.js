// three types of logical oprs
// use to identify something is right or wrong means the return value will be (Boolean)

// AND = &&
// OR = ||
// NOT = !


// const  temperature = 200000000000000;

// if (temperature > 0 ){
//     console.log("the weather is good")
// }

// else if (temperature < 30){
//     console.log("the weather is hooottt")
// }
// else {
//      console.log("the weather is BAD")
// }

// even after changing the value the output is same "the weather is good" so now we need to make them in between the range of Celsius 

let temperature = window.prompt("Enter the temperature")

if (temperature > 0  && temperature <=30){
    console.log("the weather is good")
}

else if (temperature > 200|| temperature >1000){
    console.log("the weather is hooottt")
}
else if (temperature != -45 || temperature === 100){
    console.log("I dont know !!!")
} 

else {
     console.log("the weather is BAD")
}




let israiny = true;
let issunny = true;

if (israiny || issunny){
    console.log("No it is  rainy and sunny both ");
}