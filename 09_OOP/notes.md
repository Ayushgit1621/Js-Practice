# JS and Classes 

1. Earlier it didnt exist at all and even noe technically it doesnt exist in JS.
2. JS is primarily a prototype based lang i.e. Objects can directly inherit properties and methods from other objects.
3. Classes here are just syntactic sugar to provide developers from class based lang (Java, C++) a familiar environment (originally it is done thru prototype only)


## OOP in JS

### Object ---- 
// Is a collection of properties (varibales, constants) and methods

Eg: toLowerCase, Promises

## Why use OOP here 

To organize code better and make it reusable, scalable, and easier to maintain.

## Without OOP:

```javascript
const user1 = {
  name: "Ayush",
  login() {
    console.log("Logged in");
  }
};

const user2 = {
  name: "Rahul",
  login() {
    console.log("Logged in");
  }
};
```
## With OOP

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log("Logged in");
  }
}

const user1 = new User("Ayush");
const user2 = new User("Rahul");
```

## Parts of OOP

* Object Literal
* Constructor function
* Prototypes (LEC-43)
* Classes (LEC-45)
* Instances (new, this)

### 4 pillars of OOP 
* Abstraction
// What Do We See?
fetch(url)
"We know WHAT it does, but not HOW it does it internally."

That is Abstraction.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data));
```
* Encapsulation

// username (data)
login() (behavior)

Both are packed inside one class → Encapsulation

```javascript
class User {
    constructor(username) {
        this.username = username;
    }

    login() {
        console.log(`${this.username} logged in`);
    }
}

const user1 = new User("Ayush");

user1.login();
```
* Inheritance
"Child acquires properties and methods of Parent."
// Admin automatically gets login() from User.

```javascript
class User {
    login() {
        console.log("User Logged In");
    }
}

class Admin extends User {
    deletePost() {
        console.log("Post Deleted");
    }
}

const admin = new Admin();

admin.login();
admin.deletePost();
```
* Polymorphism
// "Same method, different behavior."
// output comes : 
Normal User
Admin User

```javascript
class User {
    role() {
        console.log("Normal User");
    }
}

class Admin extends User {
    role() {
        console.log("Admin User");
    }
}

const user = new User();
const admin = new Admin();

user.role();
admin.role();
```

## New Keyword

1. When we write 'new' Keyword an empty obj gets created (called instance)
2. The constructor func gets called due to new keyword 
3. this keyword packs the args into it and gives us 
4. We obtain the values thru the func









