import React from "react";
import './style.css'

import './style.css'
import {FilterType} from "./Todolist";

type FilterButtonTask = {
    buttonFilterTask: (value: FilterType,todoListId: string) => void
    filter: FilterType
    id:string
}


const FilterButtonTask = (props: FilterButtonTask) => {

    const showAll = () => {
        props.buttonFilterTask('All', props.id)
    }
    const showActive = () => {
        props.buttonFilterTask('Active',props.id)
    }
    const showCompleted = () => {
        props.buttonFilterTask('Completed',props.id)
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


