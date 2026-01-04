/********* Lec-14 (Array)**********/
/* 1.Arrays are objects storing collection of multiple items under a single variable name 
2. Here arrays can be resixed and contain heterogenous data types
3. Here any value can be accessed only through index values as numeric values of the index of an element of the array
4. Array indices start from zero



5. Arrays on copy ops here form shallow copies mean they share the same reference point i.e. if we make change in the copied values then they reflect in the original array also.



Deep copy : Here the changes made in copied array isnt reflected on the original one bcz the reference is not the same */

const myArr=[0,1,2,3,4,5, "Ayush", true]
const myHero=["APJ","BOSE","VK","NFAK"]
// Array declared in console has functions and properties as well as pototype access 
const myArr2= new Array(1,2,3,4)
console.log(myArr[0]);


// Array Methods 

myArr.push(6)
myArr.push(8)
console.log(myArr);// two values added at the end 
myArr.pop()// Removes the last element of the array

myArr.unshift(9)// adds the value at the beginnig but its used only when very much required bcz it needs all the values to be shifted by their positions 
myArr.shift()// removes the first elemnt from the array
console.log(myArr);

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1 bcz it does not exist in the array 

const newArr= myArr.join()
console.log(myArr);
console.log(newArr);// String of all array elements separated by commas

// slice and splice
const myArra=[0,1,2,3,4,5]
console.log("original",myArra);//[0,1,2,3,4,5]
const myArr3 = myArra.slice(1,3)// returns the section of the array excluding the 3rs index 

console.log(myArr3);[1,2]
console.log("sliced",myArra);//[0,1,2,3,4,5]

const myArr4 = myArra.splice(1,3)// Here the last index is included as well as the elements taken in splice permanently discarded from the original array
console.log(myArr4);//[1,2,3]
console.log("spliced",myArra);//[0,4,5]


/*********(Lec-15)Array part-2**********/
//inside console for the array under the prototype there are certain methods also

const mrvlhero=["Thor","Irnman","Capt"]
const dchero=["flash","superman","batman"]

mrvlhero.push(dchero)
console.log(mrvlhero);// [ 'Thor', 'Irnman', 'Capt', [ 'flash', 'superman', 'batman' ] ]

console.log(mrvlhero[1][3]);// flash

// to avoid this we use spread operator


mrvlhero.push(...dchero)
console.log(mrvlhero);// [ 'Thor', 'Irnman', 'Capt', 'flash', 'superman', 'batman' ]

console.log(mrvlhero2[3]);// flash
// or we can just do 
const all_new=[...mrvlhero,...dchero]
console.log(all_new);


//Here we are using the concat function 
const allhero= mrvlhero.concat(dchero)

console.log(allhero);// [ 'Thor', 'Irnman', 'Capt', 'flash', 'superman', 'batman' ]

console.log(allhero[3]);//flash


const Arr5= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real= Arr5.flat(Infinity)//bracket accepts upto what depth is the flattening needed means here in above example we need depth till 3

console.log(real);//[1,2,3,4,,5,6,7,6,7,4,5]


console.log(Array.isArray("Ayush"));//false
console.log(Array.from("Ayush"));// makes this as an array ['A','y','u','s','h']
console.log(Array.from({name:"Ayush"}));// INTERVIEW QUES HERE IT NEEDS EITHER KEYS OR VALUES ARRAY TO BE SPECIFIED 

let scr1=100
let scr2=300
let scr3=500
console.log(Array.of(scr1,scr2,scr3));











//node 02_basics/Lec14-15.js

