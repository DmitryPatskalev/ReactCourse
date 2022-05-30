import React from "react";
import {SetValueCounterType} from "./SetValueCounter";


export const SetButton = (props:SetValueCounterType)=>{

    let setLocalStorage = () => {
        localStorage.setItem('valueMax', JSON.stringify(props.maxNum))
        localStorage.setItem('valueStart', JSON.stringify(props.startNum))
        localStorage.setItem('valueId', JSON.stringify(props.startNum))
    }

    const disableButton = props.startNum < 0 || props.startNum >= props.maxNum
    return  <div className='set'>
        <button disabled={disableButton} className='buttonSet' onClick={setLocalStorage}>SET</button>
    </div>
}