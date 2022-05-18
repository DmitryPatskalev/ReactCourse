import React, {useState} from "react";
import {v1} from "uuid";

type ListOfPeopleType = {
    id: string
    name: string
    age: number
}

let listOfPeople: Array<ListOfPeopleType> = [
    {id: v1(), name: 'Dima', age: 37},
    {id: v1(), name: 'Tania', age: 31},
    {id: v1(), name: 'Danik', age: 7},
    {id: v1(), name: 'Serg', age: 36}
]

const ShowHideMenu = () => {
    const [value, setValue] = useState(false)
    let result
    if (value) {
        result = listOfPeople.map((elem, index) => {
            return <div key={index}>
                <p >
                    <span>name: {elem.name}--</span>
                    <span>age: {elem.age}</span>
                </p>
            </div>
        })
    }
    return <div>
        <h3 onClick={() => setValue(!value)}>LIST</h3>
        <div>

        </div>
        {result}
    </div>
}
export default ShowHideMenu