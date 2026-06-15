 document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul");
    }, false)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        e.stopPropagation()
    }, false)
    
    document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)  