// /**********Lec16(Objects)********/

// /* Objects are declared using two methods 
// 1.As literals 
// 2.As constructors

// Singleton object is made when we declared using constructors (literals do not form singleton objects)*/

// /**********Object Literals***********/
// //Object.create // constructor type 

// const mySym= Symbol ("Key1")// Declaring a symbol to access as key of the object

// const JsUser={
// name :"Ayush",age: 20,
// "full name":"Ayush Kumar Dubey",
// location:"Noida",email:"akd@gmail.com",islogged:false,lastlogged :["Mon","Sat"],
// [mySym]:"myKey1"

// } // literal type of object declaration 
// //Key-value pair it conisders "key":"value" the data inside could be any type of value 

// console.log(JsUser.email);
// console.log(JsUser["email"]);//More preferrable bcz u cant acces certain data in dot format 
// console.log(JsUser["full name"]);// this cant be done using JsUser.full name
// console.log(JsUser[mySym]);//myKey1 
// console.log(JsUser);

// //Symbol is defined as -----const mySym= Symbol ("Key1") and then inside the object it is mentioned in a syntax --------[mySym]:"myKey1" now it is ready to be accessed 

// JsUser.email="Akd2@gmail.com"
// console.log(JsUser["email"]);// "Akd2@gmail.com" SO THIS CHANGE IS REFLECTED HERE IN THE EMAIL

// Object.freeze(JsUser)// freezes the whole object i.e. no changes will be reflectd on the object elements 
// JsUser.email="Akd2@gcet.com"
// console.log(JsUser["email"]);// "Akd2@gmail.com" THE RECENT CHANGE IS NOT REFLECTED DUE TO THE OBJECT BEING FREEZED 
// JsUser.greeting = function(){
//     console.log("Hello User Ayush!!"); 
// }
// console.log(JsUser.greeting);//undefined bcz jsuser is freezed 


// const JsUser2={
// name :"Ayush Dubey",age: 21,
// "full name":"Ayush Kumar Dubey",
// location:"Noida",email:"akd1@gmail.com",islogged:true,lastlogged :["Fri","Sat"],
// [mySym]:"myKey2"

// }

// JsUser2.greeting = function(){
//     console.log("Hello User Ayush!!"); 
// }
// console.log(JsUser2.greeting);//[Function (anonymous)]
// console.log(JsUser2.greeting());//undefined 


// JsUser2.greetings=function(){
//     console.log(`Hello welcome back !!,${this.name}`);// includes the name from the object JsUser2    
// }
// console.log(JsUser2.greetings());



/**********Lec17 (Objects)*********/

// const tinder = new Object()// singleton object 
// tinder.id="1621akd"
// tinder.name="Ayush"
// tinder.islogged=false


// console.log(tinder);// { id: '1621akd', name: 'Ayush', islogged: false }
 
// console.log(Object.keys(tinder));//  ['id','name','islogged'] array of keys

// console.log(Object.values(tinder));// ['1621akd','Ayush','false'] array of values

// console.log(Object.entries(tinder));// array of key value pair of every element [['id','1621akd],['name','Ayush'],['islogged','false']]

// console.log(tinder.hasOwnProperty('islogged'));// true

// const regUser={
//     email:"akd@gmail.com",
//     fullname:{
//         user:{
//             firstname:"Ayush",
//             lastname:"Dubey"
//         }
//     }
// }
// console.log(regUser);//  {
// //   email: 'akd@gmail.com',
// //   fullname: { user: { firstname: 'Ayush', lastname: 'Dubey' } }
// // }


// console.log(regUser.fullname);// { user: { firstname: 'Ayush', lastname: 'Dubey' } }

// console.log(regUser.fullname.user);// { firstname: 'Ayush', lastname: 'Dubey' }

// console.log(regUser.fullname?.user.firstname);// Ayush and here ques mark isused to check if there is fulllname existing then only go to the next step 
// console.log(regUser.midname?.user.firstname);// UNDEFINED---------since the midname element was not present here in the object 


// //object merging

// const obj1={1:"a",2:"b",3:"c"}
// const obj2={4:"d",5:"e",6:"f"}

// const obj3={obj1,obj2};
// console.log(obj3);
// // {
// //   obj1: { '1': 'a', '2': 'b', '3': 'c' },
// //   obj2: { '4': 'd', '5': 'e', '6': 'f' }
// // }


// const obj4=Object.assign({},obj1,obj2)
// console.log(obj4);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } same result 


// //90% of times we will be using this method of concatinaton  through spread function 

// const obj5= {...obj1,...obj2}
// console.log(obj5);//


// //When values come from database then they come as array of objects 
// const users=[
//     {
//         id:"1",name:"Akd"
//     },
//     {
//         id:"2",name:"skd"
//     },
//     {
//         id:"3",name:"hkd"
//     },
//     {
//         id:"4",name:"sskd"
//     },
// ]
// console.log(users[1].email);


/***********Lec18(Objects and api overview )**********/

//DESTRUCTURING OF OBJECTS 
const course ={
    coursename:"JS in hindi",
    price:"999",
    CourseTutor:"Hitesh"
}
//to access the elemnts 
// course[Tutor]
// course.Tutor// both the ways are fine but we will go with a new better syntax 

const{CourseTutor:Tutor}=course// This is how we destructure i.e. we renamed it shorter for better resusability 
console.log(Tutor);// Hitesh

const navbar =({company})  =>{

}

navbar(company="Ayush")//Destructuring

//Arrays are also destructured but will see later on according to usage 


/******APIs*********/
//These are the ways to write and store the values from the backend to be documented Defiition ----An API (Application Programming Interface) is a set of rules and protocols that allow different software programs to communicate with each other and exchange data. It acts as an intermediary, defining the methods and data formats that applications can use to request and receive information or functionality, without needing to know the internal workings of the other system. 

// earlier the values use to be in xml. structure now they are in json.(any object declared without name is json)

// {
//     "name" :"Ayush",
//     "coursename":"JS in hindi",
//     "price":"Free"

// }

//APIs are also received in the array format thats the array of objects and from there we will deal according 
[
    {},
    {},
    {}
]

//An Open api source Randomuserme api
//An json formatter neede to decode the json codes.
//we can also develop our own json formatter 



 












//node 02_basics/Objects-16-18.js


