import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './style.css'

type AddTaskType = {
    addTasks: (title: string) => void

}

export const AddTask = (props: AddTaskType) => {
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState<string | null>('')

    let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setNewTask(event.currentTarget.value)
    }

    let onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            onClickHundler()
            setNewTask('')
        }
    }
    let onClickHundler = () => {
        if (newTask.trim() !== '') {
            props.addTasks(newTask)
        }else {
            setError('Please, enter the data')
        }
        setNewTask('')
    }

    return <div>
        <input className={error? 'error':''}
          value={newTask}
          onChange={onChangeHundler}
          onKeyPress={onPressKeyHundler}
        />
        <button onClick={onClickHundler}>+</button>
        {error && <div className='error-message'>{error}</div>}

    </div>
}
export default AddTask