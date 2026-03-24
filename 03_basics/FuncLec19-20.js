function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
//sayMyName()
function add(num1,num2)//These are called parameters here in the paranthesis 
{
    console.log(num1+num2);
}
add(3,4);
add(3,"4");
add(3,"a");

const res=add(3,4);// These are called Argument here in the paranthesis 


console.log(res); // Result is undefined bcz the function does not return the sum of the numbers

function addnum(num3,num4){
    // let res1=num3+num4
    // return res1 
    return num3+num4
}
const res1=addnum(3,5)
console.log("Result:",res1);// Output is --Result: 8

function loginUser(username)//If written username=Sam then always by default sam comes or else the value passed will override sam  



{
    if(!username)// it can be aslo written as if(username==undefined)
        {
            console.log("Please enter a username");
            //if return written here then the logged in line wont get as output
    }
    return `${username} just logged in`
}

// console.log(loginUser("Ayush"));// Ayush just logged in
console.log(loginUser());//output----Please enter a username
// UNDEFINED just logged in


//********--------Lec20-------------*******/

function calcCartPrice(...num1)//rest operator used when there could be more than one arguments passed to the parameter
{
    return num1
}
console.log(calcCartPrice(200,400,500,2000));//[200,400,500,2000]

function calcCart2(val1,val2,...num3)// here val1=200,val2=400,rest all values in num3
{
    return num3
}
console.log(calcCart2(200,400,500,2000));//[500,2000]


//Eg 1 fo object passing in the function 

function handleobj(anyobj){
    console.log(`Username is ${anyobj.username} & roll no. is ${anyobj.roll}`);//Username is Ayush & roll no. is 90

}// function does not know if the user is coming ayush coming hence we put anyobj.username or anything 
// next step needs the handleobj(obj call)
 handleobj({
    
    username:"Ayush",roll:90
 })

//Eg:2 of object passing in the Function

const user1={
    username:"Ayush",rolls:30
}
function handleobj(anyobj){
    console.log(`Username is ${anyobj.username} & roll no. is ${anyobj.roll}`);//Username is Ayush & roll no. is undefined

}
 handleobj(user1)

const myNewArray=[15,45,60,75]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
/* or we could also do it by 
console.log(returnSecondValue([15,45,60,75]))*/
