import React, {ChangeEvent} from "react";
import {SetValueCounterType} from "./SetValueCounter";

export const Inputs = (props:SetValueCounterType)=>{

    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNum(Number(event.currentTarget.value))
    }
    let onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStartNum(Number(event.currentTarget.value))
    }
    const styleStarValue = {
        backgroundColor: props.startNum < 0 || props.startNum >= props.maxNum ? 'red' : ''
    }
    const styleMaxValue = {
        backgroundColor: props.maxNum <= props.startNum || props.maxNum < 1 ? 'red' : ''
    }

    return <div>
        <div className='titleMax'>
            <span>max value:</span>
            <input style={styleMaxValue}
                   value={props.maxNum}
                   type='number'
                   className='inputMax'
                   onChange={onChangeMaxValue}
            />
        </div>
        <div className='titleStar'>
            <span>star value:</span>
            <input
              style={styleStarValue}
              value={props.startNum}
              type='number'
              className='inputStar'
              onChange={onChangeStartValue}
            />
        </div>
    </div>
}