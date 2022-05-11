import React from "react";
import "./App.css";
import Todolist from "./MicroTask/Todolist/Todolist";
import OnOff from "./ReactKabzda/06_UseState/OnOff";
import StarRating from "./Traning/StarRating";

function App() {
  return (
    <div className="App">
        {/*<Todolist/>*/}
        <OnOff/>
        <hr/>
        <StarRating/>

    </div>
  );
}


export default App;
