import { connect } from "react-redux";
import { incrementLikes, dicrementLikes } from "./redux/actions";

function Likes(props){
    console.log(props);
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>♥{props.likes}</button>
            <button onClick={props.onDicrementLikes}>Dislike</button>
        </div>
    )
    
}

// связываем state c компонентом и берем то что нужно
function mapStateToProps(state){
    console.log(state);
    const {likesReducer} = state
    return{
        likes: likesReducer.likes
    }
}

// создаем action для reducer`а
function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () =>dispatch(incrementLikes()),
        onDicrementLikes: () =>dispatch(dicrementLikes())
    }
}

// привязываем reducer к компоненту
export default connect(mapStateToProps, mapDispatchToProps)(Likes)