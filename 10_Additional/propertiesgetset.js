// Here We see the old syntax of the get set methods thru properties 

function User(email, pass){
    this._email = email;
    this._pass = pass;

    // Here (func also obj) object itself allows to call its properties

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set :function(value){
            this.email =value
        }
    })
    Object.defineProperty(this,'pass',{
        get: function(){
            return this._pass.toUpperCase()
        },
        set :function(value){
            this.pass =value
        }
    })
}

const ayush = new User ("ayush@g.com","08akdu642")
console.log(ayush.email);
console.log(ayush.pass);





// node 10_Additional/propertiesgetset.js