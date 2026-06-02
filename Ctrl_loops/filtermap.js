// node Ctrl_loops/filtermap.js

// FILTER , MAP AND REDUCE FUNCTION OF ARRAY 
const code =["JS","JAVA","PY","RUBY","CPP"]
const values =code.forEach((item)=>{
    // console.log(item);
})
console.log(values);// undefined
// (bcz it does not return any value )
// we may use the values for further logics


// filter operation (uses callback function every value is accessed )
// HERE a filter condition is applied so to return the values satisfying
const nums=[9,8,7,6,5,4,3,2,1]
const newNums=nums.filter((num)=> num>4)
// console.log(newNums);// [ 9, 8, 7, 6, 5 ]
const mycode=code.filter((item)=>item=="JAVA")
// console.log(mycode);// [ 'JAVA' ]

/* const newNums=nums.filter((num)=> {
    num>4
    })// now it comes empty array bcz no return value comes (to get the output we must use the return keyword : return num>4)
console.log(newNums);
*/

// if same thing done thru forEach 

const Mynums=[]

nums.forEach((num)=>{
    if(num>4)
        Mynums.push(num)//method to add a value to an array
})
// console.log(Mynums);//[ 9, 8, 7, 6, 5 ]

// Example on Array of Object 

const books =[
    {
        bookname:"ABC",genre:"fiction",published:"1998",edition:"3rd"
    },
    {
        bookname:"DEF",genre:"novel",published:"1996",edition:"4th"
    },
    {
        bookname:"GHI",genre:"autobio",published:"2000",edition:"1st"
    },
    {
        bookname:"JKL",genre:"history",published:"1990",edition:"2nd"
    },
    {
        bookname:"MNO",genre:"novel",published:"1980",edition:"5th"
    },
];
let userBooks=books.filter((bk)=>bk.genre=="novel" )
// console.log(userBooks);
//output
/*
[
  {
    bookname: 'DEF',
    genre: 'novel',
    published: '1996',
    edition: '4th'
  },
  {
    bookname: 'MNO',
    genre: 'novel',
    published: '1980',
    edition: '5th'
  }
] */
 userBooks=books.filter((bk)=>bk.published>1990)// now userBooks will have new values overriden 
// console.log(userBooks);
/*
[
  {
    bookname: 'ABC',
    genre: 'fiction',
    published: '1998',
    edition: '3rd'
  },
  {
    bookname: 'DEF',
    genre: 'novel',
    published: '1996',
    edition: '4th'
  },
  {
    bookname: 'GHI',
    genre: 'autobio',
    published: '2000',
    edition: '1st'
  }
] */

/************map function of the array*********/


 const myNums=[1,2,3,4,5,6,7,8,9]
 const neNums=myNums.map((num)=> num+10)
//  console.log(`The old number were :${myNums}`);
//  console.log(`The new number are :${neNums}`);
 
/****  Chaining  *******/
// const num1=myNums.map().map() or const num1=myNums.map().filter()

const num1=myNums.map((num)=>num*10).map((num)=> num+2).filter((num)=>num%2==0)
// console.log(num1);
/*
[
  12, 22, 32, 42, 52,
  62, 72, 82, 92
]
*/

 /******** Reduce method in array ********/
 // Use cases in shopping cards and usages 
const arr1=[1,2,3,4,5]
const initial=0

/* const arrsum= arr1.reduce((accumulator,currval)=> {
return  accumulator+currval
},intialval); */

// for thr first iteration the value of accumulator is 0 and then the sum is passed on 
 const arrsum=arr1.reduce(function(acc,currval){
//     console.log(`acc:${acc} and the currval:${currval}`);
    return acc+currval
},0);
// console.log(arrsum);

/*
acc:0 and the currval:1
acc:1 and the currval:2
acc:3 and the currval:3
acc:6 and the currval:4
acc:10 and the currval:5 */

//thru arrow func 

const mytot=arr1.reduce((acc,currval)=>acc+currval,0)
// console.log(mytot);// ans is same as above 

const shopcart=[
    {
        item:"Facewash",price:299,rating:"4.2"
    },
    {
        item:"Soap",price:99,rating:"4.6"
    },
    {
        item:"Handwash",price:129,rating:"3.8"
    },
    {
        item:"Bodywash",price:199,rating:"4.0"
    },
]
const topay=shopcart.reduce((acc,item)=>acc + item.price ,0)
console.log(topay);// 726


//node Ctrl_loops/filtermap.js