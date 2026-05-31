// node whilendo.js

/* initialisation 
while (condition){
updation
} */

let i=0
while(i<=10){
    console.log(`Value of index is ${i}`);
    i=i+2
}
let myArray=['flash','batman','ironman']
let arr=0
while (arr<myArray.length){
    console.log(`The element is ${myArray[arr]}`);
    arr+=1   
}

// do while loops 
let score=1
do {
console.log(`Score is ${score}`);
}
while (score<=10);// this works atleast once 