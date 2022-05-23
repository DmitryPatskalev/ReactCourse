import React from "react";
import './style.css'

import './style.css'
import {FilterType} from "./Todolist";

type FilterButtonTask = {
    buttonFilterTask: (todoListId: string,value: FilterType) => void
    filter: FilterType
    todolistID:string
}


const FilterButtonTask = (props: FilterButtonTask) => {

    const showAll = () => {
        props.buttonFilterTask(props.todolistID,'All', )
    }
    const showActive = () => {
        props.buttonFilterTask(props.todolistID,'Active')
    }
    const showCompleted = () => {
        props.buttonFilterTask(props.todolistID,'Completed')
    }

    const activeAll = props.filter === 'All' ? 'active' : ''
    const activeActive = props.filter === 'Active' ? 'active' : ''
    const activeCompleted = props.filter === 'Completed' ? 'active' : ''

    return <div className='buttonsFilter'>
        <button onClick={showAll} className={activeAll}>All</button>
        <button onClick={showActive} className={activeActive}>Active</button>
        <button onClick={showCompleted} className={activeCompleted}>Completed</button>

    </div>
}

export default FilterButtonTask


