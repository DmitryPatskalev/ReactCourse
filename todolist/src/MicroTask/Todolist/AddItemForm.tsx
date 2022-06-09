import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './style.css'
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
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
            props.addItem(newTask.trim())
        } else {
            serError('Input the message')
        }
        setNewTask('')
    }

    return <div>
        <TextField
          variant={'outlined'}
          label={'Title value'}
          error={!!error}
          helperText={error}
          value={newTask}
          onChange={onChangeHundler}
          onKeyPress={onKeyPressHundler}
        />

        <IconButton
          color={'primary'}
          onClick={onClickAddTask}>
            <ControlPoint/>
        </IconButton>
    </div>
}
