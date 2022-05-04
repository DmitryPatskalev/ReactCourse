import React, {ChangeEvent} from "react";


type InputType = {
    task:string
    setTask:(task:string)=>void
}


export const Input = (props:InputType) => {
    let onChangeHundler = (event:ChangeEvent<HTMLInputElement>)=>{
        props.setTask(event.currentTarget.value)
    }

    return <div>
        <input value={props.task} onChange={onChangeHundler} />
    </div>
}
