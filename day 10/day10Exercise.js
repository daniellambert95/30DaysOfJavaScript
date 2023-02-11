// Sets

let companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"]
companies = new Set(companies)
companies.add('Delivery Hero')

console.log(companies)
console.log(companies.size)


const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
  ]
const langSet = new Set(languages)
console.log(langSet) 
console.log(langSet.size)

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)


console.log("--------------")
console.log("-------")
console.log("--------------")

// Maps


const countriess = [['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countriess)
  console.log(map)
  console.log(map.size)

  const countriesMap = new Map()

  countriesMap.set('Finland', 'Helsinki')
  countriesMap.set('Sweden', 'Stockholm')
  countriesMap.set('Norway', 'Oslo')
  countriesMap.set('Ireland', 'Dublin')
  console.log(countriesMap)
  console.log(countriesMap.size)
  console.log(countriesMap.get('Ireland'))
  console.log(countriesMap.has('Sweden'))

for (const [country, city] of countriesMap){
    console.log(country, city)
}
