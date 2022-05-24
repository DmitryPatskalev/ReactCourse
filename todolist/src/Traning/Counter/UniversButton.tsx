import React from "react";
import './style.css'
import {ButtonsCounterType} from "./ButtonsCounter";


export const SuperButton = (props: ButtonsCounterType) => {

    const incButton = () => props.counter(props.num + 1)
    const resetButton = () => props.counter(0)

    const incDisable = props.num === 5
    const resetDisable = props.num === 0

    return <div>
        <button className='inc' disabled={incDisable} onClick={incButton}>inc</button>
        <button className='reset' disabled={resetDisable} onClick={resetButton}>reset</button>
    </div>
}