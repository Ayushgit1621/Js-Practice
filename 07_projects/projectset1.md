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