import React, {useState} from "react";
import OnOff from "./OnOff";

const SwitchOnOff = () => {
    const [turnOn, setTurnOn] = useState(false)


    return <div>
        <OnOff on={turnOn} onClick={setTurnOn}/>
    </div>
}
export default SwitchOnOff