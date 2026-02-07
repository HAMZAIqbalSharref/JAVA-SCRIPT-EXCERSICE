//question no 1

var age = 15;
alert(`I am ${age} years old`);
console.log(age);

//question no 2
var visits = localStorage.getItem("visits");

if (visits === null) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

alert("You have visited this site " + visits + " times");

//question  no 3
var birthYear = Number(prompt("Enter your birth year"));

document.getElementById("demo").innerHTML =
  "My birth year variable is " + typeof birthYear;

//question no 4
var visitorName = prompt("Enter your Name");
var ProductTitle = prompt("Enter your Product Title");
var quantity =prompt("Enter your Quantity");

document.getElementById("shop").innerHTML =   visitorName + " ordered " + quantity + " " + ProductTitle + "(s) on XYZ Clothing store.";


console.log(visitorName, ProductTitle,quantity)




