import React from "react";
import './Style.css'

import {CounterType} from "./CounterType";

export const UniversButton = (props: CounterType) => {

    const incButton = () => props.count(props.num + 1)
    const resetButton = () => props.count(props.startNum)

    const incDisable =  props.num === props.maxNum ||props.num > props.maxNum || props.maxNum === props.startNum || props.maxNum < 1 || props.startNum < 0 || props.startNum >=props.maxNum
    const resetDisable = props.num === props.startNum || props.startNum < 0 || props.maxNum === props.startNum || props.startNum >=props.maxNum

    const onClickSet = () => props.setIsSettingOpen(true)

    return <div>
        <button className='inc' disabled={incDisable} onClick={incButton}>inc</button>
        <button className='reset' disabled={resetDisable} onClick={resetButton}>reset</button>
        <button className='buttonSet' onClick={onClickSet} >set</button>
    </div>
}