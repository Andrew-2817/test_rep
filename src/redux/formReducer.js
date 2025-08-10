import { FORM_NAME } from "./types"
const initialState = {
    data: {email:'', name:'', password: ''}
}

export const formReducer = (state = initialState, action) => {
    console.log('state >>', action);   
    switch (action.type) {
        case FORM_NAME:
            return{
                ...state,
                data : {email:action.data.email, name:action.data.name, password: action.data.password}
            }
        default:
            return state
    }       
}