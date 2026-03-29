// /************ LEC-23 Arrow & This *****************/
// const user={
//     name:"Ayush",
//     price:999,
//     wlcmmsg:function(){
//          console.log(`${this.name} , welocme to website`);// this here is used to access variables with current context 
//         console.log(this);//gives output of all the current contexts at once i.e. both sam and Ayush
//     }

// }
// user.wlcmmsg()
// user.name="Sam"// current context is changed here 
// user.wlcmmsg()

// const user2={
//     name2:"AKD",
//     price2:111,
//     wlcmmsg2:function(){
//          console.log(`${this.name2} , welocme to website`);// this here is used to access variables with current context 
//         console.log(this);//gives output of all the current contexts at once i.e. both sam and Ayush
//     }

// }
// // user.wlcmmsg2()
// // user.name2="SKD"// current context is changed here 
// // user.wlcmmsg2()HERE WHEN ALL THREE COMMENTED 

// console.log(this);//Here the current context is empty {} .Since we are in the node environment bcz func call is commented 

// // But in the console of Web inspect thru browser we see WINDOW since here the engine is inside the browser since WINDOW object is gloval in browser





// function one(){
//     console.log(this);
// }
// one()// gives output as :

// /* Ayush , welocme to website
// { name: 'Ayush', price: 999, wlcmmsg: [Function: wlcmmsg] }
// Sam , welocme to website
// { name: 'Sam', price: 999, wlcmmsg: [Function: wlcmmsg] }
// {}
// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 32.19478699937463,
//       nodeStart: 2.062988999299705,
//       v8Start: 5.131697999313474,
//       bootstrapComplete: 24.47481399960816,
//       environment: 12.417419999837875,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1774811302097.324
//   },
//   fetch: [AsyncFunction: fetch]
// }      */

//   function two(){
//    let user="Ayush"
//     console.log(this.user);
//   }
//   two()// undefined here in fucntions 


  /*************** More ways to declare functions now by using arrow functions  ************88*/

// const chai=function(){
//     let user3="Ayush"
//     console.log(this.user3);
// }
// chai() //undefined

// /** NEw WAY OF FUNCTIONS Declaration by using arrow function to use throw keyword*/

// const chai2= ()=>{
//     let user4="Dubey"
//     console.log(this.user4);
// }
// chai2()// undefined

const chai3= ()=>{
    let user4="Dubey"
    console.log(this);
}
chai3()// Empty paranthesis 

const addTwo=(n1,n2)=>{
    return n1+n2 // this is explicit return 
}
console.log(addTwo(3,4));//7

const add2=(n3,n4)=> (n3+n4)// here for variables we can write without parathesis also

console.log(add2(5,4));// Implicit return, here we dont need to write the return keyword we use to assume that there is return

const add3=(n6,n5)=> ({ussername:"Dubey"})//Object are imp to be inside parathesis 
console.log(add3(6,5));// output is ---{ ussername: 'Dubey' }

const myArray=[1,2,3,4,5]
// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=> ()) all these three ways are written as in loops

