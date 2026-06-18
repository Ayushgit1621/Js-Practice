# Projects on setTimeout and setInterval 

## Project-5 (Keyboard Check)
```javascript
console.log("Project-5");

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    
  </tr>
</table>
</div>
  `
})


```

## Project-6 (Unlimited color change)
```javascript
console.log('JS color loaded successfully'); // generate random color thru random hex values

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor()); // since here we will get 16 values (these are 16 positions) and here we did floor bcz values in decimal wont come

let intervalId; // but this value is being overriden again and again
const strtChngclr = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgclr, 2000);
  } // to make null concept validated

  function changeBgclr() {
    document.body.style.backgroundColor = randomColor();
  }
}; // here the continuous color changing starts thru start button

const stpChngclr = function () {
  clearInterval(intervalId);
  intervalId = null; // for clean code practice
}; // Here the continuous color changing stops thru stop button

document.querySelector('#start').addEventListener('click', strtChngclr);

document.querySelector('#stop').addEventListener('click', stpChngclr);

```