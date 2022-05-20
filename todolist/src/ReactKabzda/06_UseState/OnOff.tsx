import React from "react";
import ListShowHide from "./ListShowHide";

type OnOffType = {
    on:boolean
    onClick:(on:boolean)=>void
}

const OnOff = (props: OnOffType) => {
    const onStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'lightgreen': 'white'
    }
    const offStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white': 'red'
    }
    const indicatorStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '50px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor:props.on ? 'lightgreen' : 'red'
    }
        const turnOn = ()=> props.onClick(true)
        const turnOff = ()=> props.onClick(false)

    return <div>
        <button style={onStyle} onClick={turnOn}>ON</button>
        <button style={offStyle} onClick={turnOff}>OFF</button>
        <button style={indicatorStyle}>{props.on? 'ON': 'OFF'}</button>

        <hr/>
        <ListShowHide/>
    </div>
}
export default OnOff