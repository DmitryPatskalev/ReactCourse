import React, {ChangeEvent, useState} from "react";

const Callback = () => {
    const [value, setValue] = useState('')

    const onChange = (event:ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(event.currentTarget.value)
    }

    const saveUser = ()=>{
        alert('User have been saved')
    }

    return <div>
        <textarea onChange={onChange}></textarea>

        <button  onClick={()=>alert(value)}>Delete</button>
        <button onClick={saveUser}>Save</button>
    </div>
}
export default Callback