function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())




function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction2()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)


function closureOuter(name, age) {
    function innerName(){
        return `My name is ${name}`
    }
    function innerAge(){
        return `My age is ${age}`
    }

    return {
        innerName:innerName(),
        innerAge:innerAge()
    }
}

console.log(closureOuter('Daniel', 28).innerName)
console.log(closureOuter('Daniel', 28).innerAge)