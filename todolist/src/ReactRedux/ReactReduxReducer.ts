
import {createStore} from "redux";


    const defaultState = {
        cash: 0
    }

    export const reducer = (state = defaultState, action:any)=>{
        switch (action.type){
            case 'ADD_CASH':
                return {...state, cash: state.cash + action.payload}
            case 'GET_CASH':
                return {...state, cash: state.cash - action.payload}
            default:
                return state

        }
    }

  export const store = createStore(reducer)


