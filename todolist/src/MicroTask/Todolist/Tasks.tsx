import React, {ChangeEvent} from "react";
import {FilterType, TodoListType} from "./Todolist";
import './style.css'

import './style.css'
import AddTask from "./AddTask";
import FilterButtonTask from "./FilterButtonTask";

type TasksType = {
    id: string
    tasks: TodoListType[]
    title: string
    buttonRemoveTask: (id: string, todoListId: string) => void
    buttonFilterTask: (value: FilterType, todoListId: string) => void
    addTasks: (title: string, todoListId: string) => void
    filter: FilterType
    changeStatus: (taskId: string, isDone: boolean,todoListId: string ) => void
    buttonRemTodoList:(todoListId: string)=>void

}

export const Tasks = (props: TasksType) => {
    let listOfTasks = props.tasks.map((elem, index) => {
        let removeElem = () => props.buttonRemoveTask(elem.id, props.id)
        let changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(elem.id, event.currentTarget.checked, props.id)
        }
        return <ul key={index}>
            <li className={elem.isDone ? 'isDone' : ''}>
                <input type='checkbox' onChange={changeStatus} checked={elem.isDone}/>
                {elem.title}
                <button onClick={removeElem} className='button-remove'>x</button>
            </li>
        </ul>
    })
    const remTDList =()=>{
        props.buttonRemTodoList(props.id)
    }


    return <div>
        <h3>{props.title}<button onClick={remTDList} className='remTDList'>x</button></h3>
        <AddTask addTasks={props.addTasks} id={props.id}/>
        {listOfTasks}
        <FilterButtonTask buttonFilterTask={props.buttonFilterTask} filter={props.filter} id={props.id}/>

    </div>
}
