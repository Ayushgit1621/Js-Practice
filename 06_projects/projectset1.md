# Projects on DOM 

## Project Link 
[Click Here](https://stackblitz.com/edit/stackblitz-starters-g9wvlqqf?file=index.html)

# Solution code

## Project 1-(Color Switching)

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'red':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('unknown color');

      /**** Can Also be Written as this  ************/
      // if (e.target.id === 'grey') {
      //   body.style.backgroundColor = e.target.id;
      // }
      // if (e.target.id === 'white') {
      //   body.style.backgroundColor = e.target.id;
      // }
      // if (e.target.id === 'blue') {
      //   body.style.backgroundColor = e.target.id;
      // }
      // if (e.target.id === 'yellow') {
      //   body.style.backgroundColor = e.target.id;
      // }
    }
  });
});
```

## Project 2-(BMI Calculation)
```javascript
// form to be selected since it has the submit button
// forms by default sends the value to url thru get or post (we need to stop it thru an  event)
const form = document.querySelector('form');
// dont take values of input here or else empty value gets fetched here (extract after value submission5ss)
//const height =parseInt(document.querySelector('height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><br>Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br>Normal Weight`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br>Over Weight`;
    }
  }
});

```

## Project-3 (Digital clock)
```javascript
const clock = document.getElementById('clock');
// also can be document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());
// as much as we refresh the Preview the Console gets the new time and we want to get it run every time in preview

// setInterval controls js events (give a method and tell the interval after which it needs to comtinuously run)
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); this Section Gives the timming continuously in the console
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 is in milliSeconds

```

## Project-4 (Guess The Number)
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```
