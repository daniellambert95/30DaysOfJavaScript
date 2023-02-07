const arr = [1,2,3,4,5]
console.log(arr.length)
console.log(arr[0], arr[2], arr[4])

let reversed = arr.reverse()
console.log(reversed)

import { countries } from './countries.js'
import { webTechs } from './web_tech.js'

console.log(countries)
console.log(webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ")
console.log(words)
console.log(words.length)

if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortedAges = ages.sort()
let minAge = sortedAges[0]
let maxAge = sortedAges[sortedAges.length -1]

console.log(sortedAges, "min age:", minAge, "max age:", maxAge )