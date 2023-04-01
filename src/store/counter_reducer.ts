
export type StateType = {
    currentValue: number
    maxValue: number
    minValue: number
}

const initialState = {
    currentValue: 0,
    maxValue: 2,
    minValue: 0
}

type ActionType = ReturnType<typeof setMinValueAC> | ReturnType<typeof setMaxValueAC> | ReturnType<typeof setCurrentValueAC>

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "SET_MIN_VALUE":
            return {...state, minValue: action.minValue}

        case "SET_MAX_VALUE":
            return {...state, maxValue: action.maxValue}

        case "SET_CURRENT_VALUE":
            return {...state, currentValue: action.currentValue}
    
        default: return state
    }
}

export const setMinValueAC = (minValue:number) => ({type: 'SET_MIN_VALUE', minValue} as const)
export const setMaxValueAC = (maxValue:number) => ({type: 'SET_MAX_VALUE', maxValue} as const)
export const setCurrentValueAC = (currentValue:number) => ({type: 'SET_CURRENT_VALUE', currentValue} as const)