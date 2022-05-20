import React, {ChangeEvent} from "react";
import {FilterType, TodoListType} from "./Todolist";
import './style.css'

import './style.css'
import AddTask from "./AddTask";
import FilterButtonTask from "./FilterButtonTask";

type TasksType = {
    tasks:TodoListType[]
    title:string
    buttonRemoveTask:(id:string)=>void
    buttonFilterTask:(name:FilterType)=>void
    addTasks:(title:string)=>void
    filter:FilterType
    changeStatus:(taskId:string, isDone:boolean)=>void

}

export const Tasks = (props:TasksType)=>{
    let listOfTasks = props.tasks.map((elem,index)=>{
        let removeElem =()=> props.buttonRemoveTask(elem.id)
        let changeStatus = (event:ChangeEvent<HTMLInputElement>)=>{
            props.changeStatus(elem.id, event.currentTarget.checked)
        }
        return <ul key={index}>
            <li className={elem.isDone? 'isDone':''}>
                <input type='checkbox' onChange={changeStatus}  checked={elem.isDone}/>
                {elem.tech}
                <button onClick={removeElem} className='button-remove'>x</button>
            </li>
        </ul>
    })


    return <div>
        <h3>{props.title}</h3>
        <AddTask addTasks={props.addTasks}/>
        {listOfTasks}
        <FilterButtonTask buttonFilterTask={props.buttonFilterTask} filter={props.filter}/>

    </div>
}
