// it just repeats the code for Limited time

for  (let i = 0; i <=12 ; i++) {
  console.log(`${i}these are numbers`);
}

// this will print the numbers from 0 to 12
// i = 0 is the starting point serving as the temorary variable
// i <= 12 is the limitation of the loop serving as the condition
// i++ is the increment of the loop can be decriminant as well 



// in the  form of if else statement'
// if the number is even it will print even
// if the number is odd it will print odd

for  (let i = 0; i <=12 ; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}


// in the  form of using continue statement
// it is the same as the above code but it is using continue statement between the loop

for  (let i = 0; i <=12 ; i++) {
  if (i % 2 === 0) {
    continue;
  } 
  console.log(`${i} is odd`);
}

// using the break statement

for  (let i = 0; i <=12 ; i++) {
  if (i === 5) {
    break;
  } 
  console.log(`${i} is odd`);
}