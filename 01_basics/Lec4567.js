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
let str2= "Ayush"
let str3= str1+str2
console.log(str3);

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