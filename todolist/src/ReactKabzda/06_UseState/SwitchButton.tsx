import React, {useState} from "react";
import TurnOnOff from "./TurnOnOff";
import button from "../../MicroTask/Button/Button";

const SwitchButton = () => {
    const [value, setValue] = useState()
    let elem;
    if (value) {
        elem = <TurnOnOff name='ON'/>
    } else {
        elem = <TurnOnOff name='OFF'/>
    }
    return <div>
        <button onClick={() => setValue(!value)} style={{margin: '10px'}}>
            {value? 'Включить' : 'Выключить'}
            </button>
        {elem}
    </div>
}
export default SwitchButton
