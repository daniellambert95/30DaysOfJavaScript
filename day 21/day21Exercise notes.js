

// Get element by tag name

document.getElementsByTagName('tagname')
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

// Get element by class name

//syntax
document.getElementsByClassName('classname')
const alTitles = document.getElementsByClassName('title')

console.log(alTitles) //HTMLCollections
console.log(alTitles.length) // 4

for (let i = 0; i < alTitles.length; i++) {
  console.log(alTitles[i]) // prints each elements in the HTMLCollection
}

// Get element by Id

//syntax
document.getElementById('id')
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

/*
Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.
*/

let firstTitlee = document.querySelector('h1') // select the first available h1 element
let firstTitleee = document.querySelector('#first-title') // select id with first-title
let firstTitleeee = document.querySelector('.title') // select the first available element with class title

// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const alllTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page



// Adding and setting attributes

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'


// Adding attributes without overriding

//another way to setting an attribute: append the class
titles[3].classList.add('title', 'header-title')

// removing attributes
titles[3].classList.remove('title', 'header-title')




// Adding text to HTML
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

// adding HTML is with innerHTML 
/*
<ul></ul>
<script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
*/



// Adding styles

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.backgroundColor = 'red'
    } else {
      title.style.backgroundColor = 'green'
    }
  })