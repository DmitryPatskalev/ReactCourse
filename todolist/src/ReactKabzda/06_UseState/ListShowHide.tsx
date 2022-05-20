import React, {useState} from "react";

import ShowHideMenu from "./ShowHide";

const ListShowHide = ()=>{
    const [value, setValue] = useState(false)
    return <div>
        <ShowHideMenu show={value} showOff={setValue}/>
    </div>
}
export default ListShowHide