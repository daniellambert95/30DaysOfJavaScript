// creating multiple elements and appending to parent element
// let title
// for (let i = 0; i < 3; i++) {
//     title = document.createElement('h1')
//     title.className = 'title'
//     title.style.fontSize = '24px'
//     title.textContent = i
//     document.body.appendChild(title)
// }

// Create a div container on HTML document and create 0 to 100 numbers dynamically 
// and append to the container div.

// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red


const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.fontSize = '24px';


for (let i = 0; i < 101; i++) {
  const number = document.createElement('span');
  number.style.marginRight = '10px'; // Add space between numbers
  number.style.marginBottom = '10px'; // Add space between lines
  number.textContent = i;
  if (isPrime(i)) {
    number.style.backgroundColor = 'red';
  } else if (i % 2 === 0) {
    number.style.backgroundColor = 'green';
  } else {
    number.style.backgroundColor = 'yellow';
  }
  container.appendChild(number);
}

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
    // Check if the number is divisible by any number from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    // If the number is not divisible by any number from 2 to the square root, it is prime
    return true;
  }

document.body.appendChild(container);
