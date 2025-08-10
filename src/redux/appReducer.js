import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "./types"
const initialState = {
    spin: true
}

export const appReducer = (state = initialState, action) => {
    console.log('commentsReducer >>', action, state); 
    // return state  
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return{
                ...state,
                spin: true
            }
        case LOADER_DISPLAY_OFF:
            return{
                ...state,
                spin: false
            }

        default:
            return state
    }
}