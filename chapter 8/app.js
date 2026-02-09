// //question not 1
// var students = [];
// //question no 2
// var cars = ["BMW", "Porch"];
// //question no 3
// var num = [1,2,3,5,4];
// //question no 4
// var boolean = [true , false];
// //question no 5
// var mixed = [1,2,3, "Hamza", true];

//question no 6 
// var Qualifcations = ["SSC", "HSC", "BCS" , "BS" , "BCOM", "MS", "MS.phil","PHD"]; 

// var output = document.getElementById("output");

// output.innerHTML = Qualifcations.join("<br>");

//question no 7

// var studentsName = prompt("Enter Your name ");
// var totalMarks = 500;
// var studentMarks = Number(prompt("Enter your Marks"));
// var persentage = (studentMarks / totalMarks) * 100;
// console.log("Score of " + studentsName + " is " + studentMarks);
// console.log("Percentage: " + persentage + "%");

//question no 8
var ColorNames = ["Red" , "Blue", "Black", "White" , "Voilet"];

var Coloroutput = document.getElementById('ColorNames')

Coloroutput.innerHTML=ColorNames.join(" ");

// value = prompt("Enter your color That you want to add");

// ColorNames.unshift(value);

// console.log(ColorNames);

// Coloroutput.innerHTML = ColorNames.join(" ")

ColorNames.unshift("green", "olive")

console.log(ColorNames);

Coloroutput.innerHTML = ColorNames.join(" ")

ColorNames.shift();

console.log(ColorNames)

Coloroutput.innerHTML = ColorNames.join("    ")

ColorNames.pop();

console.log(ColorNames);

Coloroutput.innerHTML = ColorNames.join(" ");

var value = prompt("Enter the color you want to add");

var Position = Number(prompt("Enter the Position  "));

ColorNames.splice(Position, 0 ,value);

console.log(ColorNames);

Coloroutput.innerHTML = ColorNames.join(" ")

var deleteposition = Number(prompt("Enter the delete Position"))

ColorNames.splice(deleteposition, 1);

console.log(ColorNames);

Coloroutput.innerHTML = ColorNames.join(" ");


//question no 9
// var student =[320,230,480,120];

// console.log(student);

// var value = document.getElementById("Student");

// value.innerHTML = student.join(" ");

// student.sort((a,b)=>a-b);

// console.log(student);

// value.innerHTML = student.join(" ");

//question no 10

// var cityNames = ["Karachi", "Lahore", "Islamabad"];

// console.log(cityNames); 

// var value = document.getElementById("CityNames");

// value.innerHTML = cityNames.join(" ");

// var selectedCites = cityNames.slice(0,1).concat(cityNames.slice(2,3));

// console.log(selectedCites);

// value.innerHTML = selectedCites.join(" ");

//question no 11
// var queue = [];

// queue.push("Ali");
// queue.push("Hamza");
// queue.push("Sara");

// console.log(queue);
