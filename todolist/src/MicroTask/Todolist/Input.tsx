import React, {ChangeEvent} from "react";

type InputType = {
    message:string
    setMessage:(message:string)=>void
}

export const Input = (props:InputType)=>{
    let onChangeHundler = (event:ChangeEvent<HTMLInputElement>)=>{
        props.setMessage(event.currentTarget.value)
    }
    return <span>
        <input onChange={onChangeHundler}/>
    </span>
}