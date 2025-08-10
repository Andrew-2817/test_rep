import { useSelector } from "react-redux";

export default function HeaderName(){
    const name = useSelector((state) =>{
        console.log(state);
        const {formReducer} = state
        console.log(formReducer.data.name);
        
        return formReducer.data.name
    })
    return <h4>{name}</h4>
}