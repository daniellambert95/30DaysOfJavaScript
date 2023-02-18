const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => data.forEach(element => {
    let languages = element['languages']
    console.log('Country:', element['name'],
    '\nLanguage:', languages[0]['name'], 
    '\nPopulation:', element['population'],
    '\nArea:', element['area'])
  })
  );

fetch(catsAPI)
  .then((response) => response.json())
  .then(data => data.forEach(cat => {
    console.log(cat['name'])
  })
  );


  
// Another Answer

//country api using async awaitc
let countries;
let languages = [];
let largestCountries = [];


const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        countries = data;
        //logging the country name,capital,languages,population
        countries.forEach(country => {
            console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population${country.population}`)
        })

        //total number of languages in the world;
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languages.indexOf(language.name) === -1) {
                    languages.push(language.name)
                }
            })
        })

        //largest countries
        let highestCountry = 0;

        countries.forEach(country => {
            if (country.area >= highestCountry) {
                highestCountry = country.area;
                largestCountries.push(country)
            }
        })
        console.log(`the total number of languages in the world is ${languages.length}`)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();

 