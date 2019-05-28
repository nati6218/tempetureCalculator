var fahrenheit = function(number1){
return (number1 - 32)*0.5556;
};

var number1 = parseInt(prompt("write the tempeture in fahrenheit"));

alert("The tempeture in celsious degrees is " + fahrenheit(number1));
