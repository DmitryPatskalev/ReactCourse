import React, {ChangeEvent} from "react";
import './style.css'


export type SetValueCounterType = {
    startNum: number
    setStartNum: (startNum: number) => void
    maxNum: number
    setMaxNum: (maxNum: number) => void
    count: (num: number) => void
}

export const SetValueCounter = (props: SetValueCounterType) => {

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
    const disableButton = props.startNum < 0 || props.startNum >= props.maxNum

    const onSetValue = () => {
        props.count(props.startNum)
    }

    return <div className='body'>
        <div className='subBody'>
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
        <div className='button-border'>
            <div className='set'>
                <button disabled={disableButton} className='buttonSet' onClick={onSetValue}>SET</button>
            </div>
        </div>
    </div>
}
