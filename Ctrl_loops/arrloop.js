// // ArrayLoops 

// //for of 

// // ["","",""]
// // [{},{},{}]
const arr=[1,2,3,4,5]
// for (const i of arr){// here the loop is syntaxed as i over which thing (here it is arr)
//     console.log(i);// gives the values at those indices 
// }

// const greet="Hello world !!"
// for (const i of greet){
//     if(i==" ")
//     continue
//     console.log(`Each char is ${i}`);      
// }

 // Maps type of object with only unqiue values (kind of array)
// Map holds key-value pairs and remembers the insertin order of the keys and any value coukd be key or value (primitive or objects values(string,arr ect.) )

const map= new Map()
map.set('IN',"INDIA")
map.set('RUS',"RUSSIA")
map.set('CHN',"CHINA")
map.set('JPN',"JAPAN")
map.set('NEP',"NEPAL")
map.set('IN',"INDIA")// wont get added to the map since it contains unique values only 

// console.log(map); 
// /* Map(5) {
//   'IN' => 'INDIA',
//   'RUS' => 'RUSSIA',
//   'CHN' => 'CHINA',
//   'JPN' => 'JAPAN',
//   'NEP' => 'NEPAL'
// }
//   comes as a type of object with unique values */

// // Applying loop on map  
// for (const key of map){
//     console.log(key);
// }

// // output 
// /* [ 'IN', 'INDIA' ]
// [ 'RUS', 'RUSSIA' ]
// [ 'CHN', 'CHINA' ]
// [ 'JPN', 'JAPAN' ]
// [ 'NEP', 'NEPAL' ]*/

// for (const [key,value] of map){
//     console.log(key, ':-', value);
// }

// output
/*
IN :- INDIA
RUS :- RUSSIA
CHN :- CHINA
JPN :- JAPAN
NEP :- NEPAL */

const myobj={
    'game1': 'PUBG','game2':'COC','game3':'COD',
    'game4':'GTA'
}

// for (const [key,value]of myobj){
//     console.log(key, ':-', value);
//     //TypeError: myobj is not iterable
// }

// for in loop (object is iterated by this (not only used for objects) )

for (const key in myobj) {
//     console.log(key);// gives out all the keys of the object   
// game1
// game2
// game3
// game4 


    // console.log(myobj[key]);// gives out all the values of the object at those given keys 
/* 
PUBG
COC
COD
GTA */  
    // console.log(`${key} shortcut is for ${myobj[key]} `);// gives out all the values of the object at those given keys 

// output 
/*
game1 shortcut is for PUBG 
game2 shortcut is for COC 
game3 shortcut is for COD 
game4 shortcut is for GTA  */ 

}
// output 
/*
game1 shortcut is for PUBG 
game2 shortcut is for COC 
game3 shortcut is for COD 
game4 shortcut is for GTA  */ 

// for in used on array 
// in Array all the keys are always the indices 
const prog=["JS","JAVA","PYTHON","CPP","CSS"]
for (const i in prog){
    // console.log(i);// gives all the keys of the array: 0 1 2 3 4
    // console.log(prog[i]);//gives the values at these key positions     
}

// for in loop on map (Cant be done)

for (const key in map) {    
    // console.log(key);//no output (since it is not iterable)
    
}


// objects we mostly use ---- for in
// arrays we use ---- for of and others 
// some loops are diretly added to properties of array 
// for each loop (Mostused for arrays)

const lang =["JS","JAVA","PY","RUBY","CPP"]

lang.forEach(function (i){
    // console.log(i);// JS PY RUBY CPP

})

// also can  be used thru arrow func 

lang.forEach((i)=>{
    // console.log(i);// JS PY RUBY CPP
    
})



// NORMAL FUNC-- function name(){}
// callback FUNC-- has no name function (i){give definition here } and i nrings parameters from the array 

//forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

// callbackfn ----A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//  thisArg----- An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

function printMe(item){
    // console.log(item);
}
lang.forEach(printMe)
// JS PY RUBY CPP This was thru func call

lang.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// output 
/* 
JS 0 [ 'JS', 'JAVA', 'PY', 'RUBY', 'CPP' ]
JAVA 1 [ 'JS', 'JAVA', 'PY', 'RUBY', 'CPP' ]
PY 2 [ 'JS', 'JAVA', 'PY', 'RUBY', 'CPP' ]
RUBY 3 [ 'JS', 'JAVA', 'PY', 'RUBY', 'CPP' ]
CPP 4 [ 'JS', 'JAVA', 'PY', 'RUBY', 'CPP' ] */


// Array of Objects thru for each 

const mySub=[
    {
        name:"OOP",code:"BCS403",credit:"3"
    },
    {
        name:"OS",code:"BCS401",credit:"3"
    },
    {
        name:"TAFL",code:"BCS402",credit:"4"
    }
]

mySub.forEach((item)=>{
    console.log(item.code,item.name,item.credit);   
})

//output
/*
BCS403 OOP 3
BCS401 OS 3
BCS402 TAFL 4 */



