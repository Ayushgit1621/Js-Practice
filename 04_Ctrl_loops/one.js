// if statement 
const isLogin=true
const temp=41
if(3!=2){// condition
    console.log("executed");
}


if(2==="2"){// condition checks if same data type or not 
    console.log("checked data type also");
}else
    console.log("not same value");


// <,>,==,<=,>=,!= These are all compariosn operators ==== ---this checks the data type also 
// !== even is type is unequal this gives true 


if (temp<50){
    console.log("temp is less than 50");
}else{
    console.log("temp is greater than 50");
}

/** This one is for scope  */

const score=200
if (score>100){
    const power ="Gold"
    var league="3rd"
    console.log(`User power : ${power}`);
    console.log(`User league : ${league}`);
}// Here if has its own scope (Const---local/ functional scope)
// Here if var is used it has global scope hence it can be accessed outside too !!
// console.log(`User league : ${league}`); this part cane be executed here since the value of var is accessed globally 
// console.log(`User power : ${power}`); this part doesnt use power since its scope was inside the if only 


// THE SHORTHAND PRACTICE 
const bal=1000
if(bal>500)console.log("passed");// used mostly for one liners 


//if(bal>500)console.log("passed"),console.log("min");THIS IS NOT A GOOD PRACTICE OF WRITING CODES 


//if else Ladder 
if(bal<500){
    console.log("Less than 500");
}else if(bal<750){
    console.log("Less than 750");
}else {
    console.log("less than 1500");
}

// This is how the logic behind user logins are designed 
const userLogged=true
const debit=true
const LoggedGoogle=false
const LoggedEmail=true
const guest=false
if(userLogged && debit){
    console.log("Allow to buy");
}
if(LoggedGoogle||LoggedEmail||guest){
    console.log("Login valid");
}

// Switch Case-- this is used to design the menu driven cases for  multiple options 

const month =3

switch(month){// Shift+alt+down arrow to duplicate 
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
        defualt:
        console.log("Invalid month");
}// break is used bcz if not used all the cases get executed after one matched case (Except default)
// Means if case 3 is matched 4,5 also gets executed if break is not used 
// cases can be string, no., all things (also decimals)

//THE CONCEPT OF TRUTHY VALUE AND FALSY VALUE 
const userEmail="ay@ayush.com"
if(userEmail){// means if the usermail has the any given value it is considered true only 
    console.log("Got the email");
}else {// if email string is empty it is considered to be false 
    console.log("Didnt get Email")
}

// Falsy values ----0,false,-0,BigInt:0n,"",null,undefined,NaN


// Truthy values---- "0",'false'," ",[]-empty array,{}-empty object, function(){}-empty func

// all values except the above are truthy (also an empty Array)
const userEmail1=[]

if(userEmail1.length===0){
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Empty Object");//Objcet.keys(emptyObj) gives an array 
}

/*false ==0----true
false==''---true
0==''---true */

// Nullish Coalescing Operator(??): Works or Null and Undefined values 
let val1,val2,val3,val4,val5,val6;
val1=5??10//5
val2=null??10//10
val3 =undefined ?? 30//30
val4=null??20??10//20
val5=null ?? undefined//undefined 
val6=undefined??null//null
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);

// this is mostly used in Database queries values (returned by Functions) recieved if any of them being null or undefined then the next value is accepted 

// TERNARY oPERATORS
// SYNTAX----condition? true:false
const price =100
price >=80?console.log("No buy"):console.log("Buy")

const score =300
score<=250 ?console.log("Lost Match"):console.log("Won Match");







