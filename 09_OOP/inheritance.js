class User{
    constructor(username){
        this.username = username
    }


logMe(){ // gives the 
    console.log(`USERNAME is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        // User.call(this, username) // we used to do 
        super(username)// goes automatically and sets the username and brings the access of the value 
        this.email = email;
        this.pass = pass;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const ayush = new Teacher("Ayush","ayush@gmail.com","123")
ayush.addCourse();
const akd = new User("akd")
// akd.addCourse();// but here it doesn't has access to addCourse
akd.logMe(); //USERNAME is akd

console.log(ayush instanceof Teacher);// true
console.log(Teacher instanceof User); // true




// node 09_OOP/inheritance.js