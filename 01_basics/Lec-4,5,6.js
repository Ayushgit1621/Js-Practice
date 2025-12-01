//variables//


const accountId = 16212405
let accEmail = "ayush@gmail.com"
var accPass = "12345"
accountCity ="Lucknow"
// accountId = 2345
console.log(accountId);
accEmail = "atul@gmail.com"
accPass = "54321"
accountCity ="Delhi"
let accState; //if not given any value it is considered undefined 
console.log(accEmail);
console.log(accPass);
console.log(accountCity);
console.table([accountId,accEmail,accPass,accountCity]);
/*Prefer not to use var bcz of issue in block scope and functional scope 
*/

//Data Types//
"use strict"; //treat all JS code as newer version 
// alert (3+3) //we dont write alert like this bcz we r using nodejs not browser console thru inspect
console.log(3+3);

/*Primitive data type*/
//number:- 2^53
//string:- "hello"
//boolean:- true/false
//bigInt
//null:- data type as well as stand alone value (defined but empty value)
//undefined:- when varibale is declared but not assigned any value 
//symbol:- for unique data types 

//symbol//
console.log(typeof"Ayush");//string
console.log(typeof 18);//number
console.log(typeof undefined);//undefined
console.log(typeof null);//object