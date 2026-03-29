// /**********Values in the Global scope is used at all places even inside block scopes**********/

// /*********Values inside a block scope must not be availble for other scope**********/


// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);
// //Here all the values get printed easily


// var c1=400 // I have declared c1 with value 400
// let a1=300//the value of a1 will be 300 always except for the block scope of diff value assigned to it in that block only


// if (true){
// let a1=10
// const b1=20
// var c1=30 // added value 30 to c1 but i dont know about this and now c1 will be 30 everywhere 
// }

// // console.log(a1);not defined outside if scope 
// // console.log(b1); not defined outside if scope 
// console.log(c1);// here this is excessing the value of c1

/***********When we write check the scope in the node environment the global scope is diff from that of the one we check from the console inspect of a website************/




/***********Lec22*************/

//************* Nested scope concept *********//

function one (){
    const username="Ayush"

    function two(){
        const website="youtube"
        console.log(username);
    }
     // console.log(website); // website is not defined here, so commenting out to avoid error
    two()  
}
one()

if(true){
    const name="AKD"
    if(name=="AKD"){
        const web="YT"
        console.log(name+web);
    }
    //console.log(web);// web is under the scope of the if above this code 
}
//console.log(name); scope of name ends before this line execution

/*************** INTERESTING EXAMPLE *******************/
console.log(add(5));//totaly fine to use
function add(num){
return num+1
}
add(5) // till here only returned the value not printed 


//add2(5) // Error!!  This could not be accssed before the intialization at the object 
// here the function declared and then Stored in a variable also: THE CONCEPT OF HOISTING
const add2=function(num){
    return num+2
}//This is also a method to form functions 

add2(5)//till here also only returned the value not printed
