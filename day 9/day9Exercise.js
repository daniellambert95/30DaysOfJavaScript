// forEach
// Iterates over an array of elements and executes a function

// map
// Iterates over an erray of elements and modifies them.

// filter
// Filters out items based on a condition and returns a new array

// reduce
// Takes a callback function and accumalates the elements, returning a single value


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Ireland', 'Egypt', 'Iceland', 'France', 'Nigeria', 'Greenland', 'Germany']
const names = ['Daniel', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    }
]

countries.forEach(country => {
    console.log(country)
})

names.forEach(name => {
    console.log(name)
})

numbers.forEach(number => console.log(number))


const countriesToUpperCase = countries.map(country =>{
    return country.toUpperCase();
})
// console.log(countriesToUpperCase)
countriesToUpperCase.forEach(country => {
    console.log(country)
})

const countriesLength = countries.map(country =>{
    return country.length
})

console.log(countriesLength)

const sqrNumbers = numbers.map(number =>{
    return number*number
})

console.log(sqrNumbers)

let prices = products.map(product => {
    return `${product.product}:${product.price}`
})
console.log(prices)

const countryWithLand = countries.filter(country => country.includes('land'))
console.log(countryWithLand)

const countryWith6Ch = countries.filter(country => {
    return country.length == 6
})
console.log(countryWith6Ch)

const startsWithE = countries.filter(country => {
    return country.startsWith('E')
})
console.log(startsWithE)

let sum = 0
const sumOfNumss = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumOfNumss)

const sumOfNumsss = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sumOfNumsss)


// Exercises 2

let sumProductPrices = products.map(product =>{
    return product.price;
}).filter(price => {
    return price > 0;
}).reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
})

console.log(sumProductPrices)


const categorizeCountries = (countries) => {
    let newList = countries.filter(country => {
        return country.includes('land') || country.includes('ia') || country.includes('island') || country.includes('stan');
    })
    return newList;
}
console.log(categorizeCountries(countries))


const getFirstTenCountries = (countries) => {
    countries = countries.slice(0, 10)
    let firstTen = countries.map(country => {
        return country;
        })
    return firstTen;
}
console.log(getFirstTenCountries(countries))