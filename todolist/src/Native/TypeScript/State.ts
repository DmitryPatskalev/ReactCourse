
type NewArrType =  (number | string | boolean)[]

let newArr: NewArrType = [1,3, '54', true]
console.log(newArr)
type ObjType = {
    name:string
    age:number
}
let newObj: ObjType = {
    name:'Dima',
    age:38
}

console.log(newObj)

type ListType = {
    name:string
    age:number
    surname?:string
}
let list: Array<ListType> = [
    {name:'Dima', age:38},
    {name:'Danik', age:7, surname:'Patskalev'},
]
console.log(list)

type ManType = {
    name:string
    height:number
    age:number
}

let createMan= (name:string, height:number, age:number):ManType => {
    return {
        name,
        height,
        age
    };
}
console.log(createMan('Dima', 38, 9))

type CarType = {
    model:string
    year:number
    on:boolean
    turnOn:()=>void
    rename:(model:string)=>void
}

let car: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}
console.log(car)

type GarageType = {
    addCar:(car:CarType)=>void
    logAllCarsNames:()=>void
    getAllCars:()=>Array<CarType>

}

let createGarage = ():GarageType => {
    let _cars:Array<CarType> = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}
console.log(createGarage)