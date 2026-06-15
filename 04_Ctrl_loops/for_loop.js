// //for

// for(let i = 0; i <=10; i++){
//     const element=i+1;  
//     if(element==5){
//         console.log("magic no. found");
//     }
//     console.log(element);
// }
// //  console.log(element);  cant access the element here its in scope of for loop only 
// for (let i = 1; i <= 4; i++) {
   
// let row="";
//     for (let j = 1; j <= 4; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }/* * * * * 
//     * * * * 
//     * * * * 
//     * * * *  */
// for (let i = 1; i <= 4; i++) {
   
// let row="";
//     for (let j = 1; j <=i ; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }  
// /*  * 
//     * * 
//     * * * 
//     * * * *  */

// for(let i = 0; i <=10; i++){
//     console.log(`Table of: ${i}`);
//     for(let j = 0; j <=10; j++){ 
//     console.log(i+'*'+j+'='+i*j);   
// }    
// }

// let myArray=["Ayush","Abhay","Aditya"]
// console.log(myArray.length);
// for (let i=0;i<myArray.length;i++){
//     const element=myArray[i];
//     console.log(element);
// }

// LOOP CONTROL STATEMENTS (break AND continue)

// break

for (let i =1; i<20; i++) {
    if(i==5){
        console.log(`Detected 5 : Exit`);
        break
    }
   console.log(`Value of i is ${i}`);     
}

// continue 

for (let i =1; i<=20; i++) {
    if(i==5){
        console.log(`Detected 5 `);
        continue
    }
   console.log(`Value of i is ${i}`); // does not print for value 5     
}


//node for_loop.js