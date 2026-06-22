function setUserName(username){
    //complex DB calls 
    this.username = username
    console.log("called");
    
}
function createUser(username,email,pass){
    setUserName.call(this, username) // called means we must have access of setUserName() (without .call the method gets called but then the ref also gets omitted out after call Hence  .call holds the ref )

    // Here this passed as parameter makes it possible to get the value of username

    this.email = email
    this.pass = pass
}

const Ayush = new createUser ("Ayush","ayush@f.com","123") 
console.log(Ayush); // createUser { email: 'ayush@f.com', pass: '123' } username didnt come here 




//node 09_OOP/call.js