import React from "react";
import './style.css'
import {SuperButton} from "./UniversButton";

export type ButtonsCounterType = {
    num: number
    counter: (num: number) => void
}

export const ButtonsCounter = (props: ButtonsCounterType) => {
    let colorNum = {
        color: props.num === 10 || props.num ===0 ? 'red' : ''
    }

    return <div>
        <div className='subBody'>
            <div className='count' style={colorNum}>
                {props.num}
            </div>
        </div>
        <div className='button-border'>
            <SuperButton num={props.num} counter={props.counter}/>
        </div>

    </div>
}
