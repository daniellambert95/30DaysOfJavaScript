//  Challenge 1
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
let challengeUpper = challenge.toUpperCase()
let challengeLower = challenge.toLowerCase()
let sliced = challengeLower.substring(3,7)
console.log(sliced)
let contains = challenge.includes('Script')
console.log(contains)
let newArray = challenge.split()
console.log(newArray)
let newArray2 = challenge.split(' ')
console.log(newArray2)
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let companyArray = companies.split(', ')
console.log(companyArray)
let challenge2 = '30 Days Of JavaScript'
let changedString = challenge2.replace("JavaScript", "Python")
console.log(changedString)
let charS = challenge.charAt(15)
console.log(charS)
let charJ = challenge.charAt(11)
console.log(charJ)
let indexA = challenge.indexOf('a')
console.log(indexA)
let lastIndexA = challenge.lastIndexOf('a')
console.log(lastIndexA)
let because = 'You cannot end a sentence with because because because is a conjunction'
let findBecause = because.indexOf('because')
console.log(findBecause)
let findLastBecause = because.lastIndexOf('because')
console.log(findLastBecause)
let searchBecause = because.search('because')
console.log(searchBecause)
let newString = ' 30 Days Of JavaScript '
let noSpaces = newString.trim()
console.log(noSpaces)
let startsWith = challenge.startsWith('30')
console.log(startsWith)
let endsWith = challenge.endsWith('t')
console.log(endsWith)
let findAs = challenge.match(/a/g)
console.log(findAs)
let string1 = '30 Days of'
let string2 = 'JavaScript'
let concatStrings = string1.concat(string2)
console.log(concatStrings)
const repeatString = challenge.repeat(2)
console.log(repeatString)

//  Challenge 3
let s3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let amountOfLove = s3.match(/love/g)
console.log(amountOfLove)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const ans = sentence.replace(/\W/g, "");
console.log(ans)

const sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let arrayNumbers = (sentence2.match(/\d+/g))
let answer = ((parseInt(arrayNumbers[0])*12) + parseInt(arrayNumbers[1]) + parseInt(arrayNumbers[2])*12)
console.log(answer)