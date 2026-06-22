let myName= "Ayush     "
console.log(myName.length);// 10
console.log(myName.trim().length);// 5

console.log(myName.trueLength);// undefined

String.prototype.trueLength =function (){

    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
myName.trueLength()
"Ayush Kumar Dubey".trueLength()


let myHeros = ["Thor","Hulk"]
let heroPower ={
    thor:"hammer",
    Hulk:"muscle",
    getSpiderPower:function(){
        console.log(`hulk power is ${this.Hulk}`); 
    }
}
Object.prototype.Ayush =function(){
    console.log(`Ayush is present in all obj`);  
}


// Example of Inheritance
heroPower.Ayush()// yes ayush property is present
myHeros.Ayush() // yes ayush property is present 

// since the Ayush propery is inject directly to obj and everything here is an obj at the end hence Ayush is present everywhere 

Array.prototype.AyushHey = function(){
    console.log(`Ayush says Hello !!`);    
}
    
myHeros.AyushHey() //Ayush says Hello !!
//heroPower.AyushHey()// here property is not defined (AyushHey is not a function here)


/** INHERITANCE **/
const user ={
    name:"Ayush",
    pass:"1234"
}
const Teacher ={
    makeVideo:true  
}
const Support={
    isAvail:false
}
const TASUpp ={
    assign:"JS ASSIGN",
    fullTime: true,
    __proto__: Support 
}

Teacher.__proto__=user // this is prototypapl Inheritance (OLD way)

/**  Modern Syntax of Inheritance**/

Object.setPrototypeOf(Support, Teacher) // Here the Support object Inherits properties of Teacher 


//node 09_OOP/prototype.js
