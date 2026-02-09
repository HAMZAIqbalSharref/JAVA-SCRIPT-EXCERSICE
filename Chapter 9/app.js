//question no 1
 
// var size =[

//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]

// ];

// var value = document.getElementById('matrix');

// let output = "";

// for(let i =0; i<size.length; i++ ){
//     for(let j=0; j<size[i].length; j++){
//         console.log(size[i][j]);
//             output += size[i][j] + " ";

//     }

//     output += "<br>"; 
// }

// value.innerHTML = output;

//question no 2

var num = [];

var value = document.getElementById("num");

for(let i =0; i<11; i++){
    num.push(i);
}

value.innerHTML = num.join("<br>")
