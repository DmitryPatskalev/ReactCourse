import React, {ChangeEvent} from "react";
import {FilterType, Todolist} from "./Todolist";
import AddTask from "./AddTask";
import FilterButtonTask from "./FilterButtonTask";
import './style.css'


type TasksType = {
    task: Todolist[]
    title:string
    buttonRemoveTask:(id:string)=>void
    onClickHundler:(name:FilterType)=>void
    addTasks:(title:string)=>void
    changeStatus:(taskId:string, isDone:boolean)=>void
    filter:FilterType
}

export const Tasks = (props:TasksType)=>{
    let listOfTasks = props.task.map((elem, index)=>{
        let remove =()=> props.buttonRemoveTask(elem.id)
        let onChangeTaskHundler = (event:ChangeEvent<HTMLInputElement>)=>{
            props.changeStatus(elem.id, event.currentTarget.checked)
        }
        return <ul className={elem.isDone? 'isDone':''} key={index}>
            <li >
                <input type='checkbox' onChange={onChangeTaskHundler} checked={elem.isDone}/>{elem.tech}
                <span><button className='button-remove' onClick={remove}>x</button></span>
            </li>
        </ul>
    })


    return <div>
        <h3>{props.title}</h3>
        <AddTask addTasks={props.addTasks}  />
        {listOfTasks}
        <div>
            <FilterButtonTask onClickHundler={props.onClickHundler} filter={props.filter}/>
        </div>
    </div>
}
