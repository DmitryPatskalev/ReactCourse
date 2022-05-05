import React, {useState} from "react";


const OnOff = ()=>{
    const[value, setValue] = useState()
    let elem;
    if(value){
        elem = <button style={{backgroundColor:"lightgreen", margin:'10px'}}>Включено</button>
    }else{
        elem = <button style={{backgroundColor:"red", margin:'10px'}}>Выключено</button>
    }
    return <div>
        <button onClick={()=>setValue(!value)}>{value? 'Выключить':'Включить'}</button>
        {elem}

    </div>
}
export default OnOff