let user ={
    userName:"Ayush",
    loginCount:"4",
    signedIn:"true",


    getUserDetails: function(){
        //console.log(`Username :${this.userName}`);
        //console.log("Got user Details from DB");
        // console.log(this);
        /* output----- {
  userName: 'Ayush',
  loginCount: '4',
  signedIn: 'true',
  getUserDetails: [Function: getUserDetails]
} */
        
    }
}


//console.log(user.userName);
//console.log(user.getUserDetails());
// console.log(this);// {} o/p is an empty object since nothing in global context here....

// NOW IF WE WANT TO MAKE IT FOR NO. OF USERS THEN WE WILL HAVE TO WRITE THE CODES REPEATEDLY 

// HENCE WE USE CONSTRUCTOR FUNC AND OOP CONCEPTS 

/*******Constructor Function  **********/



const date = new Date() // here always we need new instances every time hence the new Keyword does this for it.

// USER DOESNT KNOW CONSTRUCTOR IS HERE......EXAMPLE OF ABSTRACTION......
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName ;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${userName}`);    
    }  // ......EXAMPLE OF ABSTRACTION......
    return this // returns the created object(but even if we dont write it auto does this already)

}// runs just once since there is one global execution context 

const userOne = new User('Ayussssh',4,true)// ENCAPSULATION
const userTwo = new User('AKD',5,false) // If we  print userOne it gets overidden by the values of userTwo even if we didnt print that (IF WE DONT USE NEW KEYWORD)
console.log(userOne);
console.log(userOne.constructor);// tells us about the function we created
console.log(userTwo instanceof User);// true
console.log(userTwo instanceof Object);// true


// Hence constructor func (here we talk 'new' gives new instance everytime)


// ***********Notes on new and this In the md file************ 


/*
const promiseOne = new Promise() // here new keyword is a constructor func, allows us to make multiple instance thru just one object */

//node 09_OOP/oop.js
