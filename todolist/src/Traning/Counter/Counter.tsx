import React, {useState} from "react";
import './style.css'
import {ButtonsCounter} from "./ButtonsCounter";


const Counter = () => {
    const [value, setValue] = useState(0)

    const setLocalStorage = () => {
        localStorage.setItem('idValue', JSON.stringify(value))
        localStorage.setItem('idValue + 1', JSON.stringify(value + 1))

    }
    const getLocalStorage = () => {
        let valuesString = localStorage.getItem('idValue')
        if (valuesString) {
            let newValue = JSON.parse(valuesString)
            setValue(newValue)
        }
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItem = () => {
      localStorage.removeItem('idValue + 1')
    }
    return <div>
        <div className='body'>
            <ButtonsCounter num={value} counter={setValue}/>
        </div>
        <button onClick={setLocalStorage}>setLocalStorage</button>
        <button onClick={getLocalStorage}>getLocalStorage</button>
        <button onClick={clearLocalStorage}>clearLocalStorage</button>
        <button onClick={removeItem}>removeItem++</button>
    </div>

}
export default Counter