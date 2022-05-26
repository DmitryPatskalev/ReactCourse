import React from "react";
import './style.css'
import {SuperButton} from "./UniversButton";
import {CounterType} from "./Counter";


export const ButtonsCounter = (props: CounterType) => {
    let colorNum = {
        color: props.num === props.maxNum || props.num === props.startNum ? 'red' : ''
    }

    return <div>
        <div className='subBody'>
            <div className='count' style={colorNum}>
                {props.startNum >= 0 && props.maxNum > props.startNum ? props.num:<span className='errorValue'>Incorrect Value</span>}
            </div>
        </div>
        <div className='button-border'>
            <SuperButton num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
        </div>

    </div>
}
