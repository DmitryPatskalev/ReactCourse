import React, {useEffect, useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'


const FirstVersionCounter = ()=>{

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    useEffect(()=>{
        let valueString = localStorage.getItem('value')
        let valueStringMax = localStorage.getItem('max')
        let valueStringStart = localStorage.getItem('start')
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
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('start', JSON.stringify(startValue))
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
export default FirstVersionCounter