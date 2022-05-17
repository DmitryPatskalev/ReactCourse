import React from "react";
import "./App.css";
import Todolist from "./MicroTask/Todolist/Todolist";
import OnOff from "./ReactKabzda/06_UseState/OnOff";
import StarRating from "./Traning/StarRating";
import Callback from "./Native/06_Callback/Callback";
import SwitchOnOff from "./ReactKabzda/06_UseState/SwitchOnOff";

function App() {
  return (
    <div className="App">
        {/*<Todolist/>*/}
        <SwitchOnOff/>
        {/*<hr/>*/}
        <StarRating/>
        {/*<hr/>*/}
        {/*<Callback/>*/}

    </div>
  );
}


export default App;
