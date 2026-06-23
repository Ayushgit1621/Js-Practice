//now if we want that the pass should ne secured and a customized msg gets displayed 

// We use Getter and Setter

class User{
    constructor (email, pass){
     this.email = email;
     this.pass = pass;   
   }// by defualt constructor also sets the value to pass (a race b/w setter and constructor to put their values)
   
   // to resolve this (Maximum call stack size exceeded) we just change the varibale/property
get email(){
    return `ayush${this._email}`
   } 
   set email(value){
    this._email = value
   }

   get pass(){
    return `${this._pass}ayush`
   } // if this defined then setter also needed or else we dont get the value accessed
   set pass(value){
    this._pass = value
   }// we set some value in that property 
}

// Getter and Setter exist by default in every class (as much properties we declare in the class auto emthods gets created in their names)

const Ayush = new User ("Akd@h.ai", "aabbcc")
console.log(Ayush.pass);
console.log(Ayush.email);







// node 10_Additional/getset.js
