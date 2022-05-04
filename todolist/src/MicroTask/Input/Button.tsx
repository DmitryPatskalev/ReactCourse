import React from "react";

type ButtonType = {
    name:string
    callback:()=>void
}

export const Button = (props:ButtonType)=>{
    let onclickHundler = ()=>{
        props.callback()
    }

    return <div >
        <button onClick={onclickHundler}>{props.name}</button>
    </div>
}
