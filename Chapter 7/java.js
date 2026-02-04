//question 1
// a = prompt("Enter a number");
// b = prompt("Enter another number");


// if(a>b){
//     console.log(a + " is greater than " + b);
// }
// else if(b>a){
//     console.log(b + " is greater than " + a);
// }

// else if(a==b){
//     console.log(a + " is equal to " + b);
// }

// else{
//     console.log("invalid input");
// }


//question 2

// a = prompt("Enter a number");

// if(a < 0){
//     console.log("The number is negative");
// }
// else{
//     console.log("The number is positive");
// }

//question no 3
// let password = "Hamza";
 
// a = prompt("Enter your Password");
// if(a == password){
//     console.log(a + " Is a correct password");
// }
// else{
//     console.log(a+ " is an incorect password");
// }

//question no 4

// var greeting; 
// var hours = 13;
// if(hours < 18){ 
//     console.log("Good Day"); // syntax error
// }
// else{
//     console.log("Good evening")
// }


//question no 5

function DisplayTime(){

    const Timeinput = Number(prompt("Enter Your Time" ));
    document.getElementById('meeting-time');
    const timeValue = Timeinput.value; 

if (timeValue = 1900) {
    if(timeValue>=0 && timeValue<1200){
            console.log("Good Morning");
        }
            else if(timeValue >=1200 && timeValue <1700){
                console.log("Good Afternoon");
            }
             else if(timeValue >=1700 && timeValue < 2100){
                console.log("Good Evening");
             }
                else if(timeValue >= 2100 && time <=2359){
                    console.log("Good Night");
                }
    }
}