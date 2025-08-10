import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENT_LOAD } from "./types"
const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log('commentsReducer >>', action, state); 
    // return state  
    switch (action.type) {
        case COMMENT_LOAD:
            const commentsNew = action.data.map(com => {
                return {
                    text: com.name,
                    id: com.id
                }
            })
            return{
                ...state,
                comments: commentsNew
            }
        case COMMENT_CREATE:
            return{
                ...state,
                comments : [...state.comments, action.data]
            }
        case COMMENT_UPDATE:   
            const cur_comment_index = state.comments.findIndex(comment => comment.id === action.data.id)
            const nextComments = [
                ...state.comments.slice(0, cur_comment_index),
                action.data,
                ...state.comments.slice(cur_comment_index+1)
            ]
            return {
                ...state,
                comments: nextComments
            }
        case COMMENT_DELETE:
            // первый способ
            // const nextCommentsFIlter = state.comments.filter(c => c.id !== action.data.id)
            // return {
            //     ...state,
            //     comments: nextCommentsFIlter
            // }

            // второй способ
            // самовызывающееся функция чтобы изолировать переменные от глобальной обл. видимости
            return (() =>{
                const cur_comment_index = state.comments.findIndex(comment => comment.id === action.data.id)
                const nextComments = [
                    ...state.comments.slice(0, cur_comment_index),
                    ...state.comments.slice(cur_comment_index+1)
                ]
                return {
                    ...state,
                    comments: nextComments
                }
            })()
        default:
            return state
    }
}