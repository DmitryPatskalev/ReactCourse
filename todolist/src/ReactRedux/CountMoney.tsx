import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CountMoney = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)
    return (
      <div>
          <button>пополнить счет</button>
          <button>снять со счета</button>
      </div>
    );
};

export default CountMoney;