function rollDice() {
  const numOfDice = document.getElementById("NumOfDice").value; // Get number of dice
  const diceResults = document.getElementById("DiceResult"); // Get element for showing results
  const diceImages = document.getElementById("DiceImages"); // Get element for showing images
  const values = []; // Array to store dice values
  const images = []; // Array to store dice images

  // Clear previous results
  diceResults.textContent = "";
  diceImages.innerHTML = "";

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1; // Generate random value between 1 and 6
    values.push(value); // Push value to the array
    images.push(
      `<img src="images/dice${value}.png" alt="dice${value}" width="100" height="100">`
    ); // Add corresponding image
  }

  // Display the results
  diceResults.textContent = `Results: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(""); // Display dice images
}
