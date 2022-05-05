import React from "react";
import StarValue from "./StarValue";
import OnOff from "./OnOff/OnOff";
import SwitchButton from "./OnOff/SwitchButton";



const StarRating = () => {
    return <div>
        <h1>Rating</h1>
        <StarValue value={0}/>
        <StarValue value={1}/>
        <StarValue value={2}/>
        <StarValue value={3}/>
        <StarValue value={4}/>
        <StarValue value={5}/>
        <hr/>
        <OnOff/>
        <hr/>
        <SwitchButton/>

    </div>
}
export default StarRating