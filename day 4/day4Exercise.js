let userAge = parseInt(prompt("Enter your age:"))
let yearsLeft = 18 - userAge
if (userAge > 18){
    console.log("You are old enough to drive")
} else {
    console.log(`You have ${yearsLeft} years left until you can drive`)
}

let userScore = parseInt(prompt("Enter your score from the test:"))
switch(true){
    case userScore >= 80:
        console.log('A')
        break;
    case userScore >= 70 && userScore <= 79:
        console.log('B')
        break;
    case userScore >= 60 && userScore <= 69:
        console.log('C')
        break;
    case userScore >= 50 && userScore <= 59:
        console.log('D')
        break;
    case userScore >= 0 && userScore <= 49:
        console.log('F')
        break;
}

let userMonth = prompt("Enter a month:").toLowerCase()
switch(true){
    case ["september", "october", "november"].includes(userMonth):
        console.log("Autumn")
        break;
    case ["december", "january", "febuary"].includes(userMonth):
        console.log("Winter")
        break;
    case ["march", "april", "may"].includes(userMonth):
        console.log("Spring")
        break;
    case ["June", "July", "August"].includes(userMonth):
        console.log("Summer")
        break;
}