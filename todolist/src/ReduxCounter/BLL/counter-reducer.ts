const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {...state, value:action.value }
        default:
            return state
    }
}
export const incCounterValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValuesFromLocalStorageAC = (value:number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE',value} as const)

export type IncValueAT = ReturnType<typeof incCounterValueAC>
export type SetValuesFromLocalStorageACAT = ReturnType<typeof setValuesFromLocalStorageAC>


type ActionType = IncValueAT|SetValuesFromLocalStorageACAT