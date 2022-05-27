import React, {ChangeEvent} from "react";
import {FilterType, TodoListType} from "./Todolist";
import './style.css'

import './style.css'
import AddTask from "./AddTask";
import FilterButtonTask from "./FilterButtonTask";

type TasksType = {
    todolistID: string
    tasks: TodoListType[]
    title: string
    buttonRemoveTask: (todoListId: string, id: string) => void
    buttonFilterTask: (todoListId: string, value: FilterType) => void
    addTasks: (todoListId: string, id: string) => void
    filter: FilterType
    changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
    buttonRemTodoList: (todoListId: string) => void

}

export const Tasks = (props: TasksType) => {
    let listOfTasks = props.tasks.map((elem, index) => {
        let removeElem = () => props.buttonRemoveTask(props.todolistID,elem.id)
        let changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(props.todolistID, elem.id, event.currentTarget.checked)
        }
        return <ul key={index}>
            <li className={elem.isDone ? 'isDone' : ''}>
                <input type='checkbox' onChange={changeStatus} checked={elem.isDone}/>
                <span>{elem.title}</span>
                <button onClick={removeElem} className='button-remove'>x</button>
            </li>
        </ul>
    })
    const remTDList = () => {
        props.buttonRemTodoList(props.todolistID)
    }


    return <div>
        <h3>{props.title}
            <button onClick={remTDList} className='remTDList'>x</button>
        </h3>
        <AddTask addTasks={props.addTasks} todolistID={props.todolistID}/>
        {listOfTasks}
        <FilterButtonTask buttonFilterTask={props.buttonFilterTask} filter={props.filter} todolistID={props.todolistID}/>

    </div>
}
