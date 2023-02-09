const dog = {
    name: "Coco",
    legs: 4,
    color: "brown",
    age: 15, 
    bark: function(){
        return "Woof woof"
    }
}
console.log(dog)
console.log(dog.bark())

dog.breed = "Poodle"
dog.getDogInfo = function(){
    return `${this.name} ${this.color} ${this.age}`
}
console.log(dog.getDogInfo())

const userss = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'BigQuery', 'SQL', 'Bootstrap', 'Django', 'AWS', 'GCP'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }  

let mostSkills;
let maxSkillCount = 0

for (const i in userss){
    if(userss[i].skills.length > maxSkillCount){
        maxSkillCount = userss[i].skills.length
        mostSkills = i
    }
}
console.log(mostSkills)


let totalLoggedInUserss = 0;
let totalUserssAbove50 = 0;
for (const i in userss){
    if (userss[i].isLoggedIn == true){
        console.log('false')
        totalLoggedInUserss++
        if(userss[i].points >= 50){
            totalUserssAbove50++
        }
    }
}
console.log(totalLoggedInUserss, totalUserssAbove50)

let country = {
    name: "Ireland",
    capital: "Dublin",
    population: "8 million",
    languages: ["Irish", "English"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages.join(' and ')}`)

const users = [{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}
];

const signUp = (username, email, password) => {
    users.forEach(user => {
        if (user.username === username || user.email === email) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz1234567890";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    return(users[users.length - 1]);
}

const signIn = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase() && users[i].password === password) {
            return users[i];
        } else {
            return "wrong username or password";
        }
    }
}