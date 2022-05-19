import React from "react";
import css from './style.module.css'

export type StarRatingType = 0 | 1 | 2 | 3 | 4 | 5
type StarValue = {
    value:StarRatingType
    onClick:(value:StarRatingType)=>void
}

const StarValue = (props:StarValue) => {

    return <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1} />
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
}

export default StarValue


type StarType = {
    selected: boolean
    value:StarRatingType
    onClick:(value:StarRatingType)=>void
}

const Star = (props: StarType) => {
    const clickButton=()=> props.onClick(props.value)

    return <span>
        {(props.selected ?
            <button className={css.buttonOn} onClick={clickButton}></button> :
            <button className={css.buttonOf} onClick={clickButton}></button>
        )}
    </span>

}


