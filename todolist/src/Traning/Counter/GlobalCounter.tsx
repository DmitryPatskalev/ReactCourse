import React, {useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'


const GlobalCounter = ()=>{
    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    return <div className='container'>
        <div className='setValueCounter'>
            <SetValueCounter maxNum={maxValue} setMaxNum={setMaxValue} startNum={startValue} setStartNum={setStartValue}/>
        </div>
        <div className='counter'>
            <Counter num={value} count={setValue} startNum={startValue} maxNum={maxValue}/>
        </div>
    </div>
}
export default GlobalCounter