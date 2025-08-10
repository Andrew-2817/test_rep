import { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "./redux/actions";


export function Form() {
    const [formData, setFormData] = useState({
        email: '',
        text: '',
        password: ''
    })
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData);
        return dispatch(createForm(formData.email, formData.text, formData.password))
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" />
            <input value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})} type="text" />
            <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" />
            <input type="submit" hidden name="" id="" />
        </form>
    )
}