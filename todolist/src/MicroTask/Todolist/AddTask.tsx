import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddTaskType = {
    addTasks: (title: string) => void
}

export const AddTask = (props: AddTaskType) => {
    const [message, setMessage] = useState('')

    let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    let onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.addTasks(event.currentTarget.value)
            setMessage('')
        }
    }
    let onClickHundler = () => {
        props.addTasks(message)
        setMessage('')
    }

    return <div>
        <input
          value={message}
          onChange={onChangeHundler}
          onKeyPress={onPressKeyHundler}
        />
        <button onClick={onClickHundler}>+</button>

    </div>
}
export default AddTask