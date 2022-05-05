import React from "react";

type TurnOnOffType = {
    name: 'ON' | 'OFF'

}

const TurnOnOff = (props: TurnOnOffType) => {
    return <div>
        <Button value={props.name === 'ON'}/>
        <Button value={props.name === 'OFF'}/>

    </div>
}
export default TurnOnOff

const Button = (props: any) => {
    if (props.value === true) {
        return <p>
            <button style={{backgroundColor: 'lightgreen', margin: '10px'}}>Включено</button>
        </p>
    } else {
        return <p>
            <button style={{backgroundColor: 'red', margin: '10px'}}>Выключено</button>
        </p>
    }
}