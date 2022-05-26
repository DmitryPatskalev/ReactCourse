import React from "react";
import './style.css'

import {CounterType} from "./Counter";

export const SuperButton = (props: CounterType) => {

    const incButton = () => props.count(props.num + 1)
    const resetButton = () => props.count(props.startNum)

    const incDisable =  props.num === props.maxNum || props.maxNum === props.startNum || props.maxNum < 1 || props.startNum < 0 || props.startNum >=props.maxNum
    const resetDisable = props.num === props.startNum || props.startNum < 0 || props.maxNum === props.startNum || props.startNum >=props.maxNum

    return <div>
        <button className='inc' disabled={incDisable} onClick={incButton}>inc</button>
        <button className='reset' disabled={resetDisable} onClick={resetButton}>reset</button>
    </div>
}