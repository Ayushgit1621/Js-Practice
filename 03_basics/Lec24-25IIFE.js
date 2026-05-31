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
})(3);//4............   This is a named IIFE since it has a name on the function 

(()=>{
    console.log(`DB CONNECTED 2`);
})();//DB CONNECTED 2, This is an unnnamed IIFE

((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})('Ayush');//DB CONNECTED TO Ayush


/*************** HOW DOES JS EXECUTE CODE+ CALL STACK (LEC-25) **************8*/
 
// WRITTEN IN NOTES @ DATE 30/03/2026
/*To test the Call Stack working 
1. Go to the google browser and inspect 
2. Go to sources ------> Beside Console 
3. Then go to snippet & create a new snippet
Now write the code & then run 
4. Check from the left downward section for Call stack, if all the functions are phased out 
5. Now call other methods inside Another


New Snippet :Chaiaurcode.js

Here --- means Brk points
function one (){
console.log("one")---
}
function two (){
console.log("two")---
}
function three (){
console.log("three")---
}
one ()---
two()---
three()---
Working :
Call stack : one() comes, two ()comes and one goes , three()comes
 two goes 

 now if nested functions are given in code ::::
 function one (){
console.log("one")---
two()
}
function two (){
console.log("two")---
three()
}
function three (){
console.log("three")---
}
one ()---
two()---
three()---

Working :
In call stack 
one () comes 
two () comes and one stays 
three () comes since three was there inside two()

then anonymous 
two () comes 
three () comes since three was there inside two()

then anonymous 
three ()

*/



