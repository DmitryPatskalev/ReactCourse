import React, {useState} from "react";

import './../../App.css'
import {v1} from "uuid";
import {Tasks} from "./Tasks";


export type TodoListType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

type TodoListsType = {
    id: string
    title: string
    filter: FilterType

}

const Todolist = () => {

    const todoListID1 = v1()
    const todoListID2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todoListID1, title: 'What I Learn', filter: 'All'},
        {id: todoListID2, title: 'What to Buy', filter: 'All'},
    ])

    let tasks = {
        [todoListID1]: [
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'C++/C#', isDone: false},
            {id: v1(), title: 'Python', isDone: false},
            {id: v1(), title: 'CSS/HTML', isDone: true},
        ],
        [todoListID2]: [
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Bear', isDone: true},
            {id: v1(), title: 'Whisky', isDone: false},
        ]
    }

    const [task, setTask] = useState(tasks)


    const buttonRemoveTask = (id: string, todoListId: string) => {
        let todolist = task[todoListId]
        task[todoListId] = todolist.filter(elem => elem.id !== id)
        setTodoLists([...todoLists])
    }

    let buttonFilterTask = (value: FilterType, todoListId: string) => {
        let todoList = todoLists.find(tl => tl.id === todoListId)
        if (todoList) {
            todoList.filter = value
            setTodoLists([...todoLists])
        }
    }

    const addTasks = (title: string, todoListId: string) => {
        let addTask = {
            id: v1(),
            title: title,
            isDone: true
        }
        let todolist = task[todoListId]
        task[todoListId] = [addTask, ...todolist]
        setTask({...task})
    }

    const changeStatus = (taskId: string, isDone: boolean, todoListId: string) => {
        let todolist = task[todoListId]
        let changeChecked = todolist.find(elem => elem.id === taskId)
        if (changeChecked) {
            changeChecked.isDone = isDone
        }
        setTask({...task})
    }
    const buttonRemTodoList = (todoListId:string)=>{
        let filterTodolist = todoLists.filter(tl=>tl.id !==todoListId)
        setTodoLists(filterTodolist)
        delete task[todoListId]
        setTask({...task})
    }

    return <div className='App'>
        {todoLists.map(tl => {
            let filterTasks = task[tl.id]
            if (tl.filter === 'Active') {
                filterTasks = filterTasks.filter(elem => !elem.isDone)
            }
            if (tl.filter === 'Completed') {
                filterTasks = filterTasks.filter((elem => elem.isDone))
            }
            return <Tasks
              key={tl.id}
              id={tl.id}
              title={tl.title}
              tasks={filterTasks}
              buttonRemoveTask={buttonRemoveTask}
              buttonFilterTask={buttonFilterTask}
              addTasks={addTasks}
              changeStatus={changeStatus}
              filter={tl.filter}
              buttonRemTodoList={buttonRemTodoList}
            />
        })}

    </div>
}
export default Todolist