import { INCREMENT, DICREMENT, INPUT_ACTION, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, FORM_NAME, COMMENT_LOAD, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from "./types";

export function incrementLikes(){
    return {type: INCREMENT}
}
export function dicrementLikes(){
    return {type: DICREMENT}
}
export function inputAction(value){
    return {
        type: INPUT_ACTION,
        text: value
    }
}
export function commentCreate(text, id){
    return {
        type: COMMENT_CREATE,
        data: {text, id}
    }
}
export function commentUpdate(text, id){
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}
export function commentDelete(text, id){
    return {
        type: COMMENT_DELETE,
        data: {text, id}
    }
}
export function createForm(email, name, password){
    return {
        type: FORM_NAME,
        data: {email, name, password}
    }
}     
export function loaderOn() {
    return {
      type: LOADER_DISPLAY_ON
    }
  }
  export function loaderOff() {
    return {
      type: LOADER_DISPLAY_OFF
    }
  }
export function commentsLoad() {
    return async dispatch => {
      try {
        dispatch(loaderOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
    
        setTimeout(() => {
          dispatch({
            type: COMMENT_LOAD,
            data: jsonData
          });
          dispatch(loaderOff());
        }, 1000);
      } catch(err) {
        // dispatch(errorOn('Ошибка API'));
        // dispatch(loaderOff());
            console.log(err);
            
      }
    }
  }
