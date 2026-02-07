//question no 1

a = 10;
document.getElementById("result").innerHTML = "The value of a is: " + a;
console.log(a)


a++;
document.write("The value of a++ is: " + a + "<br>"); ;
document.write("Now the value of a is: " + a + "<br>" + "<br>");

document.write("Now the value of a is: " + a + "<br>");
a++
document.write("Now the value of a is: " + a + "<br>" + "<br>");


document.write("Now the value of a is: " + a + "<br>" );
--a
document.write("Now the value of a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

document.write("Now the value of a is: " + a + "<br>");
a--
document.write("Now the value of a is: " + a + "<br>");



//question no   3
a = prompt("Enter your name:");
alert("Hello " + a + " Welcome to our website");

//question no 4
let input = prompt("Enter a number (leave empty for table of 5)");
let b = Number(input);

if(input == null ||input.trim() === ""||isNaN(b)){
    b = 5;
}

const output = document.getElementById("output");
output.innerHTML = `<h3>Multiplication Table of ${b}</h3>`;

for (let i = 1; i <= 10; i++) {
  output.innerHTML += `${b} × ${i} = ${b * i}<br>`;
} 