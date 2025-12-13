/****************Memory Allocations in Javascript
 Lec-10

Two types of memory : 
1. Stack Memory(Primitive types are stored here )
2. Heap memory(Non primitive types are stored here)
*/


let myYTname= "AyushDubeydotcom"// primitive type hence stored in stack memory 
 let secondName = myYTname
 secondName= "Chaiaurcode"

 console.log(secondName);
 console.log(myYTname);

let userOne = {
    email: "akd@gmail.com",
    upi: "akd@okaxis"
   
}
 //It goes to heap memory as it is non primitive type where original refrence is stored not the copy. and the location of the object is stored in stack memory 


    let userTwo = userOne // both userOne and userTwo points to the same location in heap memory


console.log(userOne.email);
console.log(userTwo.email);

 userTwo.email= "akd2@gmail.com"//modifying userTwo also modifies userOne as both points to same location in heap memory

//Dot operator is used to access the properties of an object

console.log("After modifying userTwo email");
console.log(userOne.email);
console.log(userTwo.email);  


// Lec-11 :Strings in JS//
const name = "Ayush Dubey"
const repoCount=20

console.log(name +repoCount+"Value");// concatenation but through outdated methods 


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this is string interpolation using template literals (backticks) here it automatically converts repoCount to string and if i need to do some operation i can do that too like method calls or any specific operation


const gameName = new String (" Minecraft ")// creating string using string constructor through new keyword that creates string object

console.log(gameName);



// here the string methods and properties can be accessed through dot operator as string is an object here 

// It assigns key value pairs to the string object similarly as we do in normal objects or we have seen in arrays through indices

//Certain methods are here through which we can manipulate strings. They are present in String.prototype

// some commonly used string methods

console.log(gameName[0]);
console.log(gameName.__proto__);// shows all the methods and properties of string object


console.log(gameName.trim());// removes extra spaces from starting and ending of the string
console.log(gameName.length);// length property gives length of string including spaces

console.log(gameName.toUpperCase());            // converts string to uppercase
console.log(gameName.toLowerCase());            // converts string to lowercase              
console.log(gameName.charAt(4));          // gives character at specific index
console.log(gameName.indexOf('e'));     // gives index of first occurrence of specific character



