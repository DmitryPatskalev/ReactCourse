import React from "react";
import './style.css'


type StarValueType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

const StarValue = (props: StarValueType) => {

    return <div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
    </div>

}

export default StarValue

type StarType = {
    selected: any
}
const Star = (props: StarType) => {
    if (props.selected === true) {
        return <span><button className='button1'></button></span>
    } else {
        return <span><button className='button2'></button></span>
    }

}