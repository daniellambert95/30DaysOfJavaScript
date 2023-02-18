// Promises

// This promise is set with resolve and takes the .then
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))


// This promise is set with reject and will use the .catch 
// Promise
const doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise2
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))


// Fetche API

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

// Async and Await

const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)


const urll = 'https://restcountries.com/v2/all'
fetch(urll)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))

const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()


function timeDelay3s(bool) {
  setTimeout(() => {
      if (bool == true) {
          console.log('3s has passed')
          console.log('-------------')
      }
  }, 3000);
}

console.log(timeDelay3s(true))