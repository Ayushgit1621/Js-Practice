/**********Values in the Global scope is used at all places even inside block scopes**********/

/*********Values inside a block scope must not be availble for other scope**********/


let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);
//Here all the values get printed easily


var c1=400 // I have declared c1 with value 400
let a1=300//the value of a1 will be 300 always except for the block scope of diff value assigned to it in that block only


if (true){
let a1=10
const b1=20
var c1=30 // added value 30 to c1 but i dont know about this and now c1 will be 30 everywhere 
}

// console.log(a1);not defined outside if scope 
// console.log(b1); not defined outside if scope 
console.log(c1);// here this is excessing the value of c1

/***********When we write check the scope in the node environment the global scope is diff from that of the one we check from the console inspect of a website************/




/***********Lec22*************/
