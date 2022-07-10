import React from "react";
import "../styles/itinerary.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch} from "react-redux"
import { useState } from "react";
import commentsActions from "../redux/actions/commentsActions";
import toast from 'react-hot-toast';

function Comments({comment, setChangeReload}){


    const [modify, setModify] = useState()
    const dispatch = useDispatch()


    //EDITAR COMENTARIO

    async function modifyComment(event) {
        const commentData = {
            commentID: event.target.id,
            comment: modify,
        }
        const res = await dispatch(commentsActions.modifyComment(commentData))
        setChangeReload()
        
        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    //ELIMINAR COMENTARIO

    async function deleteComment(event) {
        const res = await dispatch(commentsActions.deleteComment(event.target.id))
        setChangeReload()
        

        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }


    return(

        <>
                                <div>
                                    <div className="comments-container">
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={comment.userId.image}
                                                sx={{ width: 56, height: 56, margin: 2 }}
                                            />
                                        </Stack>
                                        <div className="comment-author">{comment.userId.firstName} {comment.userId.lastName}</div>
                                        <div className="comment-box" onInput={(event) => setModify(event.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable>{comment.comment}</div>
                                    </div>
                                    <div className="comment-buttons">
                                        <button onClick={modifyComment} id={comment._id} className="call-button comment-button">EDIT✏️</button>
                                        <button onClick={deleteComment} id={comment._id} className="call-button comment-button">DELETE❌</button>
                                    </div>
                                </div>
                            </>





    )
}

export default Comments