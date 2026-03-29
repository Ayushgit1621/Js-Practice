/*********** Immediately Invoked Function Exceptions(IIFE)   *************/
/* 1. Global scope variables interrupt inside the local area hence we dont need that interruption often 
2. If we need a particular function to execute immediately
*/

function chai(){
    console.log(`DB CONNECTED`);
}
chai();//DB CONNECTED 

(function (){
    console.log(`DB CONNECTED AGAIN`);
})();//DB CONNECTED AGAIN,semi colon here is imp bcz here the context is stopped by semi colon

(function one(num){
    console.log(num+1);
})(3);//4 This is a named IIFE

(()=>{
    console.log(`DB CONNECTED 2`);
})();//DB CONNECTED 2, This is an unnnamed IIFE

((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})('Ayush');//DB CONNECTED TO Ayush


/*************** HOW DOES JS EXECUTE CODE+ CALL STACK (LEC-25) **************8*/




