# Closures 
A combination of func bundled together with ref to its surrounding state. Gives us access to an outer func's scope from a inner func. In JS, closures are created every time  a func is created.

# Lexical scoping 
```javascript
function init(){
    var name = "Mozilla"; // loc var created by init
    function displayName(){
        // displayname()// this inner func forms the closure
        console.log(name); // var declared in the parent func
    }
    displayName();
}
init();
```
