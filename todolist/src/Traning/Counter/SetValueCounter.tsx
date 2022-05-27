import React, {useEffect} from "react";
import './style.css'
import {Inputs} from "./Inputs";
import {SetButton} from "./SetButton";

export type SetValueCounterType = {
    startNum: number
    setStartNum: (startNum: number) => void
    maxNum: number
    setMaxNum: (maxNum: number) => void
}

export const SetValueCounter = (props: SetValueCounterType) => {

    useEffect(() => {
        let valueStringMax = localStorage.getItem('valueMax')
        let valueStringStart = localStorage.getItem('valueStart')
        if (valueStringMax) {
            let maxValue = JSON.parse(valueStringMax)
            props.setMaxNum(maxValue)
        }
        if (valueStringStart) {
            let strValue = JSON.parse(valueStringStart)
            props.setStartNum(strValue)
        }
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('valueMax', JSON.stringify(props.maxNum))
    //     localStorage.setItem('valueStart', JSON.stringify(props.startNum))
    // })

    return <div className='body'>
        <div className='subBody'>
            <Inputs
              startNum={props.startNum}
              setStartNum={props.setStartNum}
              maxNum={props.maxNum}
              setMaxNum={props.setMaxNum}/>
        </div>
        <div className='button-border'>
            <SetButton
              startNum={props.startNum}
              setStartNum={props.setStartNum}
              maxNum={props.maxNum}
              setMaxNum={props.setMaxNum}/>
        </div>
    </div>
}
