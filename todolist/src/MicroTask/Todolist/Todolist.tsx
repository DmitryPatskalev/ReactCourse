import React, {useState} from "react";
import {Tasks} from "./Tasks";
import './../../App.css'
import {v1} from "uuid";


export type Todolist = {
    id: string
    tech: string
    isDone: boolean
}
export type FilterType = 'All' | 'Active' | 'Checked'

const Todolist = () => {
    let tasks: Array<Todolist> = [
        {id: v1(), tech: 'JS', isDone: true},
        {id: v1(), tech: 'React', isDone: true},
        {id: v1(), tech: 'C++/C#', isDone: false},
        {id: v1(), tech: 'Python', isDone: false},
        {id: v1(), tech: 'CSS/HTML', isDone: true},
    ]
    const [task, setTask] = useState(tasks)
    const [filter, setFilter] = useState('All')

    let buttonRemoveTask = (id: string) => {
        let removeTask = task.filter(elem => elem.id !== id)
        setTask(removeTask)
    }
    let filterTask = task
    if (filter === 'Active') {
        filterTask = task.filter(elem => elem.isDone)
    }
    if (filter === 'Checked') {
        filterTask = task.filter(elem => !elem.isDone)
    }
    let onClickHundler = (name: string) => {
        setFilter(name)
    }

    let addTasks = (title:string)=>{
        let addTask = {
            id:v1(),
            tech:title,
            isDone:true
        }
        setTask([addTask,...task])
    }

    let changeStatus = (taskId:string, isDone:boolean)=>{
        let changedTask = task.find(t=>t.id === taskId)
        if(changedTask){
            changedTask.isDone = isDone
        }
        setTask([...task])
    }

    return <div className='App'>
        <Tasks task={filterTask}
               title='What I Learn'
               buttonRemoveTask={buttonRemoveTask}
               onClickHundler={onClickHundler}
               addTasks={addTasks}
               changeStatus={changeStatus}
        />
    </div>
}
export default Todolist