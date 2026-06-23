/* 
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);// but here also same value appears (no change)
*/

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor); 
/* {
  value: 3.141592653589793,
  writable: false,
  ---- cant be overwritten (Hard ccoded values given) we can also give these to our own objects created so their values cant be changed

  enumerable: false,
  configurable: false
} */

  const newObj = {
    name:"Ayush",
    score:"300",
    isAvailable: true,

    orderChai: function (){
        console.log("code fatt gaya !!");
        
    }
  }

  console.log(newObj); // This also has descriptor properties 
  console.log(Object.getOwnPropertyDescriptor(newObj)); //undefined bcz here newobj is an object not the property, whereas in Math.PI PI is the property value 

  console.log(Object.getOwnPropertyDescriptor(newObj, "name"));
/* {
  value: 'Ayush',
  writable: true,
  enumerable: true,
  configurable: true
}  */ 
 // We get to change the properties at some places not all (Js allows this access)

 Object.defineProperty(newObj,'name',{
    writable: false,
    enumerable: false
 })

 console.log(Object.getOwnPropertyDescriptor(newObj, "name"));
 /* {
  value: 'Ayush',
  writable: false,
  enumerable: false,
  configurable: true
} */

newObj.name = "AKD"
console.log(newObj.name); // Still comes Ayush since we made it hard coded thru writable false hence cant change the value inside the name of newobj

// for ( let [key,value] of newObj){
//     console.log(`${key} : ${value} `); 
// }
// newObj is not iterable (Since it is an obj)

// It can be done thru entries
for ( let [key,value] of Object.entries(newObj)){
    if(typeof value !== 'function'){
       console.log(`${key} : ${value} `);  
    } 

}
/* name : AKD 
score : 300 
isAvailable : true */


// node 10_Additional/mathpi.js