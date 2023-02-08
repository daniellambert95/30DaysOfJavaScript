function fullName(firstName, secondName){
    return (`${firstName} ${secondName}`)
}
console.log(fullName("Daniel", "Lambert"))


const areaOfRectangle = (length, height) =>{
    return 2*(length + height)
}
console.log(areaOfRectangle(10, 10))

const bmiCalculator = (weight, height) =>{
    const bmi = (weight / (height * height / 100))
    return bmi + 'm2'
}
console.log(bmiCalculator(76, 183))

function printArray(array){
    let i = 0;
    for (i in array){
        console.log(array[i])
    }
}
// printArray([1,2,3])

const sumOfNums = (...args) => {
    let res = 0
    for (const i of args){
        res += i
    }
    return res
}

console.log(sumOfNums(10,5,10,3))