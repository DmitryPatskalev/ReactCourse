import React from "react";
import {FilterType} from "./Todolist";
import './style.css'


type FilterButtonTaskType = {
    onClickHundler:(name:FilterType)=>void
    filter:FilterType
}

const FilterButtonTask = (props:FilterButtonTaskType) => {

    const buttonShowAll = ()=>{
        props.onClickHundler('All')
    }
    const buttonShowActive= ()=>{
        props.onClickHundler('Active')
    }
    const buttonShowCompleted= ()=>{
        props.onClickHundler('Completed')
    }

    const activeAll =  props.filter === 'All'? 'active':''
    const activeActive =  props.filter === 'Active'? 'active':''
    const activeCompleted =  props.filter === 'Completed'? 'active':''


    return <div className='buttonsFilter'>
        <button className={activeAll} onClick={buttonShowAll}>All</button>
        <button className={activeActive} onClick={buttonShowActive}>Active</button>
        <button className={activeCompleted} onClick={buttonShowCompleted}>Completed</button>
    </div>
}

export default FilterButtonTask


