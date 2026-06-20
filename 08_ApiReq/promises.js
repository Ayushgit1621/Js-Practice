
/* If the fetch has a 
response----- comes in then()
error-----comes in catch()
finally()-----runs always everything comes in this 

 Now we create promises
 Earlier we used bluebird to use all the functionality of fetch, then, catch ----in core js */

const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, crytography, network calls 
    setTimeout(() => {
        console.log('Async task is completed');//3rd comes this due to 2 sec 
        resolve()
    }, 1000);
})

// .then(function(){}) has a callback function with an arg which is the automatically received value from setTimeout (from the parameter of resolve)

promiseOne.then(function(){
    console.log('Promise consumed');// 4th o/p is comes this 
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2');//comes first line o/p 
        resolve()
    }, 1000);
}).then(()=>{
    console.log("Async 2 consumed");//2nd then this comes 
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
       console.log("Async task 3"); 
       resolve({username:"Ayush",email:"122333@exmaple.com"})// here in the parameter mostly an obj is passed but we can pass array, func, string 
    }, 1000);
   
})

promiseThree.then(function(user){
    console.log(user); // { username: 'Ayush', email: '122333@exmaple.com' } this comes as output
})

// This confirms that whatever paramter we pass in the resolve, we get it in the result of the callback func of .then

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
    let error = true // if error value true-----> rejected and if false-----> resolved 
    if(!error){
        resolve({username:"AKD",pass:"1234"})// goes in then
    }
    else{
        reject('Error : Something went wrong')// this goes in catch
    }
}, 1000)
})


// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username

// })
// console.log(username);// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error : Something went wrong".] {

// We use .then chaining 

const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username); // if error= false in the promise 
}).catch(function(error){ // here the parameter error has the value coming from rejection
    console.log(error); // if the error= true above in the promise 
}).finally(()=>console.log("The promise is either resolved or rejected")) // it is kind of default, always runs 



/******************async await  ***********/
// Same as .then and .catch i.e. waits for the work nd if error then gives it right away (but here we dont handle catch gracefully) but used at places where DB not connected and dont need to move forward

const promiseFive = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username :"JSAKD", pass:"12345"})
        }
        else{
            reject('ERROR : CODE went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}

consumePromiseFive();

/*
async function consumePromiseFive(){
    const response = await promiseFive // promiseFive is an obj hence it is not consumed as promiseFive()
    console.log(response); 
}
 gives this error when the error = True in promiseFive 

consumePromiseFive() // This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR : CODE went wrong".] {

 There is no graceful way to handle the rejection i.e. when error occurs 

 if error = false all the results are tota;;y fine 

*/

async function getAllUsers(){
 // also can use:  'https://api.github.com/users/Ayushgit1621'
 try{
     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    
     console.log(typeof response); // object
     const data = await response.json() // await bcz it also takes time to convert 
     console.log(typeof data); // object 
     console.log(data);
 }
    catch (error){
        console.log("E :", error);
    }
 
}

// getAllUsers()

fetch('https://api.github.com/users/Ayushgit1621')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log('error'))
.finally(()=>console.log('The fetch either gives response or the error')
)

// until here all the previous promises O/P comes later and github data fetch comes first (Which means those do await till the end)


