// //variables//


// const accountId = 16212405
// let accEmail = "ayush@gmail.com"
// var accPass = "12345"
// accountCity ="Lucknow"
// // accountId = 2345
// console.log(accountId);
// accEmail = "atul@gmail.com"
// accPass = "54321"
// accountCity ="Delhi"
// let accState; //if not given any value it is considered undefined 
// console.log(accEmail);
// console.log(accPass);
// console.log(accountCity);
// console.table([accountId,accEmail,accPass,accountCity]);
// /*Prefer not to use var bcz of issue in block scope and functional scope 
// */

// //Data Types//
// "use strict"; //treat all JS code as newer version 
// // alert (3+3) //we dont write alert like this bcz we r using nodejs not browser console thru inspect
// console.log(3+3);

// /*Primitive data type*/
// //number:- 2^53
// //string:- "hello"
// //boolean:- true/false
// //bigInt
// //null:- data type as well as stand alone value (defined but empty value)
// //undefined:- when varibale is declared but not assigned any value 
// //symbol:- for unique data types 

// //symbol//
// console.log(typeof"Ayush");//string
// console.log(typeof 18);//number
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object

// //Converstion Operations//

// let score="80"
// console.log(typeof(score));//Checking the type of score bcz sometimes we dont know what type of value are we getting in here (if asked from frontend?)
// let valInNumber = Number(score)//here in conversion line we need capital to write the type to convert
// console.log(typeof(valInNumber));
// let score2="80abc"
// let valueInNumber=Number(score2)
// console.log(valueInNumber);//gives NaN means Not a number (But the data type is number)
// //nulll value is printed as 0
// //undefined value is printed as NaN
// //boolean has true-1 and false-0
// //if any conversion is like "Ayush" to Number--->NaN 
// // 1-->TRUE; 0-->FALSE
// //""-->FALSE; "Ayush"-->true
// let Number2=44
// let stringNumber2=String(Number2)
// console.log(stringNumber2);//it is a number but type is String 

/***********OPERATIONS *************/
//Why string to number conversion is confsuing//
let value= 45
let negvalue= -value
console.log(negvalue);
console.log(2+2);
console.log(2*2);
console.log(2**2);
console.log(2-2);
console.log(2/2);
console.log(2%2);

let str1="Hello"
let str2= " Ayush"
let str3= str1+str2
console.log(str3);//Hello Ayush

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(+true);//1
console.log(+"");//0

let num1,num2,num3
num1=num2=num3=2+2

let gamecount=100
gamecount++;//postfix 

console.log(gamecount);
++gamecount;//prefix
console.log(gamecount);


let x=3
y=++x;
console.log(y);//4
z=x++;
console.log(z);//4


/*********Comparison of datatypes ************/
console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

//now comparison of diff data types
// typescript  doesnt allow this comparison 
//Try to avoid such compariosns bcz they are confusing and inconsistent 
console.log("2">1);
console.log("02">1);
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true: bcz value conversion null converted to zero
console.log(undefined==0);//false

//NOTE:To master JS we need to know the objects in js and web events or browser events 

//strict check 
console.log("2"===2);// checks data types also checked hence it is false 


/*********Data Types complete summary ************/
/*Data types are categorised in majorly two ty[es based on how they are stored and how they are accessed  
1.Primitive type: Call by value type ,means when we copy or access the data ,they dont give the reference of the original data but the copy of the value to alter or modify accordingly 

7 types: String,Number, Boolean,null,undefined,Symbol,BigInt

J.S. doesnt need data type declaration and is flexible in type changes at runtime 
Dynamic: JS,PYTHON,RUBY  
STATIC: TS,JAVA,C++
Eg:
const score=100 //Js
const score:number=100//Ts
*/
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2);//false
console.log(typeof id);
const bigNumber = 21374732904634646n

/* 
2.Reference /Non-Primitive type: Call by reference ,the original memory reference is accessed 
Eg: Array, Objects ,Functions*/

const heros =["ABD","VK","CG"] //Array Declared

let myObj={
    name: "Ayush",
    age: 20,
}//Object Declared
const myFunction= function(){
    console.log("Hello Ayush");  
}

//TO KNOW THE DATA TYPE OF A VALUE 
console.log(typeof bigNumber);//Tells bigint is the type 

const outTemp= null ;
console.log(typeof outTemp);// null but returns Object type 
console.log(typeof heros);//its array but returns object type
console.log(typeof myFunction); // function type and called as object function 
console.log(typeof myObj);// object type


//node 01_basics/Lec4-9.js-----TO RUN THE CODE 
