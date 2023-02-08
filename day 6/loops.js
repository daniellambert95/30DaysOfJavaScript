/*
FOR LOOP

for(initialization, condition, increment/decrement){
  // code goes here
}
*/

for(let i = 0; i <= 5; i++){
  console.log(i)
}

for(let i = 0; i<=5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)


// WHILE LOOP

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// DO WHILE LOOP

let e = 0
do {
  console.log(e)
  e++
} while (e <= 5)

/*
FOR OF LOOP

for (const element of arr) {
  // code goes here
}
*/

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
  console.log(num)
}

for (const num of numbers) {
  console.log(num * num)
}

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum += num  
}
console.log(sum) 

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

for (const tech of webTechs) {
  console.log(tech[0])
}

// BREAK
// Used to exit the loop

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }

// CONTINUE
// Continue is used to skip iterations
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
