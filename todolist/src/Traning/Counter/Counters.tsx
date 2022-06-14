import React from "react";
import FirstVersionCounter from "./FirstVersion/FirstVersionCounter";
import SecondVersionCounter from "./SecondVersion/SecondVersionCounter";
import {NavLink, Route, Routes} from "react-router-dom";


const Counters = ()=>{
    return <div>
        <div><NavLink to={'/firstVersion'}>First Version</NavLink></div>
        <div><NavLink to={'/secondVersion'}>Second Version</NavLink></div>

        <Routes>
            <Route path={'/firstVersion'} element={<FirstVersionCounter/>}/>
            <Route path={'/secondVersion'} element={<SecondVersionCounter/>}/>
        </Routes>

    </div>


}
export default Counters