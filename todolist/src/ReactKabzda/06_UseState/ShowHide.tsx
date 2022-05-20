import React from "react";
import {v1} from "uuid";


type ListOfPeopleType = {
    id: string
    name: string
    age: number
}

type ListShowHideType = {
    show: boolean
    showOff: (show: boolean) => void
}

let listOfPeople: Array<ListOfPeopleType> = [
    {id: v1(), name: 'Dima', age: 37},
    {id: v1(), name: 'Tania', age: 31},
    {id: v1(), name: 'Danik', age: 7},
    {id: v1(), name: 'Serg', age: 36}
]

const ShowHideMenu = (props: ListShowHideType) => {

    let result
    if (props.show) {
        result = listOfPeople.map((elem, index) => {
            return <div key={index}>
                <p>
                    <span>name: {elem.name}--</span>
                    <span>age: {elem.age}</span>
                </p>
            </div>
        })
    }
    let buttonShowHide = () => props.showOff(!props.show)

    return <div>
        <h3 onClick={buttonShowHide}>List of users (click to show)</h3>
        {result}
    </div>
}
export default ShowHideMenu