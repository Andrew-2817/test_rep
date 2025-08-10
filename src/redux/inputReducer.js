import { INPUT_ACTION } from "./types"
const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) => {
    console.log('inputReducer >>', action, state);   
    switch (action.type) {
        case INPUT_ACTION:
            return{
                ...state,
                text : action.text
            }
        default:
            return state
    }
}