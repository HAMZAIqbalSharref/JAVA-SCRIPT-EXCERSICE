//question no 1 / 2 
var num1 = 5;
var num2 = 2;
var num3 = num1 + num2;
var num4 = num1 -num2;
var num5 = num1 * num2;
var num6 = num1 % num2;


    document.getElementById("result").innerText =
        `Sum of 5 and 2 is ${num3} and Subtraction of 5 and 2 is ${num4}   and Product of 5 and 2 is ${num5} and modulus of 5 and 2 is ${num6}`;
"\n"

//question no 3
var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;

document.write("Initial value: " + num + "<br>");

num++;

document.write("Value after increment is: " + num + "<br>");

num = num + 7;

document.write("Value after addition is: " + num + "<br>");

num--;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;

document.write("The remainder is: " + remainder);

//question no 4 
var ticket= 600;
var result = ticket * 5;
document.write("The cost for 5 tickets is" +  result)

//question no 5
let number = 5;
let range = 10;

let output = `<h3>Multiplication Table for ${number}</h3>`;

for (let i = 1; i <= range; i++) {
    output += `${number} x ${i} = ${number * i}<br>`;
}

document.getElementById("result").innerHTML = output;


//question no 5
let celsius = 25;

let fahrenheit = (celsius * 9 / 5) + 32;

document.write(`${celsius}°C is ${fahrenheit}°F<br>`);

let fahrenheit2 = 70;

let celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(`${fahrenheit2}°F is ${celsius2}°C`);
