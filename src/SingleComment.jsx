import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { commentDelete, commentUpdate } from "./redux/actions"

export default function SingleComment({data}){
    const [commentText, setCommentText] = useState('')
    const {text, id} = data
    const dispatch = useDispatch() 
    useEffect(()=>{
        function updateComments(){
            text && setCommentText(text)
        }
        updateComments()
    }, [text])

    const handleInput = (e) => {
        e.preventDefault()
        setCommentText(e.target.value)
    }

    const inputSubmit = (e) =>{
        e.preventDefault()
        return (dispatch(commentUpdate(commentText, id)))
    }

    const handleDelete = (e) => {
        console.log('delete comment >> ', text, id);
        return (dispatch(commentDelete(text, id)))
    }

    return (
        <form onSubmit={inputSubmit} action="" className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input value={commentText} type="text" onChange={handleInput} />
            <input type="submit" hidden/>
        </form>
    )
}