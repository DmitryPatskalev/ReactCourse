import React from "react";

type ButtonType = {
    name:string
    callback:()=>void
}

export const Button = (props:ButtonType)=>{
    let onClickHundler = ()=>{
        props.callback()
    }


    return <div >
        <button onClick={onClickHundler}>{props.name}</button>
    </div>
}
