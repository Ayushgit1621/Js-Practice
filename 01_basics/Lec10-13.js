/****************Memory Allocations in Javascript
 Lec-10

Two types of memory : 
1. Stack Memory(Primitive types are stored here )
2. Heap memory(Non primitive types are stored here)
*/


let myYTname= "AyushDubeydotcom"// primitive type hence stored in stack memory 
 let secondName = myYTname
 secondName= "Chaiaurcode"

 console.log(secondName);//Chaiaurcode
 console.log(myYTname);//AyushDubeydotcom

let userOne = {
    email: "akd@gmail.com",
    upi: "akd@okaxis"
   
}
 //It goes to heap memory as it is non primitive type where original refrence is stored not the copy. and the location of the object is stored in stack memory 


    let userTwo = userOne // both userOne and userTwo points to the same location in heap memory


console.log(userOne.email);//akd@gmail.com
console.log(userTwo.email);//akd@gmail.com

 userTwo.email= "akd2@gmail.com"//modifying userTwo also modifies userOne as both points to same location in heap memory

//Dot operator is used to access the properties of an object

console.log("After modifying userTwo email");
console.log(userOne.email);//akd2@gmail.com
console.log(userTwo.email);//akd2@gmail.com


// Lec-11 :Strings in JS//
const name = "Ayush Dubey"
const repoCount=20

console.log(name +repoCount+" Value");// concatenation but through outdated methods 

//String interpolation using back ticks 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this is string interpolation using template literals (backticks) here it automatically converts repoCount to string and if i need to do some operation i can do that too like method calls or any specific operation
console.log(`Hello my name is ${name.toUpperCase} and my repo count is ${repoCount.toPrecision}`);

const gameName = new String (" Minecraft 26")// creating string using string constructor through "new " keyword that creates string object
//Here stsring is an object and hence the index is defined as key value 

console.log(gameName);



// here the string methods and properties can be accessed through dot operator as string is an object here 

// It assigns key value pairs to the string object similarly as we do in normal objects or we have seen in arrays through indices

//Certain methods are here through which we can manipulate strings. They are present in String.prototype

// some commonly used string methods THEY ARE VERY IMPORTANT TO KNOW AND LARN ABOUT FOR THE INTERVIEWS AND FURTHER KNOWLEDGE 

console.log(gameName[0]);//accesed the 0th indexed value
console.log(gameName.__proto__);// shows all the methods and properties of string object


console.log(gameName.trim());// removes extra spaces from starting and ending of the string
console.log(gameName.length);// length property gives length of string including spaces

console.log(gameName.toUpperCase());            // converts string to uppercase
console.log(gameName.toLowerCase());            // converts string to lowercase              
console.log(gameName.charAt(4));          // gives character at specific index
console.log(gameName.indexOf('e'));     // gives index of first occurrence of specific character

const newString = gameName.substring(0,4)//neg indices not allowed
console.log(newString); //gives the string section 
// b/w the index 0 t0 3 excludeing the 4th indexed element 
const newString2 = gameName.slice(-8,-2)
console.log(newString2);//takes slicing backwards and neg index allowed here 
const url="https://hitesh.com/hitesh chaudhary"//by default it changes to ......../hitesh%20chaudhary
console.log(url.replace('%20','-'));//%20 replaced by '-'
console.log(url.includes('hitesh'));//True
console.log(url.includes('ayush'));//false
const gameName2 = new String ("Ayush-bike-race")
console.log(gameName2.split('-'));//splits the gamName string by dashes 


/*********LEC-12(Numbers and Maths)*************/
const score= 400
console.log(score);

const balance = new Number(100.333)
console.log(balance);//[Number:100.333]
console.log(balance.toString().length);// 7
console.log(balance.toFixed(2));// 100.33 to 2 precision value after decimal, it is used to present a number to fixed places of precision 

const otherNo= 1125.7980
console.log(otherNo.toPrecision(6));//1125.80
console.log(otherNo.toPrecision(4));//1126
console.log(otherNo.toPrecision(2));//1.1e+3

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));// converts the no. of zeros here by default in the us standards but we can use the 'en-In'  for the indian standard


//Numbers can have many functions for them to be used and manipulated such as 
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_SAFE_INTEGER
Number.MIN_VALUE
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
Number.prototype
//And few more to be used accordingly

/***********Maths Lec-12**********/

console.log(Math);


// By default we get certain values defined such as :- E,LN2,LN10,LOG2E,LOG10E,PI,SQRT1_2,SQRT2


// ALSO SOME ARE :- sin,cos.....,sinh,cosh,round,random,abs,min,max,asinh,acosh,atanh,sqrt,cbrt,ceil,sign,hypot,trunc,exp etc.

console.log(Math.abs(-24.45));//24.45
console.log(Math.round(4.56));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(3,4,56,8));//3
console.log(Math.max(3,6,9,0,2));//9

console.log(Math.random());//values by default we get values (0-1)
console.log(Math.random()*10+1);//now the value will be b/w 1-10 with decimals 
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1));//used so that we get the smallst integer possible 

const min= 10
const max= 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
/*1.Math.random gives values (0-1)
  2.Values of random *10 then one digit shifted to left amd math.floor gives the minimum integer on round off
  3. some cases it could also give zero hence we do +1 to avoid it 
  4. +min so that we need atleast all values equal or more than the min value*/


  /************Lec-13(Dates and Time)*********/

  //Date onbject represents a single moment in time (Platform independent)represents milliseconds sonce midnight at the beginning of Jan 1,1970,UTC

let myDate = new Date()
console.log(myDate);// 2026-01-03T14:06:53.529Z

console.log(typeof myDate);// object

console.log(myDate.toString());//Sat Jan 03 2026 14:06:53 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Sat Jan 03 2026

console.log(myDate.toISOString());//2026-01-03T14:06:53.529Z

console.log(myDate.toLocaleDateString());//  1/3/2026

console.log(myDate.toLocaleTimeString());//  2:06:53 PM

console.log(myDate.toTimeString());// 14:06:53 GMT+0000 (Coordinated Universal Time)

let myCreatedDate = new Date(2026,0,3)

console.log(myCreatedDate);//  2026-01-03T00:00:00.000Z 

console.log(myCreatedDate.toDateString());// Sat Jan 03 2026 . We noticed that the months here in js start with no. (00-11)

let myCreated2Date = new Date("2026-01-03")
console.log(myCreated2Date);// 2026-01-03T00:00:00.000Z
let myCreated3Date = new Date("01-03-2026")
console.log(myCreated3Date);// 2026-01-03T00:00:00.000Z


let myTimeStamp= Date.now()
console.log(myTimeStamp);// millisecond value from 1 jan,1970 till now 
console.log(myCreated3Date.getTime());
console.log(Math.floor(Date.now()/1000));//gives me the seconds time of the date from 01-01-1970

let newDate= new Date () // gives exact todays date to the variable 
console.log(newDate);// 2026-01-03T14:27:59.463Z
console.log(newDate.getFullYear());// 2026
console.log(newDate.getMonth()+1);// 1
console.log(newDate.getTime());//  1767450650692
console.log(newDate.getDay());// 6
console.log(newDate.getTimezoneOffset());// gives diff b/w the UTC and local computer time '0'

//  To cuztomize the dates and day 
console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    era:"long"
}));







// node 01_basics/Lec10-13.js