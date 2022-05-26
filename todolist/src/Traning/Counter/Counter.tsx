import React, {useEffect} from "react";
import './style.css'
import {ButtonsCounter} from "./ButtonsCounter";


export type CounterType ={
    num:number
    count:(num:number)=>void
    startNum:number
    maxNum:number
}

const Counter = (props:CounterType) => {

    useEffect(()=>{
        let valueString = localStorage.getItem('valueId')
        if(valueString){
            let newValue = JSON.parse(valueString)
            props.count(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('valueId', JSON.stringify(props.num))
    })

    return <div className='body'>
            <ButtonsCounter num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
    </div>

}
export default Counter

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