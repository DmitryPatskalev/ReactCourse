import React from "react";
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
