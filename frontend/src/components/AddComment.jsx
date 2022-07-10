import React, { useRef} from "react";
import "../styles/itinerary.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import commentsActions from "../redux/actions/commentsActions";
import toast from 'react-hot-toast';
import Comments from "./Comments"


function AddComment({itineraries, setChangeReload}) {
    // console.log("ITINERARIO", itineraries)

    const user = useSelector(store => store.usersReducer.user)
    const [inputText, setInputText] = useState()
    const dispatch = useDispatch()
    const inputTextElement = useRef(null)
    

    function handleInputText(event) {
        setInputText(event.currentTarget.textContent)
    } 

    //AGREGAR COMENTARIO

    async function addCommentUser(event) {
        const commentData = {
            itinerary: itineraries.data._id,
            comment: inputText,
        }
        const resp = await dispatch(commentsActions.addComment(commentData))
        inputTextElement.current.innerText = ""
        setChangeReload()
        
     
        if (resp.success) {
            toast.success(resp.message)
        } else {
            toast.error(resp.message)
        }
    }


    return (
        <>
            <h3 className="funtitle">OUR TRAVELERS SAY</h3>

            <div className="comment-box-comment" style={{ display: "flex", flexDirection: "column", backgroundColor: "white" }}>

                {itineraries?.data.comments.map(comment =>
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

                            <Comments comment={comment} setChangeReload={setChangeReload}/>
                            
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

export default AddComment