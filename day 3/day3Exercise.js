let firstName = "Daniel" 
let lastName = "Lambert"
let country = "Germany"
let city = "Berlin"
let age = 28
let isMarried = false
const now = new Date()
let year = now.getFullYear()

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

console.log(typeof('10') == 10)
console.log(parseInt('9.8') == 10)

console.log(1 == true)
console.log(false == false)
console.log(10 == 9+1)

console.log(true == false)
console.log(200 == 100 + '100')
console.log(1 == false)
// Excericse 1 was a bit easy so I am skipping some..

// Excercise 2 

// let base = prompt("Enter the base")
// let h = prompt("Enter the height")
// let answer = ( 0.5 * base * h)
// console.log(`The area of the triangle is ${answer}`)


// let a = prompt("Enter triangle side 1")
// let b = prompt("Enter triangle side 2")
// let c = prompt("Enter triangle side 3")
// let res = ( parseInt(a) + parseInt(b) + parseInt(c))
// console.log(`The perimeter of the triangle is ${res}`)

let yourName = prompt("Enter your name here:")

let nameLength = yourName.length

if (nameLength > 7){
    console.log("Your name is long")
} else {
    console.log("Your name is short")
}

var MyDate = new Date();
var MyDateString;

MyDate.setDate(MyDate.getDate() + 20);

MyDateString = ('0' + MyDate.getDate()).slice(-2) + '-'
             + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
             + MyDate.getFullYear();

console.log(MyDateString)