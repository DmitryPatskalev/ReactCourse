import React, {useState} from "react";
import './../../App.css'

import {Button} from "./Button";
import {Input} from "./Input";


let list: string[] = ['Message1', 'Message2', 'Message3']

const Task = () => {
    let [message, setMessage] = useState(list)
    const [task, setTask] = useState('')

    let result = message.map((elem, index) => {
        return <p key={index}>{elem}</p>
    })

    let addMessage = (task: string) => {
        setMessage([task, ...message])
    }
    let callBackButton = () => {
        addMessage(task)
        setTask('')
    }

    return <div className='App'>

        <Input task={task} setTask={setTask}/>
        <Button name='+' callback={callBackButton}/>
        <p>
            {result}
        </p>


    </div>

}
export default Task