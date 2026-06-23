const User = {
    _email : "h4akd@g.com",
    _pass: "aabbbc",

    get email(){
        return `ayush${this._email.toUpperCase()}`
    },
    set email(value){
        this._email= value
    }
}




// node 10_Additional/objgetset.js