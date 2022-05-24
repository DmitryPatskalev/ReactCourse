import React, {useEffect, useState} from "react";
import './style.css'
import {ButtonsCounter} from "./ButtonsCounter";


const Counter = () => {
    const [value, setValue] = useState(0)

    useEffect(()=>{
        let valueString = localStorage.getItem('valueId')
        if(valueString){
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('valueId', JSON.stringify(value))
    })





    // const setLocalStorage = ()=>{
    //     localStorage.setItem('valueId', JSON.stringify(value))
    //     localStorage.setItem('valueId+1', JSON.stringify(value+1))
    // }
    // const getSessionStorage = ()=>{
    //     sessionStorage.setItem('valueId',JSON.stringify(value))
    // }
    // const getLocalStorage = () => {
    //   let valuesString =  localStorage.getItem('valueId')
    //     if(valuesString){
    //         let newValue = JSON.parse(valuesString)
    //         setValue(newValue)
    //     }
    // }
    // const clearLocalStorage = ()=>{
    //     localStorage.clear()
    //     setValue(0)
    // }
    // const removeItem = () => {
    //   localStorage.removeItem('valueId+1')
    //
    // }

    return <div>
        <div className='body'>
            <ButtonsCounter num={value} counter={setValue}/>
        </div>
        {/*<button onClick={setLocalStorage}>setLocalStorage</button>*/}
        {/*<button onClick={getSessionStorage}>getSessionStorage</button>*/}
        {/*<button onClick={getLocalStorage}>getLocalStorage</button>*/}
        {/*<button onClick={clearLocalStorage}>clearLocalStorage</button>*/}
        {/*<button onClick={removeItem}>removeItem++</button>*/}
    </div>

}
export default Counter