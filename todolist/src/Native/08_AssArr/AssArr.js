const mentors = [
    {id: 1, name: 'Dima', salary: 500},
    {id: 2, name: 'Tanya', salary: 600},
    {id: 3, name: 'Danik', salary: 350},
    {id: 4, name: 'Igor', salary: 480},
]

const mentor1 = mentors.find(elem => elem.id === 1)
console.log(Object.keys(mentor1))

mentor1.salary = 700
console.log(mentor1['salary'])

const users = {
    '25727': {id: 1, name: 'Dima', salary: 500},
    '6546154': {id: 2, name: 'Tanya', salary: 600},
    '6547': {id: 3, name: 'Danik', salary: 350},
    '192346': {id: 4, name: 'Igor', salary: 480}
}
const users2 = [
    {id: 4, name: 'Dima', salary: 500},
    {id: 3, name: 'Tanya', salary: 600},
    {id: 1, name: 'Danik', salary: 350},
    {id: 2, name: 'Igor', salary: 480}
]
console.log(users2[3].id)


// let user = {
//     name:'Dima',
//     age:37,
//     adress:{
//         city:{
//             title:'Minsk'
//         }
//     }
// }
// console.log(user.adress.city.title)
// console.log(user['adress']['city']['title'])

let obj1 = {
    id: 1,
    name: 'Dima'
}
let obj2 = {
    id: 1,
    name: 'Dima'
}
console.log(obj1 === obj2)
