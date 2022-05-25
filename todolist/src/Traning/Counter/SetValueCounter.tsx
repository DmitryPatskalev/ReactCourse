import React, {ChangeEvent, useEffect, useState} from "react";
import './style.css'

export const SetValueCounter = () => {

    const [maxValue, setMaxValue] = useState<number>(1)
    const [starValue, setStarValue] = useState<number>(0)

    useEffect(() => {
        let valueStringMax = localStorage.getItem('valueMax')
        let valueStringStart = localStorage.getItem('valueStart')
        if (valueStringMax) {
            let maxValue = JSON.parse(valueStringMax)
            setMaxValue(maxValue)
        }
        if (valueStringStart) {
            let strValue = JSON.parse(valueStringStart)
            setStarValue(strValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(maxValue))
        localStorage.setItem('valueStart', JSON.stringify(starValue))
    })

    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.currentTarget.value))
    }
    let onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        setStarValue(Number(event.currentTarget.value))
    }

    let setLocalStorage = () => {
        localStorage.setItem('valueMax', JSON.stringify(maxValue))
        localStorage.setItem('valueStar', JSON.stringify(starValue))
    }
    const styleStarValue = {
        backgroundColor: starValue < 0 || starValue >= maxValue ? 'red' : ''
    }
    const styleMaxValue = {
        backgroundColor: maxValue <= starValue || maxValue < 1 ? 'red' : ''
    }

    return <div className='body'>
        <div className='subBody'>
            <div className='titleMax'>
                <span>max value:</span>
                <span>
                <input
                  style={styleMaxValue}
                  value={maxValue}
                  type='number'
                  className='inputMax'
                  onChange={onChangeMaxValue}
                />
        </span>
            </div>
            <div className='titleStar'>
                <span>star value:</span>
                <span>
                <input
                  style={styleStarValue}
                  value={starValue}
                  type='number'
                  className='inputStar'
                  onChange={onChangeStartValue}
                />
            </span>
            </div>
        </div>
        <div className='button-border'>
            <div className='set'>
                <button className='buttonSet' onClick={setLocalStorage}>SET</button>
            </div>
        </div>
    </div>
}
