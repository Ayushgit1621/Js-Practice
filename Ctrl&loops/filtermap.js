// node Ctrl_flow/filtermap.js
const code =["JS","JAVA","PY","RUBY","CPP"]
const values =code.forEach((item)=>{
    console.log(item);
})
console.log(values);// undefined
// (bcz it does not return any value )
// we may use the values for further logics


// filter operation (uses callback function every value is accessed )
// HERE a filter condition is applied so to return the values satisfying
const nums=[9,8,7,6,5,4,3,2,1]
const newNums=nums.filter((num)=> num>4)
console.log(newNums);// [ 9, 8, 7, 6, 5 ]
const mycode=code.filter((item)=>item=="JAVA")
console.log(mycode);// [ 'JAVA' ]

/* const newNums=nums.filter((num)=> {
    num>4
    })// now it comes empty array hence 
console.log(newNums);


