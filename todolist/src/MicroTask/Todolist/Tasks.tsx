import React, {ChangeEvent} from "react";
import {FilterType, TodoListType} from "./Todolist";
import './style.css'
import './style.css'

import FilterButtonTask from "./FilterButtonTask";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";


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
    changeTaskTitle:(todoListId:string, id:string, newValue:string)=>void
    changeTodoListTitle:(todoListId:string, newTitle:string)=>void

}

export const Tasks = (props: TasksType) => {
    let listOfTasks = props.tasks.map((elem, index) => {
        let removeElem = () => props.buttonRemoveTask(props.todolistID, elem.id)
        let changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(props.todolistID, elem.id, event.currentTarget.checked)
        }
        const onChangeTitleHundler = (newValue:string) => {
          props.changeTaskTitle(props.todolistID, elem.id, newValue)
        }

        return <ul key={index}>
            <li className={elem.isDone ? 'isDone' : ''}>
                <input type='checkbox' onChange={changeStatus} checked={elem.isDone}/>
                <EditableSpan title={elem.title} onChange={onChangeTitleHundler}/>
                <button onClick={removeElem} className='button-remove'>x</button>
            </li>
        </ul>
    })
    const removeTodoList = () => {
        props.buttonRemTodoList(props.todolistID)
    }
    const addTask = (title: string) => {
        props.addTasks(props.todolistID, title)
    }
    const changeTodoListTitle = (newTitle:string) => {
      props.changeTodoListTitle(props.todolistID, newTitle)
    }


    return <div>
        <h3><EditableSpan title={props.title} onChange={changeTodoListTitle}/>
            <button onClick={removeTodoList} className='remTDList'>x</button>
        </h3>
        <AddItemForm addItem={addTask}/>
        {listOfTasks}
        <FilterButtonTask buttonFilterTask={props.buttonFilterTask} filter={props.filter}
                          todolistID={props.todolistID}/>

    </div>
}
