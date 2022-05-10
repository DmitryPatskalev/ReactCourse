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
        <button onClick={buttonShowAll}>All</button>
        <button onClick={buttonShowActive}>Active</button>
        <button onClick={buttonShowChecked}>Checked</button>
    </div>
}

export default FilterButtonTask


