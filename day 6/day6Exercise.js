import {mernStack} from './mern_stack.js'
// import { countries } from './day 5/countries.js'
// import { webTechs } from './day 5/web_tech.js'

// Exercise 1
console.log("xxxxxxx")

for (let i = 0; i<=100; i++) {
    console.log(i)
}

let e = 0
while (e <= 100){
    console.log(e)
    e++
}

let a = 0
do {
    console.log(a)
    a++
} while (a<=100)

// 1.4

let hashString = '#'
for(let num = 1; num<8; num++){
    console.log(hashString.repeat(num))
}

for(let sqrRoot = 0; sqrRoot<=10; sqrRoot++){
    console.log(`${sqrRoot} x ${sqrRoot} = ${(sqrRoot * sqrRoot)}`)
}

for ( let even = 0; even<=100; even++){
    if(even%2==0){
        console.log(even)
    }
}
for ( let odd = 0; odd<=100; odd++){
    if(odd%2!=0){
        console.log(odd)
    }
}
let res = 0
for (let sumOf=0; sumOf<=100; sumOf++){
    res = res + sumOf
}
console.log(res)

const randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(let x in fullStack){
    for (let y in fullStack[x]){
        console.log(fullStack[x][y])
    }
}