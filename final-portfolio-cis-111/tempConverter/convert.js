function convertCtoF(degreesCelsius) {
    return degreesCelsius * 9/5 + 32;
}
         
function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5/9;
}

         // Update image based on Fahrenheit temperature
function updateImage(degreesFahrenheit) {
    const weatherImage = document.getElementById("weatherImage");
    if (degreesFahrenheit < 32) {
    weatherImage.src = "cold.png";
    weatherImage.alt = "Cold";
} else if (degreesFahrenheit >= 32 && degreesFahrenheit <= 50) {
    weatherImage.src = "cool.png";
    weatherImage.alt = "Cool";
} else {
    weatherImage.src = "warm.png";
    weatherImage.alt = "Warm";
    }
}

         // Event handler for Convert button click
function convertTemperature() {
    const celsiusInput = document.getElementById("cInput");
    const fahrenheitInput = document.getElementById("fInput");
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    let temp = 0;
    if (!isNaN(celsiusValue) && fahrenheitInput.value == "") {
        const fahrenheitTemp = convertCtoF(celsiusValue);
        fahrenheitInput.value = fahrenheitTemp;
        updateImage(fahrenheitTemp);
        temp = 1;
        document.getElementById("errorMessage").innerHTML = "";
        } else if (fahrenheitInput.value == "") {
            document.getElementById("errorMessage").innerHTML = celsiusInput.value + " is not a number";
            temp = 1;
            }
if (temp == 0) {
    if (!isNaN(fahrenheitValue) && celsiusInput.value == "") {
        const celsiusTemp = convertFtoC(fahrenheitValue);
        celsiusInput.value = celsiusTemp;
        updateImage(fahrenheitValue);
        document.getElementById("errorMessage").innerHTML = "";
        } else {
               document.getElementById("errorMessage").innerHTML = fahrenheitInput.value + " is not a number";
            }
         }
}
         // Event handler for input change in Celsius text field
function clearFahrenheitInput() {
    const fahrenheitInput = document.getElementById("fInput");
    fahrenheitInput.value = "";
    document.getElementById("errorMessage").innerHTML = "";
         }

         // Event handler for input change in Fahrenheit text field
function clearCelsiusInput() {
    const celsiusInput = document.getElementById("cInput");
    celsiusInput.value = "";
    document.getElementById("errorMessage").innerHTML = "";
         }

         // Function to register event listeners
function domLoaded() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertTemperature);

    const celsiusInput = document.getElementById("cInput");
    const fahrenheitInput = document.getElementById("fInput");
    celsiusInput.addEventListener("input", clearFahrenheitInput);
    fahrenheitInput.addEventListener("input", clearCelsiusInput);
         }
         
         // Call domLoaded when the DOM finishes loading
document.addEventListener("DOMContentLoaded", domLoaded);
window.addEventListener("DOMContentLoaded", domLoaded);