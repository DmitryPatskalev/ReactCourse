import React from "react";
import {FilterType} from "./Todolist";

type FilterButtonTaskType = {
    onClickHundler:(name:FilterType)=>void
}

const FilterButtonTask = (props:FilterButtonTaskType) => {

    let buttonShowAll = ()=>{
        props.onClickHundler('All')
    }
    let buttonShowActive= ()=>{
        props.onClickHundler('Active')
    }
    let buttonShowChecked= ()=>{
        props.onClickHundler('Checked')
    }

    return <div>
        <button className='showAll' onClick={buttonShowAll}>All</button>
        <button className='showActive' onClick={buttonShowActive}>Active</button>
        <button className='showChecked' onClick={buttonShowChecked}>Checked</button>
    </div>
}

export default FilterButtonTask


