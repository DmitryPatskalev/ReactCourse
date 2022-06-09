import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    onChange:(newValue:string)=>void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [newValue, setNewValue] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const activateIsEdit = () => {
        setIsEdit(true)
        setNewValue(props.title)
    }

    const activateViewMode = () => {
        setIsEdit(false)
        props.onChange(newValue)
    }
    const onChangeTitleHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.currentTarget.value)
    }

    return isEdit ?
      <TextField value={newValue}
             onBlur={activateViewMode}
             autoFocus
             onChange={onChangeTitleHundler}
      />:
      <span onDoubleClick={activateIsEdit}>{props.title}</span>


}