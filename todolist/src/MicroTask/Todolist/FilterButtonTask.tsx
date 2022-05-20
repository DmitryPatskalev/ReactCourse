import React from "react";
import './style.css'

import './style.css'
import {FilterType} from "./Todolist";

type FilterButtonTask = {
    buttonFilterTask: (name: FilterType) => void
    filter: FilterType
}


const FilterButtonTask = (props: FilterButtonTask) => {

    const showAll = () => {
        props.buttonFilterTask('All')
    }
    const showActive = () => {
        props.buttonFilterTask('Active')
    }
    const showCompleted = () => {
        props.buttonFilterTask('Completed')
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


