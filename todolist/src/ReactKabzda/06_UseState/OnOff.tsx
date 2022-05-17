import React from "react";
import ShowHide from "./ShowHide";


type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: OnOffType) => {
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'lightgreen' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
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
        backgroundColor: props.on ? 'lightgreen' : 'red'
    }
    let changeOn = () => props.onChange(true)
    let changeOf = () => props.onChange(false)
    return <div>
        <div onClick={changeOn} style={onStyle}>ON</div>
        <div onClick={changeOf} style={offStyle}>OFF</div>
        <div style={indicatorStyle}>{props.on ? 'ON' : 'OFF'}</div>

        <hr/>
        <ShowHide/>
    </div>
}
export default OnOff