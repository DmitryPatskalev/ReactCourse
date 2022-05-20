import React, {useState} from "react";

import './../../App.css'
import {v1} from "uuid";
import {Tasks} from "./Tasks";


export type TodoListType = {
    id: string
    tech: string
    isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

const Todolist = () => {

    let tasks: Array<TodoListType> = [
        {id: v1(), tech: 'JS', isDone: true},
        {id: v1(), tech: 'React', isDone: true},
        {id: v1(), tech: 'C++/C#', isDone: false},
        {id: v1(), tech: 'Python', isDone: false},
        {id: v1(), tech: 'CSS/HTML', isDone: true},
    ]
    const [task, setTask] = useState(tasks)
    const [filter, setFilter] = useState<FilterType>('All')


    const buttonRemoveTask = (id: string) => {
        let removeElem = task.filter(elem => elem.id !== id)
        setTask(removeElem)
    }
    let filterTasks = task
    if (filter === 'Active') {
        filterTasks = task.filter(elem => !elem.isDone)
    }
    if (filter === 'Completed') {
        filterTasks = task.filter((elem => elem.isDone))
    }
    let buttonFilterTask = (name: FilterType) => {
        setFilter(name)
    }
    const addTasks = (title:string)=>{
        let addTask = {
            id:v1(),
            tech:title,
            isDone:true
        }
        setTask([addTask,...task])
    }
    const changeStatus = (taskId:string, isDone:boolean)=>{
        let changeChecked = task.find(elem=>elem.id === taskId)
        if(changeChecked){
            changeChecked.isDone = isDone
        }
        setTask([...task])
    }

    return <div className='App'>
        <Tasks
          title='What I Learn'
          tasks={filterTasks}
          buttonRemoveTask={buttonRemoveTask}
          buttonFilterTask={buttonFilterTask}
          addTasks={addTasks}
          changeStatus={changeStatus}
          filter={filter}

        />


    </div>
}
export default Todolist