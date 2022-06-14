import React from "react";
import './Style.css'
import {UniversButton} from "./UniversButton";


export type CounterType = {
    num: number
    count: (num: number) => void
    startNum: number
    maxNum: number
    setIsSettingOpen:(value:boolean)=>void

}

const CounterType = (props: CounterType) => {

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
            <UniversButton num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum} setIsSettingOpen={props.setIsSettingOpen}/>
        </div>
    </div>

}
export default CounterType

