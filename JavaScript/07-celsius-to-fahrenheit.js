/*
fahrenheit = celsius*1.8 + 32
celsius = (fahrenheit - 32)/1.8
*/

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius*1.8) + 32;
    return `${fahrenheit} F`;
}

function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;
    return `${celsius} C`;
}

console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(100));