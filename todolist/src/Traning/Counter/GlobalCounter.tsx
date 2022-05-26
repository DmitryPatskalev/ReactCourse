import React from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'




const GlobalCounter = ()=>{
    return <div className='container'>
        <div className='setValueCounter'>
            <SetValueCounter/>
        </div>
        <div className='counter'>
            <Counter/>
        </div>
    </div>
}
export default GlobalCounter