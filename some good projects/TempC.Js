const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
  let temp = parseFloat(textbox.value);

  // Check if the input is a valid number
  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number";
    return;
  }

  // Convert to Fahrenheit
  if (toFahrenheit.checked) {
    let fahrenheit = (temp * 9) / 5 + 32;
    result.textContent = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  }
  // Convert to Celsius
  else if (toCelsius.checked) {
    let celsius = ((temp - 32) * 5) / 9;
    result.textContent = `${temp}°F is equal to ${celsius.toFixed(2)}°C`;
  }
  // If no conversion type is selected
  else {
    result.textContent = "Please select a conversion type";
  }
}
