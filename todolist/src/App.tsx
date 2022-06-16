import React from "react";
import "./App.css";
import Todolist from "./MicroTask/Todolist/Todolist";
import StarRating from "./Traning/StarRating/StarRating";
import Callback from "./Native/06_Callback/Callback";
import SwitchOnOff from "./Traning/ButtonOnOff/SwitchOnOff";

import Exams from "./Exams/Exams";
import Counters from "./Traning/Counter/Counters";
import {BrowserRouter} from "react-router-dom";
import SortArray from "./MicroTask/SortArray/SortArray";
import ReactFundament from "./MicroTask/ReactFundament/ReactFundament";
import ExperimentTable from "./MicroTask/ExperimentsTodolist/ExperimentTable";




function App() {
    return (
      <div className="App">
          {/*<Todolist/>*/}
          {/*<hr/>*/}
          {/*<SwitchOnOff/>*/}
          {/*<hr/>*/}
          {/*<StarRating/>*/}

          {/*<BrowserRouter>*/}
          {/*    <Counters/>*/}
          {/*</BrowserRouter>*/}
          {/*<SortArray/>*/}
          {/*<ReactFundament/>*/}


          {/*<Callback/>*/}
          {/*<Exams/>*/}

          <ExperimentTable/>
      </div>
    );
}


export default App;
