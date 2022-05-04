import React, {ChangeEvent, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

let list: Array<string> = []

export const AddTask = ()=>{
    const [input, setInput] = useState(list)
    const [message, setMessage] = useState('')
    let result = input.map((elem, index)=>{
        return <p key={index}>{elem}</p>
    })

    let addMessage = (message:string)=>{
        setInput([message,...input])
    }

    let callbackButton = ()=>{
        addMessage(message)
        setMessage('')
    }

    return <div>
        <Input message={message} setMessage={setMessage}/>
        <Button name='+' callback={callbackButton}/>
        {result}
    </div>
}