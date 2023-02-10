// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  
  // function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
  }
  
console.log(cube(callback, 3))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))


function sayHello() {
  console.log('Hello')
}
// setInterval(sayHello, 2000) 
// it prints hello in every second, 2000ms is 2s

function sayHelloo() {
  console.log('Helloo')
}
setTimeout(sayHelloo, 3000) // it prints hello after it waits for 3 seconds.

// Functional Programming

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

let summm = 0;
const numberss = [1, 2, 3, 4, 5];
numberss.forEach(num => console.log(num))
console.log(summm)

let summ = 0;
const numers = [1, 2, 3, 4, 5];
numers.forEach(num => summ += num)

console.log(summ)

const countriess = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countriess.forEach((element) => console.log(element.toUpperCase()))

// Map
// Iterate an array elements and modify the array elements. 
// It takes a callback function with 
// elements, index , array parameter 
// and return a new array.


/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

//Example
const numberz = [1, 2, 3, 4, 5]
const numbersSquare = numberz.map((num) => num * num)

console.log(numbersSquare.join(", "))

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

//Explicit return arrow function
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)
/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
*/
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters)

// Filter
// Filters out items containing x
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((i) => i.score > 80)
console.log(scoresGreaterEighty)

// Reduce
/*
Reduce takes a callback function. 
The call back function takes 
an accumulator, current, and optional initial value 
as a parameter and returns a single value.
It is a good practice to define an initial value 
for the accumulator value. If we do not specify this parameter, 
by default accumulator will get array first value. 
If our array is an empty array, then Javascript will throw an error.
*/

const nnumbers = [1, 2, 3, 4, 5]
const sum = nnumbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// Every
/* 
Check if all the elements are similar in one aspect. 
It returns boolean
*/
const namez = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = namez.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const bools = [true, true, false, true]
const areAllTrue = bools.every((i) => i === true)

console.log(areAllTrue) 



// Find
// Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const firstNames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((i) => i.length < 7)
console.log(result)

const scorez = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scorez.find((user) => user.score > 80)
console.log(score)

// findIndex

// Return the position of the first element 
// which satisfies the condition

const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const agess = [24, 22, 25, 32, 35, 18]

const res = namess.findIndex((name) => name.length > 7)
console.log(res) // 0

const agee = agess.findIndex((age) => age < 20)
console.log(agee) // 5

// Sort
// The sort methods arranges the array elements either 
// ascending or descending order.

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 

// Sorting numbers

const nuumbers = [9.81, 3.14, 100, 37]
nuumbers.sort(function (a, b) {
  return a - b
})
console.log(nuumbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]


// Sorting Object Arrays
// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })

// or

// objArr.sort(function (a, b) {
//   if (a['key'] < b['key']) return -1
//   if (a['key'] > b['key']) return 1
//   return 0
// })

const usersz = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
usersz.sort((a, b) => {
  if (a.age > b.age) return -1
  if (a.age < b.age) return 1
  return 0
})
console.log(usersz) 