// ES6+

class User {
    constructor(username,email,pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const Ayush = new User("Ayush","ayush@gmail.com","122333")
console.log(Ayush.encryptPassword()); 
console.log(Ayush.changeUser()); 


//Behind the scene (If class thing was not there)

function user(username,email,pass){
    this.username = username;       
    this.email = email;        
    this.pass = pass;
}

user.prototype.encryptPassword = function(){
        return `${this.pass}abc`
    }
user.prototype.changeUser = function(){
        return `${this.username.toUpperCase()}`
    }

const Ayush1 = new User("akd","akd@gmail.com","1234")
console.log(Ayush1.encryptPassword()); 
console.log(Ayush1.changeUser()); 



// node 09_OOP/myclasses.js