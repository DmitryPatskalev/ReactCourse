import React from "react";
import css from './style.module.css'



export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarValueType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}


const StarValue = (props: StarValueType) => {

    return <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>

}
export default StarValue

type StarType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Star = (props:StarType) => {
    let setStar = ()=> props.onClick(props.value)

 return <span onClick={setStar}>
     {props.selected ? <button className={css.buttonOn}></button>:
     <button className={css.buttonOf}></button>
     }
 </span>
}


