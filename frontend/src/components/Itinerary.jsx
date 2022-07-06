import React from "react";
import "../styles/itinerary.css"
import { Card, Text } from "@nextui-org/react";
import { Collapse, Grid } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
// import commentsActions from "../redux/actions/commentsActions";
import Activity from "./Activity";
import NotFoundActivities from "./NotFoundActivities";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Itinerary({ data }) {
    // console.log("🚀 ~ file: Itinerary.jsx ~ line 17 ~ Itinerary ~ data", data)

    const dispatch = useDispatch()
    // const [itinerary, setItinerary] = useState()
    // const [inputText, setInputText] = useState()
    // const [modif, setModif] = useState()
    // const [reload, setReload] = useState(false)
    const [likes, setLikes] = useState()
    const [activities, setActivities] = useState([])
    const user = useSelector(store => store.usersReducer.user)


    useEffect(() => {
        const activitiesIti = async () => {
            const res = await dispatch(activitiesActions.getActivitiesByItinerary(data._id));
            setActivities(res);
            // console.log("ACTIVITIES",res)
        }

        activitiesIti()
        // eslint-disable-next-line
    }, [])



    async function likesOrDislikes() {
        const res = await dispatch(itinerariesActions.likeDislike(data._id))
        console.log("RESPUESTA", res)
        setLikes(res)
    }
    console.log("LIKES", likes)


    // async function addCommentUser(event) {
    //     const commentData = {
    //         itinerary: itinerary._id,
    //         comment: inputText,
    //     }
    //     await dispatch(commentsActions.addComment(commentData))
    //         .then(response => setItinerary(response.data.response.newComment), setInputText(""))

    // }

    // async function modifyCommentUser(event) {
    //     const commentData = {
    //         commentId: event.target.id,
    //         comment: modif,
    //     }
    //     await dispatch(commentsActions.modifyComment(commentData))
    //     setReload(!reload)
    // }

    // async function deleteCommentUser(event) {
    //     await dispatch(commentsActions.deleteComment(event.target.id))
    //     setReload(!reload)
    // }


    return (
        <>
            <Card key={data._id} className="iti-card" isHoverable variant="bordered" css={{ mw: "80%", padding: "2", backgroundColor: "white", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)" }}>
                <div className="card-box">
                    <Card.Body css={{ w: "100%" }}>
                        <div>
                            <Text className="iti-title">{data.name}</Text>
                            <User
                                src={process.env.PUBLIC_URL + `${data.authorimage}`}
                                name={data.author}
                                bordered
                                color="error"
                                zoomed
                                squared
                            />
                            <Text h6 css={{ w: "100%" }}>"{data.description}"</Text>
                            <div className="price-duration">
                                <Text className="price-dur">Price:  {data.price}</Text>
                                <Text className="price-dur">Duration:  {data.duration} hs</Text>
                            </div>
                            <div className="price-duration-like">

                                {user ?
                                    <button className="button-like" onClick={likesOrDislikes}> {likes?.includes(user.id) ?
                                        (<span style={{ fontSize: "30" }}>
                                            <FavoriteIcon className="like" />
                                        </span>) :
                                        (<span style={{ fontSize: "30" }}><FavoriteBorderIcon className="nolike" /></span>)}
                                    </button>
                                    : (<span style={{ fontSize: "30" }}><FavoriteBorderIcon className="nolike" /></span>)
                                }
                                <p className="price-dur like-text">{likes?.length} likes!</p>
                            </div>
                            <div className="price-duration-hash">
                                {data.hashtags.map((hash, index) =>
                                    <div className="price-dur-hash" css={{ color: "#E993A6" }} key={index}>{hash}</div>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                    <Grid.Container gap={0} css={{ w: "100%" }}>
                        <Grid css={{ w: "100%" }}>
                            <Collapse.Group divider={false} css={{ w: "100%" }}>
                                <Collapse title="MORE INFO" shadow css={{ backgroundColor: "#8090909f", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.505)", marginBottom: "0" }}>
                                    <div className="activities-container">
                                        <h3 className="funtitle">ACTIVITIES TO ENJOY</h3>
                                        <div className="card-container">
                                            {activities?.length > 0 ?
                                                activities.map((activity, index) =>
                                                    <Activity activity={activity} key={index} />) : <NotFoundActivities />}
                                        </div>
                                        <h3 className="funtitle">OUR TRAVELERS SAY</h3>
                                        <div className="comments-container">
                                            <Stack direction="row" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={process.env.PUBLIC_URL + `${data.authorimage}`}
                                                    sx={{ width: 56, height: 56, margin: 2 }}
                                                />
                                            </Stack>
                                            <div className="comment-author">Jenny Williams:</div>

                                            <div className="comment-box">Really Fun!</div>
                                        </div>
                                    </div>

                                </Collapse>
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </div>
            </Card>
        </>
    )


}

export default Itinerary