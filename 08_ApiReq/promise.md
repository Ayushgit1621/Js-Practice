/*In js classes concept of classes is less and we more often see objects reference 

// The Promise object represents the async operations eventual completion(or failure) not urgently.It acts as a placeholder for data that will be available in the future.
 ### It is used to handle asynchronous operations—tasks like----
1. fetching data from a server
2. Downloading a file
3. or waiting for a timer—that take time to complete so your code doesn't freeze while waiting.
4. File access is thru kernel and then works 


## A Promise has three states, one can be in one of these three
1.pending : initial state, meither fulfilled nore rejected.
2.filfilled : the operation was completed successfully
3.rejected : meaning that the operation failed 

More often we consume promises rather thaan creating 


## Fetch API 
// Fetch feature in node.js was introduced later since it was a browser ApI, its implementation was dependent on a browser-base! Web Streams API and Abort Controller. which was not available in Node.js  

//Abortcontroller--- when node request goes thru fetch it can be aborted thru browser 

//The global fetch () method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.


// A fetch() promise does not reject on HTTP errors (404,etc.) These are received in Response and the then....

# Lec- 41 VERY IMP 

fetch gets executed on priority (thru--priority/fetch/micro-task Queue)
It gets executed even before setTimeout

Since its an promise object hence it gets executed before any other function working thru. 

fetch gets divided in two parts to work---

1. This goes on space occupency for variable and memories (goes first)--- divides in two arrays containing functions 

a). onfulfilled[]---this is the resolve of promise
b). onRejection[]----this is the reject of promise

directly pushing values to these arrays are not allowed

2. This goes to handle  Browser/node API request
THE NETWORK REQUEST goes from here, we cant fire this request directly either the browser or the node environment gives some resource for the request.

a). If request goes (be it any result)---c resolve/onfulfilled[] 
b). If request doesnt go ---- value goes to  onRejection[] 

These are inside Data Section : Initially carrying empty value then according to the value obtained it gets fulfilled by either of the arrays stated above.






