import React from "react";
import {FilterType, Todolist} from "./Todolist";
import {AddTask} from "./AddTask";

type TasksType = {
    task: Todolist[]
    title:string
    buttonRemoveTask:(id:number)=>void
    onClickHundler:(name:FilterType)=>void
}


export const Tasks = (props:TasksType)=>{
    let listOfTasks = props.task.map((elem, index)=>{
        let remove =()=> props.buttonRemoveTask(elem.id)
        return <ul>
            <li key={index}>
                <input type='checkbox' checked={elem.isDone}/>{elem.tech}
                <span><button onClick={remove}>x</button></span>
            </li>
        </ul>
    })

    return <div>
        <h3>{props.title}</h3>
        <AddTask/>
        {listOfTasks}
        <div>
            <button onClick={()=>(props.onClickHundler('All'))}>All</button>
            <button onClick={()=>(props.onClickHundler('Active'))}>Active</button>
            <button onClick={()=>(props.onClickHundler('Checked'))}>Checked</button>
        </div>
    </div>
}
