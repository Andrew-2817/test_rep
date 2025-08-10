import { useDispatch, useSelector } from 'react-redux';
import { inputAction } from './redux/actions';
export default function Title(props){
    const dispatch = useDispatch()

    console.log("props_title >>>>", props);
    function handleChange(e){
        console.log('handleChange >>>> ', e.target.value);
        return dispatch(inputAction(e.target.value))
    }
    const title = useSelector((state) =>{
        const {inputReducer} = state
        return inputReducer.text
    })

    return(
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={handleChange}/>
            </div>
            <p>{title}</p>
        </div>
    ) 
}