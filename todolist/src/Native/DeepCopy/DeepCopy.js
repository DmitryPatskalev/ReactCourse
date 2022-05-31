let obj = {
    name:'Dima',
    age:37
}
let obj2 = {...obj}

obj2.name = "Danik"


let person = {
    name:'Dima',
    age:37,
    adress:{
        city:'Minsk',
        street:{
            street: 'Lazo',
            flat:71
        }
    }
}
let person2 = {...person, age:7, name:'Danik', adress:{...person.adress, ...person.adress.street, street:{street:'Striy'}}}
console.log(person)
console.log(person2)

let arr = [
    {name:'Dima', age:37},
    {name:'Danik', age:7}
]

let newArr = arr.map(elem=>({...elem}))
newArr[0].name = 'Tania'
newArr[0].age  = 31
console.log(arr)
console.log(newArr)

let str = JSON.parse(JSON.stringify(arr))
console.log(str)