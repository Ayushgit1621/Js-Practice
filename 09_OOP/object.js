/** JS is a prototypal lang means if it doesnt locate certain entity it just goes more and more in the depth(to next levels) and gets the value until found null */

// A function is also an object in JS (works as a func)


function multiple5(num){
    this.num = num
    return num*5
}
multiple5.power =2
console.log(multiple5(5));// 25
console.log(multiple5.power); // 2
console.log(multiple5.prototype); // {} here this.num gets stored as null was already there 

function User(userName, score){
    this.userName = userName 
    this.score = score
}
// a func is an obj and also some other null are available so we can aslo add some more functionalities to it since it is an object....

const chai = new User("Chai",25)
const tea = new User("tea",50)


User.prototype.increment = function(){
    this.score++
}// but here isssue that whose score will be increased 25 or 50 (means we dont have context here)
// so to create context we use "this"

User.prototype.printMe = function(){
    console.log(`price is ${this.score}`);    
}

chai.printMe() // until here properties get injected but: "cannot read properties undefined comes as o/p" 

// When we use 'new' keyword with chai and tea we tell that the new functionalities are working with my object

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object. (for chai,tea here )

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



//node 09_OOP/object.js