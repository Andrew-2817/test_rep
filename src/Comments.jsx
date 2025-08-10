import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { commentCreate, commentsLoad } from "./redux/actions"
import SingleComment from "./SingleComment"
import uniqid from 'uniqid'
export default function Comments(props){
    const [textComment, setTextComment] = useState('')
    const dispatch = useDispatch()
    const comments = useSelector((state) =>{
        const {commentsReducer} = state
        return commentsReducer.comments
    })
    const handleInput = (e) =>{
        console.log('input >> ', e.target.value);
        setTextComment(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit>> ", textComment);
        setTextComment('')
        const id = uniqid()
        return dispatch(commentCreate(textComment, id))
    }
    useEffect(() =>{
        dispatch(commentsLoad())
    }, [])
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} action="" className="comments-item-create">
                <input value={textComment} onChange={handleInput} type="text" />
                <input type="submit" hidden/>
            </form>
            {comments && comments.map(c =>{
                return <SingleComment key={c.id} data={c} />
            })}
        </div>
    )
}