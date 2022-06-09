import React from "react";
import './style.css'

import './style.css'
import {FilterType} from "./Todolist";
import {Button} from "@material-ui/core";

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

    // const activeAll = props.filter === 'All' ? 'active' : ''
    // const activeActive = props.filter === 'Active' ? 'active' : ''
    // const activeCompleted = props.filter === 'Completed' ? 'active' : ''

    return <div className='buttonsFilter'>
        <Button onClick={showAll}
                color={'primary'}
                variant={props.filter ==='All'? 'contained':'text'}>All</Button>
        <Button onClick={showActive}
                color={'primary'}
                variant={props.filter === 'Active' ? 'contained':'text'}>Active</Button>
        <Button onClick={showCompleted}
                color={'primary'}
                variant={props.filter === 'Completed' ? 'contained':'text'}>Completed</Button>

    </div>
}

export default FilterButtonTask


