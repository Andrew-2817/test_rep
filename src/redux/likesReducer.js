import { INCREMENT, DICREMENT } from "./types"
const initialState = {
    likes: 10
}

export const likesReducer = (state = initialState, action) => {
    console.log('state >>', action);   
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                likes : state.likes+1
            }
        case DICREMENT:
            return{
                ...state,
                likes : state.likes-1
            }
        default:
            return state
    }
}