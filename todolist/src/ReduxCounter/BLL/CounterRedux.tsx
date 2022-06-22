import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store";
import {incCounterValueAC} from "./counter-reducer";


const CounterRedux = () => {
    const value = useSelector<AppStateType,number>(state => state.counter.value)
    const dispatch = useDispatch()
useEffect(()=>{

},[])

    const incHundler = ()=>{

        // @ts-ignore
        dispatch(incCounterValueAC())
    }
    return (
      <div>
          <h3>{value}</h3>
          <button onClick={incHundler}>inc</button>

      </div>
    );
};

export default CounterRedux;