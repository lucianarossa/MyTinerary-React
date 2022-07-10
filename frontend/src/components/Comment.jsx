import React, { useRef } from "react";
import "../styles/itinerary.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import commentsActions from "../redux/actions/commentsActions";
import toast from 'react-hot-toast';

function Comment({ itineraries}) {
    // console.log("ITINERARIO", itineraries)

    const user = useSelector(store => store.usersReducer.user)
    const [inputText, setInputText] = useState()
    const [modify, setModify] = useState()
    const [itinerary, setItinerary] = useState(itineraries.data)
    const dispatch = useDispatch()
    const inputTextElement = useRef(null)
    const [reload, setReload] = React.useState(false)

    function handleInputText(event) {
        setInputText(event.currentTarget.textContent)
    } 

    function reloadChanger(){
        setReload(!reload)
      }

    //AGREGAR COMENTARIO

    async function addCommentUser(event) {
        const commentData = {
            itinerary: itineraries.data._id,
            comment: inputText,
        }
        const resp = await dispatch(commentsActions.addComment(commentData))
        setItinerary(resp.response.newComment)
        inputTextElement.current.innerText = ""
        reloadChanger()
        
     
        if (resp.success) {
            toast.success(resp.message)
        } else {
            toast.error(resp.message)
        }
    }

    //EDITAR COMENTARIO

    async function modifyComment(event) {
        const commentData = {
            commentID: event.target.id,
            comment: modify,
        }
        const res = await dispatch(commentsActions.modifyComment(commentData))
        setItinerary(res.data.response.newComment)
        setModify(res.data)
        reloadChanger()
        
        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    //ELIMINAR COMENTARIO

    async function deleteComment(event) {
        const res = await dispatch(commentsActions.deleteComment(event.target.id))
        setItinerary(res.data.response.deleteComment)
        reloadChanger()
        

        if (res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }


    return (
        <>
            <h3 className="funtitle">OUR TRAVELERS SAY</h3>

            <div className="comment-box-comment" style={{ display: "flex", flexDirection: "column", backgroundColor: "white" }}>

                {itinerary?.comments.map(comment =>
                    <div className="boxes" key={comment._id}>
                        
                        {/* SI EL USUARIO NO ES EL QUE HIZO EL COMENTARIO */}
                        {comment?.userId._id !== user?.id ?
                        
                                <div className="comments-container">
                                    <Stack direction="row" spacing={2}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={comment.userId.image}
                                            sx={{ width: 56, height: 56, margin: 2 }}
                                        />
                                    </Stack>
                                    <div className="comment-author">{comment.userId.firstName} {comment.userId.lastName}</div>
                                    <div className="comment-box">
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            
                            :
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
                        }
                    </div>
                )}

                {/* CONDICION USUARIO LOGUEADO*/}

                {user ?
                    <>
                        <div className="boxes">
                            <div className="comments-container">
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={user.image}
                                        sx={{ width: 56, height: 56, margin: 2 }}
                                    />
                                </Stack>
                                <div className="comment-author">{user.firstName} {user.lastName}</div>
                                <div className="comment-box" ref={inputTextElement} onInput={handleInputText} contentEditable suppressContentEditableWarning={true}></div>

                            </div>
                            <div className="comment-buttons">
                                <button onClick={addCommentUser} className="call-button comment-button">ADD✔️</button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="login-button-box">
                        <p> SIGNUP AND LOGIN TO ADD A COMMENT! </p>
                    </div>
                }
            </div>
        </>

    )
}

export default Comment