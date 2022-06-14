import React, {useEffect, useState} from "react";
import CounterType from './CounterType'
import {SetValueCounter} from "./SetValueCounter";
import './Style.css'


const SecondVersionCounter = () => {
    const [isSettingOpen, setIsSettingOpen] = useState(true)

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    useEffect(() => {
        let valueString = sessionStorage.getItem('valueId')
        let valueStringMax = sessionStorage.getItem('valueMax')
        let valueStringStart = sessionStorage.getItem('valueStart')
        if (valueString) {
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
    }, [])

    useEffect(() => {
        sessionStorage.setItem('valueId', JSON.stringify(value))
        sessionStorage.setItem('valueMax', JSON.stringify(maxValue))
        sessionStorage.setItem('valueStart', JSON.stringify(startValue))
    },)


    return <div>
        <div className='setValueCounter'>
            {isSettingOpen ?
              <SetValueCounter count={setValue} maxNum={maxValue} setMaxNum={setMaxValue} startNum={startValue}
                               setStartNum={setStartValue} setIsSettingOpen={setIsSettingOpen}/> : false}
        </div>
        <div className='counter'>
            {!isSettingOpen ? <CounterType num={value} count={setValue} startNum={startValue} maxNum={maxValue}
                                           setIsSettingOpen={setIsSettingOpen}/> : true}
        </div>
    </div>
}
export default SecondVersionCounter