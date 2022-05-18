import React from "react";
import ShowHide from "./ShowHide";

type OnOffType = {
    on: boolean
    onClick: (on: boolean) => void
}

const OnOff = (props: OnOffType) => {
    const onStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'lightgreen' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '15px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'lightgreen': 'red'
    }

        const buttonOn =()=> props.onClick(true)
        const buttonOff =()=> props.onClick(false)
    return <div>
        <button style={onStyle} onClick={buttonOn}>ON</button>
        <button style={offStyle} onClick={buttonOff}>OFF</button>
        <button style={indicatorStyle}>{props.on? 'on':'off'}</button>
        <hr/>
        <ShowHide/>
    </div>
}
export default OnOff