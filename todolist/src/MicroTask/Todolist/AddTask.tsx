import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './style.css'

type AddTaskType = {
    addTasks: (title: string) => void
}

export const AddTask = (props: AddTaskType) => {
    const [newTask, setNewTask] = useState('')
    const [error, serError] = useState<string | null>(null)

    const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        serError(null)
        setNewTask(event.currentTarget.value)
    }
    const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            onClickAddTask()
        }
    }

    const onClickAddTask = () => {
        if (newTask.trim() !== '') {
            props.addTasks(newTask.trim())
        } else {
            serError('Input the message')
        }
        setNewTask('')
    }

    return <div>
        <input
          className={error ? 'error' : ''}
          value={newTask}
          onChange={onChangeHundler}
          onKeyPress={onKeyPressHundler}
        />

        <button
          onClick={onClickAddTask}>+
        </button>
        {error && <div className='error-message'>{error}</div>}
    </div>
}
export default AddTask