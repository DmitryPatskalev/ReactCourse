import React, {useState} from "react";
import {Tasks} from "./Tasks";
import './../../App.css'

export type Todolist = {
    id: number
    tech: string
    isDone: boolean
}
export type FilterType = 'All'| 'Active' | 'Checked'


const Todolist = () => {
    let tasks: Array<Todolist> = [
        {id: 1, tech: 'JS', isDone: true},
        {id: 2, tech: 'React', isDone: true},
        {id: 3, tech: 'C++/C#', isDone: false},
        {id: 4, tech: 'Python', isDone: false},
    ]
    const [task, setTask] = useState(tasks)
    const [filter, setFilter] = useState('All')

    let buttonRemoveTask = (id:number)=>{
        let removeTask = task.filter(elem=>elem.id !== id)
        setTask(removeTask)
    }
    let filterTask = task
    if(filter === 'Active'){
        filterTask = task.filter(elem=>elem.isDone)
    }
    if(filter === 'Checked'){
        filterTask = task.filter(elem=>!elem.isDone)
    }
    let onClickHundler = (name:string)=>{
        setFilter(name)
    }

    return <div className='App'>
        <Tasks task={filterTask}
               title='What I Learn'
               buttonRemoveTask={buttonRemoveTask}
               onClickHundler={onClickHundler}
        />
    </div>
}
export default Todolist