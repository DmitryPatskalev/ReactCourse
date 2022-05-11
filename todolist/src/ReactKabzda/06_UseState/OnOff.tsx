import React, {useState} from "react";
import ShowHide from "./ShowHide";

export type OnOffType = {
    // on: boolean
}


const OnOff = (props: OnOffType) => {
    const [value, setValue] = useState(false)
    let on
    on = !value;

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding:'5px',
        margin: '10px',
        display:'inline-block',
        backgroundColor: on ?'lightgreen': 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding:'5px',
        margin: '10px',
        display:'inline-block',
        backgroundColor:on ?'white': 'red'
    }
    const indicatorStyle = {
        width:'30px',
        height:'30px',
        border:'1px solid black',
        borderRadius:'15px',
        margin: '10px',
        display:'inline-block',
        backgroundColor:on ?'lightgreen': 'red'


    }

    return <div>
        <div style={onStyle} onClick={()=> setValue(false) }>ON</div>
        <div style={offStyle} onClick={()=> setValue(true) }>OFF</div>
        <div style={indicatorStyle}></div>
        <hr/>
        <ShowHide/>
    </div>
}
export default OnOff