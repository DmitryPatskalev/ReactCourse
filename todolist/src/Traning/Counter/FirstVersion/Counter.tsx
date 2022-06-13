import React from "react";
import './style.css'
import {UniversButton} from "./UniversButton";


export type CounterType = {
    num: number
    count: (num: number) => void
    startNum: number
    maxNum: number
}

const Counter = (props: CounterType) => {

    let colorNum = {
        color: props.num === props.maxNum?'red':  props.num === props.startNum ? 'blue' : 'green'
    }

    return <div className='body'>
        <div className='subBody'>
            <div className='count' style={colorNum}>
                {props.startNum >= 0 && props.maxNum > props.startNum ?
                  props.num :
                  <span className='errorValue'>Incorrect Value</span>}
            </div>
        </div>
        <div className='button-border'>
            <UniversButton num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
        </div>
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