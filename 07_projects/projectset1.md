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