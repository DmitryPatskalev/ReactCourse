import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../util/localStorageUtils";


export const rootReducer = combineReducers({
    counter: CounterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    })
    localStorage.setItem('appState', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>

type AppStoreType = typeof store