const mininum = 1;
const maximum = 100;
const answer = Math.floor (Math.random() * (maximum - mininum + 1)); 
console.log(answer);


let attempts = 0;
let guess;
let running = true;

while (running === true) { 
    guess = window.prompt(`guess the number between ${minimum} - ${maximum} `); // prompt user to guess the number
    if (isNaN(guess)) {   // check if the guess is a number or not
        window.alert("Please enter a valid number");
    }
    // check if the guess is within the range

    else if (guess < minimum || guess > maximum) {
        window.alert(`Please enter a number between ${minimum} - ${maximum}`);  
    }
    // check if the guess is correct
    else
    {
        attempts++;
        if (guess < answer) {
            window.alert("Higher");
        } else if (guess > answer) {
            window.alert("Lower");
        } else {
            window.alert(`Correct! It took you ${attempts} attempts`);
            running = false;
        }
        // if the user wants to stop the game
    }
}
