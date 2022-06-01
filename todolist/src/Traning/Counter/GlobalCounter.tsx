import React, {useEffect, useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'


const GlobalCounter = ()=>{

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    useEffect(()=>{
        let valueString = sessionStorage.getItem('valueId')
        let valueStringMax = sessionStorage.getItem('valueMax')
        let valueStringStart = sessionStorage.getItem('valueStart')
        if(valueString){
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }
        if (valueStringMax) {
            let maxValue = JSON.parse(valueStringMax)
            setMaxValue(maxValue)
        }
        if (valueStringStart) {
            let strValue = JSON.parse(valueStringStart)
            setStartValue(strValue)
        }
    },[])

    useEffect(()=>{
        sessionStorage.setItem('valueId', JSON.stringify(value))
        sessionStorage.setItem('valueMax', JSON.stringify(maxValue))
        sessionStorage.setItem('valueStart', JSON.stringify(startValue))
    },)


    return <div className='container'>
        <div className='setValueCounter'>
            <SetValueCounter count={setValue} maxNum={maxValue} setMaxNum={setMaxValue} startNum={startValue} setStartNum={setStartValue}/>
        </div>
        <div className='counter'>
            <Counter num={value} count={setValue} startNum={startValue} maxNum={maxValue}/>
        </div>
    </div>
}
export default GlobalCounter