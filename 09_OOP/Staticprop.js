class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    
    static createId(){// as soon as a user is created an id gets alloted to it 
        return `123`
    }// static used to restrict the access of thiss function to create Id 
}

const Akshay = new User("Akshay")
// console.log(Akshay.createId());// now since the function is static hence it wont be accessible here 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Hod = new Teacher ("HoD", "IThod@gcet.org")
// console.log(Hod.createId());// can't aacces this func even if its a child class




//  node 09_OOP/Staticprop.js